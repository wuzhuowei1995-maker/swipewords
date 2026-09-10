(() => {
  const app = document.getElementById("app");
  const items = Array.isArray(window.VOCABULARY) ? window.VOCABULARY : VOCABULARY;

  const STORAGE_KEY = "swipewords_daily_state_v1";
  const SWIPE_THRESHOLD = 46;

  function localDateKey() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function shuffledIndexes(length) {
    const arr = Array.from({ length }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function newState() {
    return {
      date: localDateKey(),
      order: shuffledIndexes(items.length),
      position: 0
    };
  }

  function validState(state) {
    return state &&
      state.date === localDateKey() &&
      Array.isArray(state.order) &&
      state.order.length === items.length &&
      state.order.every((v) => Number.isInteger(v) && v >= 0 && v < items.length) &&
      Number.isInteger(state.position) &&
      state.position >= 0 &&
      state.position < Math.max(items.length, 1);
  }

  function loadState() {
    if (!items.length) return { date: localDateKey(), order: [], position: 0 };

    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (validState(saved)) return saved;
    } catch (_) {}

    const state = newState();
    saveState(state);
    return state;
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  let state = loadState();
  let animating = false;

  function makeCard(item, extraClass = "") {
    const card = document.createElement("section");
    card.className = `card ${extraClass}`.trim();

    const front = document.createElement("div");
    front.className = "front";
    front.textContent = item.front || "";

    const meaning = document.createElement("div");
    meaning.className = "meaning";
    meaning.textContent = item.meaning || "";

    const example = document.createElement("div");
    example.className = "example";
    example.textContent = item.example || "";

    card.append(front, meaning, example);
    return card;
  }

  function currentItem() {
    if (!items.length) return null;
    const index = state.order[state.position];
    return items[index];
  }

  function renderInitial() {
    app.replaceChildren();

    const item = currentItem();
    if (!item) {
      const empty = document.createElement("div");
      empty.className = "card empty";
      empty.textContent = "词库还是空的。请在 vocabulary.js 里加入内容。";
      app.appendChild(empty);
      return;
    }

    app.appendChild(makeCard(item));
  }

  function advanceState() {
    if (items.length <= 1) return;

    state.position += 1;

    // 一轮看完后重新洗牌，继续展示。
    if (state.position >= state.order.length) {
      state.order = shuffledIndexes(items.length);
      state.position = 0;
    }

    saveState(state);
  }

  function next() {
    if (animating || items.length <= 1) return;
    animating = true;

    const oldCard = app.querySelector(".card");
    advanceState();
    const newCard = makeCard(currentItem(), "enter-up");
    app.appendChild(newCard);

    requestAnimationFrame(() => {
      oldCard?.classList.add("exit-up");
      newCard.classList.add("enter-active");
    });

    window.setTimeout(() => {
      oldCard?.remove();
      newCard.classList.remove("enter-up", "enter-active");
      animating = false;
    }, 190);
  }

  let startX = 0;
  let startY = 0;

  app.addEventListener("touchstart", (e) => {
    if (!e.touches.length) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  app.addEventListener("touchend", (e) => {
    if (!e.changedTouches.length) return;

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const dx = endX - startX;
    const dy = endY - startY;

    // 上滑，或明显左滑：下一条。
    if (
      (dy < -SWIPE_THRESHOLD && Math.abs(dy) > Math.abs(dx)) ||
      (dx < -SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy))
    ) {
      next();
    }
  }, { passive: true });

  // 仅方便电脑上预览；iPhone 界面不会出现任何按钮。
  window.addEventListener("keydown", (e) => {
    if (["ArrowUp", "ArrowRight", " ", "PageDown"].includes(e.key)) {
      e.preventDefault();
      next();
    }
  });

  renderInitial();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }
})();
