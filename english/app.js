(() => {
  "use strict";
  const entries = Array.isArray(window.ENGLISH_CARDS) ? window.ENGLISH_CARDS : [];
  const node = document.getElementById("content");
  const view = document.getElementById("view");
  const KEY = "english-random-review-v2-80";
  const LEGACY_KEY = "english-random-review-v1";
  const NO_REPEAT = 80;

  let deck = [], cursor = 0, recent = [], active = null, down = null;

  // Invalidate saved index-based orders if card content or order changes.
  function librarySignature() {
    let hash = 2166136261;
    for (const item of entries) {
      const text = [item.kind, item.front, item.meaning || "", item.example || ""].join("\u241f") + "\n";
      for (let i = 0; i < text.length; i++) {
        hash ^= text.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
      }
    }
    return entries.length + "-" + (hash >>> 0).toString(16);
  }
  const signature = librarySignature();

  const randomInt = n => {
    if (window.crypto && window.crypto.getRandomValues) {
      const a = new Uint32Array(1);
      window.crypto.getRandomValues(a);
      return a[0] % n;
    }
    return Math.floor(Math.random() * n);
  };

  function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = randomInt(i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function isPermutation(order) {
    return Array.isArray(order) && order.length === entries.length &&
      new Set(order).size === entries.length &&
      order.every(i => Number.isInteger(i) && i >= 0 && i < entries.length);
  }

  function isRecent(ids) {
    return Array.isArray(ids) && ids.length >= 1 && ids.length <= NO_REPEAT &&
      ids.every(i => Number.isInteger(i) && i >= 0 && i < entries.length);
  }

  // Shuffle without repeating a card anywhere within a full round.
  // Across two rounds, defer the previous 80 displayed cards until AFTER
  // the first 80 positions of the new round.
  function newDeck(recentlySeen) {
    const blocked = new Set(recentlySeen.slice(-NO_REPEAT));
    const available = [], deferred = [];
    for (let i = 0; i < entries.length; i++) {
      (blocked.has(i) ? deferred : available).push(i);
    }
    shuffleArray(available);
    shuffleArray(deferred);
    return available.concat(deferred);
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify({ signature, deck, cursor, recent })); }
    catch (_) {}
  }

  function restore() {
    try {
      const state = JSON.parse(localStorage.getItem(KEY) || "null");
      if (state && state.signature === signature && isPermutation(state.deck) &&
          Number.isInteger(state.cursor) && state.cursor >= 0 && state.cursor < state.deck.length &&
          isRecent(state.recent) && state.recent[state.recent.length - 1] === state.deck[state.cursor]) {
        deck = state.deck;
        cursor = state.cursor;
        recent = state.recent.slice(-NO_REPEAT);
        return;
      }
    } catch (_) {}

    // Preserve existing users' shuffle position on their first update.
    // A legacy shuffle may not contain the preceding round's history.
    try {
      const old = JSON.parse(localStorage.getItem(LEGACY_KEY) || "null");
      if (old && isPermutation(old.deck) && Number.isInteger(old.cursor) &&
          old.cursor >= 0 && old.cursor < old.deck.length) {
        deck = old.deck;
        cursor = old.cursor;
        recent = deck.slice(Math.max(0, cursor - NO_REPEAT + 1), cursor + 1);
        save();
        return;
      }
    } catch (_) {}

    deck = newDeck([]);
    cursor = 0;
    recent = entries.length ? [deck[0]] : [];
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
    if (!entries.length) {
      part("div", "sentence", "No cards loaded.");
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

  function next() {
    if (!entries.length) return;
    if (cursor === deck.length - 1) {
      deck = newDeck(recent);
      cursor = 0;
    } else {
      cursor++;
    }
    recent.push(deck[cursor]);
    if (recent.length > NO_REPEAT) recent.shift();
    render();
  }

  restore();
  render();

  view.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    down = { x: e.clientX, y: e.clientY };
  });
  view.addEventListener("pointerup", e => {
    if (!down) return;
    const dx = e.clientX - down.x, dy = e.clientY - down.y;
    down = null;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) {
      next(); // Both horizontal directions advance; going back would repeat a card.
      return;
    }
    if (Math.abs(dy) > 55) {
      if (active.kind !== "paragraph") next();
      return;
    }
    if (Math.abs(dx) < 12 && Math.abs(dy) < 12 &&
        !(window.getSelection && window.getSelection()?.toString())) {
      next();
    }
  });
  view.addEventListener("pointercancel", () => { down = null; });

  window.addEventListener("keydown", e => {
    if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", " ", "Enter"].includes(e.key)) {
      e.preventDefault();
      next();
    }
  });

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
})();