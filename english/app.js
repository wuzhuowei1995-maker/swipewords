(() => {
  "use strict";
  const entries = Array.isArray(window.ENGLISH_CARDS) ? window.ENGLISH_CARDS : [];
  const node = document.getElementById("content");
  const view = document.getElementById("view");
  const KEY = "english-random-review-v1";
  let deck = [], cursor = 0, active = null, down = null, moved = false;
  const randomInt = n => {
    if (window.crypto && crypto.getRandomValues) {
      const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n;
    }
    return Math.floor(Math.random() * n);
  };
  const shuffle = (last) => {
    const a = entries.map((_, i) => i);
    for(let i=a.length-1;i>0;i--){const j=randomInt(i+1);[a[i],a[j]]=[a[j],a[i]];}
    if(a.length>1 && last!==null && a[0]===last){[a[0],a[1]]=[a[1],a[0]];}
    return a;
  };
  function save(){try{localStorage.setItem(KEY,JSON.stringify({deck,cursor}))}catch(e){}}
  function restore(){
    try{
      const s=JSON.parse(localStorage.getItem(KEY)||"null");
      if(s && Array.isArray(s.deck) && s.deck.length===entries.length &&
        new Set(s.deck).size===entries.length && s.deck.every(i=>Number.isInteger(i)&&i>=0&&i<entries.length) &&
        Number.isInteger(s.cursor)&&s.cursor>=0&&s.cursor<s.deck.length) {
          deck=s.deck;cursor=s.cursor;return;
      }
    }catch(e){}
    deck=shuffle(null);cursor=0;save();
  }
  function part(tag,css,content){
    const el=document.createElement(tag);el.className=css;el.textContent=content;node.appendChild(el);
  }
  function render(){
    node.textContent="";
    if(!entries.length){part("div","sentence","No cards loaded.");return}
    active=entries[deck[cursor]];
    const long=active.kind==="paragraph";
    view.className=long?"long":"short";
    node.scrollTop=0;
    if(active.kind==="phrase"){
      part("div","term",active.front);
      part("div","meaning",active.meaning);
      part("div","example",active.example);
    } else part("div",long?"paragraph":"sentence",active.front);
    node.classList.remove("fade-in");void node.offsetWidth;node.classList.add("fade-in");
    save();
  }
  function next(){
    if(!entries.length)return;
    if(cursor>=deck.length-1){deck=shuffle(deck[cursor]);cursor=0;}
    else cursor++;
    render();
  }
  function previous(){if(cursor>0){cursor--;render();}}
  restore();render();
  view.addEventListener("pointerdown",e=>{
    if(e.button!==0)return;
    down={x:e.clientX,y:e.clientY};moved=false;
  });
  view.addEventListener("pointerup",e=>{
    if(!down)return;
    const dx=e.clientX-down.x,dy=e.clientY-down.y;down=null;
    if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)){dx<0?next():previous();return;}
    if(Math.abs(dy)>55){if(active.kind!=="paragraph")dy<0?next():previous();return;}
    if(Math.abs(dx)<12&&Math.abs(dy)<12&&!window.getSelection()?.toString())next();
  });
  view.addEventListener("pointercancel",()=>{down=null});
  window.addEventListener("keydown",e=>{
    if(["ArrowRight","ArrowDown"," ","Enter"].includes(e.key)){e.preventDefault();next();}
    if(["ArrowLeft","ArrowUp"].includes(e.key)){e.preventDefault();previous();}
  });
  if("serviceWorker" in navigator && location.protocol.startsWith("http")){
    window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
  }
})();