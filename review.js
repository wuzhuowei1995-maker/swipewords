(() => {
  "use strict";
  const app = document.getElementById("app");
  const items = Array.isArray(window.VOCABULARY) ? window.VOCABULARY : [];
  // Future imported cards without an explicit ID still support local and GitHub removal.
  function fallbackID(x) {
    const s=JSON.stringify([x.type||"",x.front||"",x.meaning||"",x.example||""]);
    let h=2166136261;
    for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}
    return "legacy-"+(h>>>0).toString(16).padStart(8,"0");
  }
  for(const item of items) if(!item.id)item.id=fallbackID(item);
  const STORE = "swipewords_state_v2", REMOVED = "swipewords_removed_v1";
  const REPO = "https://github.com/wuzhuowei1995-maker/swipewords";
  const WINDOW = 100, THRESHOLD = 46;
  function read(k) { try {return JSON.parse(localStorage.getItem(k));}catch(_){return null;} }
  function save(k,v) {try {localStorage.setItem(k,JSON.stringify(v));}catch(_){}}
  function key(x) {return JSON.stringify([x.type||"",x.front||"",x.meaning||"",x.example||"",x.hiragana||"",x.katakana||"",x.romaji||""]);}
  function paragraph(x) {return /paragraph|passage|article|long.text/i.test(String(x?.type||""));}
  function removable(x) {return !!x && !paragraph(x);}
  let removed=Array.isArray(read(REMOVED))?read(REMOVED):[];
  removed=removed.filter((x,i,a)=>x&&typeof x.id==="string"&&a.findIndex(y=>y&&y.id===x.id)===i);
  let removedIDs=new Set(removed.map(x=>x.id));
  const knownIDs=new Map(items.map(x=>[x.id,x]));
  const english=items.filter(x=>x.type!=="kana");
  const split=Math.floor(english.length*0.4);
  const ranks=new Map(english.map((x,i)=>[key(x),i]));
  function weight(x) {
    if(x.type==="kana")return 4;
    if(Number.isFinite(x.weight)&&x.weight>0)return x.weight;
    return ranks.get(key(x))>=split?3:1;
  }
  function randomUnit() {
    if (globalThis.crypto?.getRandomValues) {
      const sample = new Uint32Array(1);
      globalThis.crypto.getRandomValues(sample);
      return sample[0] / 4294967296;
    }
    return Math.random();
  }
  function pick(choices) {
    let total=0;for(const x of choices)total+=weight(x);
    if(total<=0)return null;
    let n=randomUnit()*total;
    for(const x of choices){n-=weight(x);if(n<0)return x;}
    return choices[choices.length-1];
  }
  const old=read(STORE);
  // Keep the existing local history. A cycle queue is persisted separately from
  // recentKeys so removing/restoring a card never starts a new shuffle.
  const state=old&&Array.isArray(old.recentKeys)
    ? {currentKey:typeof old.currentKey==="string"?old.currentKey:null,
       recentKeys:old.recentKeys.filter(x=>typeof x==="string").slice(-WINDOW),
       remainingCycleIds:Array.isArray(old.remainingCycleIds)?old.remainingCycleIds.filter(x=>typeof x==="string"):null,
       draws:Number.isSafeInteger(old.draws)&&old.draws>=0?old.draws:0,
       appearances:old.appearances&&typeof old.appearances==="object"&&!Array.isArray(old.appearances)?old.appearances:{},
       cycleSize:Number.isSafeInteger(old.cycleSize)?old.cycleSize:null}
    : {currentKey:null,recentKeys:[],remainingCycleIds:null,draws:0,appearances:{},cycleSize:null};
  let busy=false,menuOpen=false;
  function current() {return items.find(x=>key(x)===state.currentKey&&!removedIDs.has(x.id))||null;}
  function activeCards() {return items.filter(x=>!removedIDs.has(x.id)&&!paragraph(x));}
  function buildCycle() {
    const pool=activeCards().slice();
    const order=[];
    // Weighted sampling WITHOUT replacement: once a card appears it cannot
    // be drawn again until the cycle has exhausted all other eligible cards.
    while(pool.length) {
      const selected=pick(pool);
      if(!selected)break;
      order.push(selected.id);
      pool.splice(pool.indexOf(selected),1);
    }
    return order;
  }
  function shuffleRemaining() {
    // Reshuffle ONLY undrawn IDs each time the app is opened. Previously
    // shown IDs are never reintroduced by opening, deletion, or restoration.
    const pool = state.remainingCycleIds.map(id=>knownIDs.get(id)).filter(Boolean);
    const fresh=[];
    while (pool.length) {
      const chosen=pick(pool);
      if (!chosen) break;
      fresh.push(chosen.id);
      pool.splice(pool.indexOf(chosen),1);
    }
    state.remainingCycleIds=fresh;
  }
  function normalizeCycle() {
    if(!Array.isArray(state.remainingCycleIds)) {
      // Upgrading from an older version: do not reset the user's progress.
      // Treat unique recent cards as already seen in the current cycle.
      const seen=new Set(state.recentKeys);
      state.remainingCycleIds=buildCycle().filter(id=>!seen.has(key(knownIDs.get(id))));
    }
    if(state.cycleSize===null)state.cycleSize=activeCards().length;
    const allowed=new Set(activeCards().map(x=>x.id));
    const unique=new Set();
    state.remainingCycleIds=state.remainingCycleIds.filter(id=>{
      if(!allowed.has(id)||unique.has(id))return false;
      unique.add(id);return true;
    });
    // New imports must join the existing unfinished cycle immediately.
    // Never reset its progress or revive an already shown card.
    const recentSeen=new Set(state.recentKeys);
    for(const card of activeCards()){
      if(!unique.has(card.id)&&!recentSeen.has(key(card))){
        state.remainingCycleIds.push(card.id);
        unique.add(card.id);
      }
    }
    state.cycleSize=activeCards().length;
  }
  function draw() {
    normalizeCycle();
    const recent=new Set(state.recentKeys.slice(-WINDOW));
    let selected=null;
    // A cycle is only reshuffled once all its active cards have been consumed.
    for(let pass=0;pass<2;pass++){
      for(const id of state.remainingCycleIds){
        const candidate=knownIDs.get(id);
        if(candidate&&!recent.has(key(candidate))){selected=candidate;break;}
      }
      if(selected)break;
      if(state.remainingCycleIds.length>0)break; // Can't violate 100-swipe cooldown.
      state.remainingCycleIds=buildCycle();
      state.cycleSize=activeCards().length;
    }
    if(!selected)return false;
    state.remainingCycleIds=state.remainingCycleIds.filter(id=>id!==selected.id);
    state.currentKey=key(selected);
    state.recentKeys.push(state.currentKey);
    state.recentKeys=state.recentKeys.slice(-WINDOW);
    state.draws++;
    state.appearances[selected.id]=(state.appearances[selected.id]||0)+1;
    save(STORE,state);
    updateCounters();
    return true;
  }
  function el(text,cls="") {
    const node=document.createElement("div");node.className=cls;node.textContent=text||"";return node;
  }
  function btn(text,handler,cls="") {
    const node=document.createElement("button");
    node.type="button";node.className=cls;node.textContent=text;node.addEventListener("click",handler);
    return node;
  }
  function card(x,extra="") {
    const node=document.createElement("section");
    node.className=("card "+(x?.type==="kana"?"kana-card ":"")+extra).trim();
    if(!x){node.classList.add("empty");node.textContent="当前剩余卡片都在100次冷却期内，暂时不能继续。点右下角 ⋯ 可以恢复卡片。";return node;}
    if(x.type==="kana") {
      const row=el("","kana-pair");
      row.append(el(x.hiragana||x.front,"kana-symbol"),el(x.katakana||x.meaning,"kana-symbol"));
      node.append(row,el(x.romaji||x.example,"kana-pronunciation"));
    } else {
      node.append(el(x.front,"front"),el(x.meaning,"meaning"),el(x.example,"example"));
    }
    return node;
  }
  const counter=el("","sw-counters");
  counter.id="sw-counters";
  counter.setAttribute("aria-label","复习计数");
  document.body.appendChild(counter);
  function updateCounters(){
    const x=current();
    const active=activeCards().length;
    const remaining=Array.isArray(state.remainingCycleIds)?state.remainingCycleIds.length:active;
    const completed=Math.max(0,active-remaining);
    const count=x?(state.appearances[x.id]||0):0;
    counter.textContent="已滑 "+state.draws+" · 本轮 "+completed+"/"+active+" · 本词 "+count+" 次";
  }
  function render(){app.replaceChildren(card(current()));updateCounters();}
  const toast=el("","sw-toast");toast.id="sw-toast";toast.setAttribute("role","status");document.body.appendChild(toast);
  let toastTimer;
  function hint(s){toast.textContent=s;toast.classList.add("visible");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("visible"),3300);}
  function next() {
    if(busy||menuOpen)return;
    const previous=app.querySelector(".card");
    if(!draw()){hint("本轮剩余卡片尚在100次冷却期内，不会提前重复。");return;}
    busy=true;
    const upcoming=card(current(),"enter-up");app.appendChild(upcoming);
    requestAnimationFrame(()=>{previous?.classList.add("exit-up");upcoming.classList.add("enter-active");});
    setTimeout(()=>{previous?.remove();upcoming.classList.remove("enter-up","enter-active");busy=false;},190);
  }
  const menu=btn("⋯",()=>setMenu(!menuOpen));menu.id="sw-menu-button";
  menu.setAttribute("aria-label","管理词条");menu.setAttribute("aria-haspopup","dialog");
  document.body.appendChild(menu);
  const overlay=el("","sw-overlay");overlay.id="sw-overlay";overlay.hidden=true;
  const sheet=document.createElement("section");sheet.id="sw-sheet";
  sheet.setAttribute("role","dialog");sheet.setAttribute("aria-modal","true");sheet.setAttribute("aria-label","词条管理");
  overlay.appendChild(sheet);document.body.appendChild(overlay);
  overlay.addEventListener("click",e=>{if(e.target===overlay)setMenu(false);});
  function setMenu(open){menuOpen=!!open;overlay.hidden=!menuOpen;menu.setAttribute("aria-expanded",String(menuOpen));if(menuOpen)updateSheet();}
  function removeCurrent() {
    const x=current();if(!removable(x))return;
    removed.push({id:x.id,front:x.front,type:x.type,removedAt:new Date().toISOString()});
    removedIDs.add(x.id);save(REMOVED,removed);
    // The removed card is skipped; the rest of the current cycle is kept.
    if(!draw()){state.currentKey=null;save(STORE,state);}
    busy=false;render();updateSheet();
  }
  function restore(id) {
    removed=removed.filter(x=>x.id!==id);removedIDs=new Set(removed.map(x=>x.id));save(REMOVED,removed);
    normalizeCycle();
    // A restored card rejoins the unfinished cycle without resetting it.
    // If it is in recent history, the 100-swipe rule still takes priority.
    if(knownIDs.has(id)&&!state.remainingCycleIds.includes(id)&&
       !state.recentKeys.includes(key(knownIDs.get(id))))state.remainingCycleIds.push(id);
    save(STORE,state);
    updateCounters();
    if(!current()){draw();render();}
    updateSheet();
  }
  function issueBody(list) {
    return [
      "SWIPEWORDS_DELETE_REQUEST_V1",
      JSON.stringify({schema:"swipewords.delete.v1",ids:list.map(x=>x.id)}),
      "",
      "Permanent deletion request. The 10-hour grace period starts when this GitHub Issue is created.",
      "Close the Issue before processing to cancel. Restoring locally does not cancel this Issue.",
      "",
      "Preview:",...list.slice(0,20).map(x=>"- "+x.id+" — "+x.front),
      list.length>20?"... and "+(list.length-20)+" additional cards":""
    ].join("\n");
  }
  function issue() {
    const list=removed.filter(x=>knownIDs.has(x.id)&&removable(knownIDs.get(x.id)));
    if(!list.length){hint("没有可提交的已移除卡片。");return;}
    const title="[SwipeWords deletion] "+list.length+" cards";
    const body=issueBody(list);
    const url=REPO+"/issues/new?title="+encodeURIComponent(title)+"&body="+encodeURIComponent(body);
    if(url.length<5500) {
      window.open(url,"_blank","noopener,noreferrer");
      hint("请在 GitHub 确认创建 Issue。");
    } else {
      const compactURL=REPO+"/issues/new?title="+encodeURIComponent(title);
      const fallback=()=>{
        const input=document.createElement("textarea");input.value=body;input.style.position="fixed";input.style.opacity="0";
        document.body.appendChild(input);input.focus();input.select();
        const ok=document.execCommand("copy");input.remove();
        hint(ok?"已复制正文，请粘贴到 GitHub Issue。":"自动复制失败，请在电脑上提交。");
      };
      if(navigator.clipboard?.writeText)
        navigator.clipboard.writeText(body).then(()=>hint("已复制正文，请粘贴到 GitHub Issue。"),fallback);
      else fallback();
      window.open(compactURL,"_blank","noopener,noreferrer");
    }
  }
  function updateSheet() {
    sheet.replaceChildren();
    const head=el("","sw-heading");
    head.append(el("词条管理","sw-heading-title"),btn("×",()=>setMenu(false),"sw-close"));
    sheet.appendChild(head);
    const remove=btn("移除当前卡片",removeCurrent,"sw-primary");
    remove.disabled=!removable(current());
    sheet.append(remove,el("移除仅在本机生效，不会重置随机历史或当前轮次；一轮内不会重复。","sw-help"),
      el("已移除 · "+removed.length,"sw-title"));
    const list=el("","sw-removed-list");
    if(!removed.length)list.append(el("暂无移除记录","sw-muted"));
    for(const x of removed) {
      const row=el("","sw-removed-row"),desc=el("","sw-removed-group");
      const available=knownIDs.has(x.id);
      desc.append(el(x.front||x.id,"sw-removed-front"),
        el(available?"本机已移除":"主词库已不存在","sw-muted"));
      row.append(desc,btn(available?"恢复":"清除记录",()=>restore(x.id),"sw-small"));
      list.append(row);
    }
    sheet.appendChild(list);
    const submit=btn("批量提交 GitHub Issue",issue,"sw-primary sw-submit");
    submit.disabled=!removed.some(x=>knownIDs.has(x.id)&&removable(knownIDs.get(x.id)));
    sheet.append(submit,
      el("请使用该仓库所有者的 GitHub 账号创建 Issue。创建后等待 10 小时，每小时检查并自动永久删除。","sw-help"),
      el("到期处理前关闭 Issue 可取消；在 App 恢复不会取消已提交 Issue。","sw-help"));
    const link=document.createElement("a");link.className="sw-link";link.href=REPO+"/issues";
    link.target="_blank";link.rel="noopener noreferrer";link.textContent="查看 GitHub Issues";
    sheet.appendChild(link);
  }
  let touchX=0,touchY=0;
  app.addEventListener("touchstart",e=>{if(e.touches.length){touchX=e.touches[0].clientX;touchY=e.touches[0].clientY;}},{passive:true});
  app.addEventListener("touchend",e=>{
    if(!e.changedTouches.length||menuOpen)return;
    const dx=e.changedTouches[0].clientX-touchX,dy=e.changedTouches[0].clientY-touchY;
    if((dy< -THRESHOLD&&Math.abs(dy)>Math.abs(dx))||(dx< -THRESHOLD&&Math.abs(dx)>Math.abs(dy)))next();
  },{passive:true});
  let pointer=null;
  app.addEventListener("pointerdown",e=>{if(e.pointerType!=="touch")pointer=[e.clientX,e.clientY];});
  app.addEventListener("pointerup",e=>{
    if(!pointer||e.pointerType==="touch")return;
    const dx=e.clientX-pointer[0],dy=e.clientY-pointer[1];pointer=null;
    if(Math.max(Math.abs(dx),Math.abs(dy))>=THRESHOLD&&(dx<0||dy<0))next();
  });
  let wheelLock=false;
  app.addEventListener("wheel",e=>{
    e.preventDefault();if(wheelLock||Math.abs(e.deltaY)<8)return;
    wheelLock=true;if(e.deltaY>0)next();setTimeout(()=>{wheelLock=false;},250);
  },{passive:false});
  window.addEventListener("keydown",e=>{
    if(e.key==="Escape"&&menuOpen){setMenu(false);return;}
    if(menuOpen)return;
    if(["ArrowUp","ArrowRight"," ","PageDown"].includes(e.key)){e.preventDefault();next();}
  });
  // Keep old history and the unfinished cycle, but use a NEW weighted
  // random order on every app launch. This is not a cycle restart.
  normalizeCycle();
  shuffleRemaining();
  save(STORE,state);
  if(!current()){if(!draw()){state.currentKey=null;save(STORE,state);}}
  else {
    if(state.recentKeys[state.recentKeys.length-1]!==state.currentKey){
      state.recentKeys.push(state.currentKey);state.recentKeys=state.recentKeys.slice(-WINDOW);
    }
    save(STORE,state);
  }
  render();
  if("serviceWorker" in navigator)window.addEventListener("load",async()=>{
    try{const reg=await navigator.serviceWorker.register("./sw.js");await reg.update();}catch(_){}
  });
})();