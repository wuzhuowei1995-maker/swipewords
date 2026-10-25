(() => {
  "use strict";
  const entries = Array.isArray(window.ENGLISH_CARDS) ? window.ENGLISH_CARDS : [];
  const node = document.getElementById("content");
  const view = document.getElementById("view");
  const menuBtn = document.getElementById("review-menu-btn");
  const modal = document.getElementById("review-modal");
  const closeBtn = document.getElementById("review-close");
  const backdrop = document.getElementById("review-backdrop");
  const currentLabel = document.getElementById("review-current");
  const hideBtn = document.getElementById("review-hide");
  const removedLabel = document.getElementById("review-manage-title");
  const removedList = document.getElementById("review-removed-list");
  const managedDetails = document.getElementById("review-manage");

  const KEY = "english-random-review-v3-hidden";
  const PREVIOUS_KEY = "english-random-review-v2-80";
  const LEGACY_KEY = "english-random-review-v1";
  const REMOVED_KEY = "english-random-review-removed-v1";
  const NO_REPEAT = 80;
  let deck = [], cursor = 0, recent = [], active = null, down = null;
  let removed = new Set();

  // Stable word keys survive changes to card order and example sentences.
  function cardKey(item) {
    return item.kind + "\u241f" + item.front.trim().toLowerCase().normalize("NFKC").replace(/\s+/g, " ");
  }
  const cardKeys = entries.map(cardKey);
  const validRemovals = new Set(entries.filter(e => e.kind === "phrase" || e.kind === "sentence").map(cardKey));

  function readRemoved() {
    try {
      const stored = JSON.parse(localStorage.getItem(REMOVED_KEY) || "[]");
      if (Array.isArray(stored)) {
        return new Set(stored.filter(x => typeof x === "string" && validRemovals.has(x)));
      }
    } catch (_) {}
    return new Set();
  }
  removed = readRemoved();
  function saveRemoved() {
    try { localStorage.setItem(REMOVED_KEY, JSON.stringify([...removed])); }
    catch (_) {}
  }

  // Older sentence and paragraph cards never enter the removed set.
  function allowedIndices() {
    const eligible = [];
    for (let i = 0; i < entries.length; i++) {
      if (!removed.has(cardKeys[i])) eligible.push(i);
    }
    return eligible;
  }
  const signature = (() => {
    let hash = 2166136261;
    for (const e of entries) {
      const s = [e.kind, e.front, e.meaning || "", e.example || ""].join("\u241f") + "\n";
      for (let i = 0; i < s.length; i++) {
        hash ^= s.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
      }
    }
    return entries.length + "-" + (hash >>> 0).toString(16);
  })();

  function removedSignature() {
    return [...removed].sort().join("\u241e");
  }
  const randomInt = n => {
    if (window.crypto && window.crypto.getRandomValues) {
      const a = new Uint32Array(1);
      window.crypto.getRandomValues(a);
      return a[0] % n;
    }
    return Math.floor(Math.random() * n);
  };
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = randomInt(i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function isValidOrder(order, expected) {
    return Array.isArray(order) && order.length === expected.length &&
      new Set(order).size === order.length &&
      order.every(i => Number.isInteger(i) && expected.includes(i));
  }
  function isRecent(ids) {
    return Array.isArray(ids) && ids.length >= 1 && ids.length <= NO_REPEAT &&
      ids.every(i => Number.isInteger(i) && i >= 0 && i < entries.length);
  }

  function newDeck(history) {
    const recentSet = new Set(history.slice(-NO_REPEAT));
    const ready = [], deferred = [];
    for (const idx of allowedIndices()) {
      (recentSet.has(idx) ? deferred : ready).push(idx);
    }
    return shuffle(ready).concat(shuffle(deferred));
  }
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify({
        signature, removedSignature: removedSignature(), deck, cursor, recent
      }));
    } catch (_) {}
  }
  function restore() {
    const eligible = allowedIndices();
    try {
      const state = JSON.parse(localStorage.getItem(KEY) || "null");
      if (state && state.signature === signature &&
          state.removedSignature === removedSignature() &&
          isValidOrder(state.deck, eligible) &&
          Number.isInteger(state.cursor) && state.cursor >= 0 && state.cursor < state.deck.length &&
          isRecent(state.recent) && state.recent[state.recent.length - 1] === state.deck[state.cursor]) {
        deck = state.deck; cursor = state.cursor; recent = state.recent.slice(-NO_REPEAT);
        return;
      }
    } catch (_) {}

    // Preserve the previously saved random position for existing users.
    if (!removed.size) {
      for (const key of [PREVIOUS_KEY, LEGACY_KEY]) {
        try {
          const state = JSON.parse(localStorage.getItem(key) || "null");
          if (state && (key !== PREVIOUS_KEY || state.signature === signature) &&
              isValidOrder(state.deck, eligible) &&
              Number.isInteger(state.cursor) && state.cursor >= 0 && state.cursor < state.deck.length) {
            deck = state.deck; cursor = state.cursor;
            recent = key === PREVIOUS_KEY && isRecent(state.recent) &&
              state.recent.at(-1) === state.deck[state.cursor]
              ? state.recent.slice(-NO_REPEAT)
              : deck.slice(Math.max(0, cursor - NO_REPEAT + 1), cursor + 1);
            save();
            return;
          }
        } catch (_) {}
      }
    }
    deck = newDeck([]);
    cursor = 0;
    recent = deck.length ? [deck[0]] : [];
    save();
  }

  function part(tag, css, content) {
    const el = document.createElement(tag);
    el.className = css;
    el.textContent = content;
    node.appendChild(el);
  }
  function render() {
    node.textContent = "";
    if (!deck.length) {
      active = null;
      part("div", "sentence", "No cards available.");
      return;
    }
    active = entries[deck[cursor]];
    const long = active.kind === "paragraph";
    view.className = long ? "long" : "short";
    node.scrollTop = 0;
    if (active.kind === "phrase") {
      part("div", "term", active.front);
      part("div", "meaning", active.meaning);
      part("div", "example", active.example);
    } else {
      part("div", long ? "paragraph" : "sentence", active.front);
    }
    node.classList.remove("fade-in");
    void node.offsetWidth;
    node.classList.add("fade-in");
    save();
  }
  function pushRecent(i) {
    recent.push(i);
    if (recent.length > NO_REPEAT) recent.shift();
  }
  function next() {
    if (modal && !modal.hidden) return;
    if (!deck.length) return;
    if (cursor === deck.length - 1) {
      deck = newDeck(recent); cursor = 0;
    } else {
      cursor++;
    }
    pushRecent(deck[cursor]);
    render();
  }
  function resetAfterRemoval() {
    deck = newDeck(recent); cursor = 0;
    if (deck.length) pushRecent(deck[0]);
    render();
  }
  function reflowAfterRestore() {
    if (!deck.length) {
      resetAfterRemoval();
      return;
    }
    const showing = deck[cursor];
    deck = [showing, ...newDeck(recent).filter(i => i !== showing)];
    cursor = 0;
    render();
  }

  function refreshManagement() {
    const canHide = active && (active.kind === "phrase" || active.kind === "sentence");
    currentLabel.textContent = active
      ? (canHide ? (active.kind === "sentence" ? "当前句子：" : "当前词条：") + active.front : "完整段落不会从复习中移除。")
      : "";
    hideBtn.textContent = active && active.kind === "sentence" ? "将当前句子移出复习" : "将当前词条移出复习";
    hideBtn.disabled = !canHide;
    removedLabel.textContent = "已移除（" + removed.size + "）· 点击查看和恢复";
    removedList.textContent = "";
    const items = entries.filter(e => (e.kind === "phrase" || e.kind === "sentence") && removed.has(cardKey(e)));
    if (!items.length) {
      const p = document.createElement("p");
      p.className = "review-empty";
      p.textContent = "还没有移除的词条。";
      removedList.appendChild(p);
      return;
    }
    for (const item of items) {
      const row = document.createElement("div");
      row.className = "review-removed-row";
      const label = document.createElement("div");
      label.className = "review-removed-name";
      label.textContent = item.front;
      const small = document.createElement("small");
      small.textContent = item.meaning;
      label.appendChild(small);
      const restore = document.createElement("button");
      restore.type = "button"; restore.className = "review-restore";
      restore.textContent = "恢复";
      restore.setAttribute("aria-label", "恢复 " + item.front);
      restore.addEventListener("click", () => {
        if (window.confirm && !window.confirm(
          "恢复本机复习？如已在 GitHub 提交30天后删除申请，还必须去 GitHub 关闭该 Issue，否则到期仍会从主词库删除。"
        )) return;
        removed.delete(cardKey(item));
        saveRemoved();
        reflowAfterRestore();
        refreshManagement();
      });
      const githubBtn = document.createElement("button");
      githubBtn.type = "button";
      githubBtn.className = "review-restore review-github";
      githubBtn.textContent = "申请 GitHub 30天同步";
      githubBtn.setAttribute("aria-label", "为 " + item.front + " 申请30天后从GitHub永久删除");
      githubBtn.addEventListener("click", () => {
        const encodedKey = encodeURIComponent(item.kind + "\u241f" + item.front);
        const title = "[English card deletion] " + item.front.slice(0, 80);
        const issueBody = "ENGLISH_DELETE_REQUEST_V1\nkey=" + encodedKey +
          "\n\n从此 Issue 正式提交之日起满30天，仓库定时任务将从GitHub词库永久移除这张卡片。" +
          "\n30天内如要撤销，请在GitHub关闭此Issue；只在App恢复本机卡片不会取消GitHub申请。";
        const url = "https://github.com/wuzhuowei1995-maker/swipewords/issues/new?title=" +
          encodeURIComponent(title) + "&body=" + encodeURIComponent(issueBody);
        // Opening a link with noopener may return null even if the tab opens.
        // Do not navigate the PWA as a misleading fallback.
        if (window.open) window.open(url, "_blank", "noopener,noreferrer");
      });
      const actions = document.createElement("div");
      actions.className = "review-row-actions";
      actions.appendChild(restore);
      actions.appendChild(githubBtn);
      row.appendChild(label);
      row.appendChild(actions);
      removedList.appendChild(row);
    }
  }
  function openManagement() {
    refreshManagement();
    modal.hidden = false;
    menuBtn.setAttribute("aria-expanded", "true");
    closeBtn.focus();
  }
  function closeManagement() {
    modal.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
    managedDetails.open = false;
    menuBtn.focus();
  }
  function removeCurrent() {
    if (!active || (active.kind !== "phrase" && active.kind !== "sentence")) return;
    removed.add(cardKey(active));
    saveRemoved();
    resetAfterRemoval();
    closeManagement();
  }

  restore();
  render();
  menuBtn.addEventListener("click", openManagement);
  closeBtn.addEventListener("click", closeManagement);
  backdrop.addEventListener("click", closeManagement);
  hideBtn.addEventListener("click", removeCurrent);

  view.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    down = { x: e.clientX, y: e.clientY };
  });
  view.addEventListener("pointerup", e => {
    if (!down || !modal.hidden) return;
    const dx = e.clientX - down.x, dy = e.clientY - down.y;
    down = null;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) { next(); return; }
    if (Math.abs(dy) > 55) {
      if (active && active.kind !== "paragraph") next();
      return;
    }
    if (Math.abs(dx) < 12 && Math.abs(dy) < 12 &&
        !(window.getSelection && window.getSelection()?.toString())) {
      next();
    }
  });
  view.addEventListener("pointercancel", () => { down = null; });
  window.addEventListener("keydown", e => {
    if (!modal.hidden) {
      if (e.key === "Escape") { closeManagement(); e.preventDefault(); }
      return;
    }
    if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", " ", "Enter"].includes(e.key)) {
      if (e.target && /button|summary/i.test(e.target.tagName)) return;
      e.preventDefault();
      next();
    }
  });

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
})();