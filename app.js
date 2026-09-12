(() => {
  const app = document.getElementById("app");
  const items = Array.isArray(window.VOCABULARY) ? window.VOCABULARY : VOCABULARY;

  const STORAGE_KEY = "swipewords_state_v2";
  const COOLDOWN = 50;
  const SWIPE_THRESHOLD = 46;

  function itemKey(item) {
    return JSON.stringify([
      item?.front || "",
      item?.meaning || "",
      item?.example || ""
    ]);
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  function randomIndex(indexes) {
    return indexes[Math.floor(Math.random() * indexes.length)];
  }

  function createInitialState() {
    if (!items.length) {
      return { currentKey: null, recentKeys: [] };
    }

    const index = Math.floor(Math.random() * items.length);
    const key = itemKey(items[index]);
    const state = {
      currentKey: key,
      recentKeys: [key]
    };
    saveState(state);
    return state;
  }

  function loadState() {
    if (!items.length) return { currentKey: null, recentKeys: [] };

    const availableKeys = new Set(items.map(itemKey));

    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && Array.isArray(saved.recentKeys)) {
        let recentKeys = saved.recentKeys
          .filter((key) => availableKeys.has(key))
          .slice(-COOLDOWN);

        let currentKey = availableKeys.has(saved.currentKey)
          ? saved.currentKey
          : null;

        if (!currentKey) {
          const index = Math.floor(Math.random() * items.length);
          currentKey = itemKey(items[index]);
        }

        // 当前正在显示的词也属于“最近出现”，必须进入 50 次冷却窗口。
        if (recentKeys[recentKeys.length - 1] !== currentKey) {
          recentKeys.push(currentKey);
          recentKeys = recentKeys.slice(-COOLDOWN);
        }

        const state = { currentKey, recentKeys };
        saveState(state);
        return state;
      }
    } catch (_) {}

    return createInitialState();
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
    if (!items.length || !state.currentKey) return null;
    return items.find((item) => itemKey(item) === state.currentKey) || null;
  }

  function chooseNextItem() {
    if (!items.length) return null;
    if (items.length === 1) return items[0];

    // recentKeys 保存“当前词 + 最近 49 个词”。
    // 因此一个词出现后，接下来的 50 次滑动都不会再次出现；
    // 第 51 次选择时，它已经从 recentKeys 头部移出并重新进入随机池。
    let blocked = new Set(state.recentKeys);
    let eligibleIndexes = [];

    for (let i = 0; i < items.length; i++) {
      if (!blocked.has(itemKey(items[i]))) eligibleIndexes.push(i);
    }

    // 正常词库大于 50 条时不会走到这里。
    // 若未来词库少于等于 50 条，则逐步释放最早出现的词，避免卡死。
    if (!eligibleIndexes.length) {
      const relaxedRecent = [...state.recentKeys];
      while (!eligibleIndexes.length && relaxedRecent.length) {
        relaxedRecent.shift();
        blocked = new Set(relaxedRecent);
        for (let i = 0; i < items.length; i++) {
          if (!blocked.has(itemKey(items[i]))) eligibleIndexes.push(i);
        }
      }
    }

    const nextIndex = randomIndex(eligibleIndexes);
    return items[nextIndex];
  }

  function advanceState() {
    const nextItem = chooseNextItem();
    if (!nextItem) return;

    const nextKey = itemKey(nextItem);
    state.currentKey = nextKey;
    state.recentKeys.push(nextKey);

    // 只保留最近 50 个“已经显示过”的词。
    if (state.recentKeys.length > COOLDOWN) {
      state.recentKeys = state.recentKeys.slice(-COOLDOWN);
    }

    saveState(state);
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
