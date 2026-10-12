(() => {
  const app = document.getElementById("app");
  const items = Array.isArray(window.VOCABULARY) ? window.VOCABULARY : VOCABULARY;

  const STORAGE_KEY = "swipewords_state_v2";
  const COOLDOWN = 50;
  const SWIPE_THRESHOLD = 46;

  // 每张五十音卡的抽取权重是普通词卡的 4 倍。
  // 在没有冷却影响的完整池里，46 张五十音卡约占三分之一的抽取概率。
  const KANA_WEIGHT = 4;

  function itemKey(item) {
    return JSON.stringify([
      item?.type || "",
      item?.front || "",
      item?.meaning || "",
      item?.example || "",
      item?.hiragana || "",
      item?.katakana || "",
      item?.romaji || ""
    ]);
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  function itemWeight(item) {
    return item?.type === "kana" ? KANA_WEIGHT : 1;
  }

  function weightedRandomIndex(indexes) {
    if (!indexes.length) return null;

    let total = 0;
    for (const index of indexes) total += itemWeight(items[index]);

    let roll = Math.random() * total;
    for (const index of indexes) {
      roll -= itemWeight(items[index]);
      if (roll < 0) return index;
    }
    return indexes[indexes.length - 1];
  }

  function chooseWeightedFromAll() {
    const indexes = items.map((_, i) => i);
    const index = weightedRandomIndex(indexes);
    return index == null ? null : items[index];
  }

  function createInitialState() {
    if (!items.length) {
      return { currentKey: null, recentKeys: [] };
    }

    const item = chooseWeightedFromAll();
    const key = itemKey(item);
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
          const item = chooseWeightedFromAll();
          currentKey = itemKey(item);
        }

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

  function makeKanaCard(item, card) {
    const pair = document.createElement("div");
    pair.className = "kana-pair";

    const hira = document.createElement("div");
    hira.className = "kana-symbol";
    hira.textContent = item.hiragana || item.front || "";

    const kata = document.createElement("div");
    kata.className = "kana-symbol";
    kata.textContent = item.katakana || item.meaning || "";

    pair.append(hira, kata);

    const labels = document.createElement("div");
    labels.className = "kana-labels";

    const hiraLabel = document.createElement("span");
    hiraLabel.textContent = "平假名";

    const kataLabel = document.createElement("span");
    kataLabel.textContent = "片假名";

    labels.append(hiraLabel, kataLabel);

    const pronunciation = document.createElement("div");
    pronunciation.className = "kana-pronunciation";
    pronunciation.textContent = item.romaji || item.example || "";

    const pronunciationLabel = document.createElement("div");
    pronunciationLabel.className = "kana-pronunciation-label";
    pronunciationLabel.textContent = "发音";

    card.append(pair, labels, pronunciation, pronunciationLabel);
  }

  function makeCard(item, extraClass = "") {
    const card = document.createElement("section");
    card.className = `card ${item?.type === "kana" ? "kana-card" : ""} ${extraClass}`.trim();

    if (item?.type === "kana") {
      makeKanaCard(item, card);
      return card;
    }

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

    let blocked = new Set(state.recentKeys);
    let eligibleIndexes = [];

    for (let i = 0; i < items.length; i++) {
      if (!blocked.has(itemKey(items[i]))) eligibleIndexes.push(i);
    }

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

    const nextIndex = weightedRandomIndex(eligibleIndexes);
    return nextIndex == null ? null : items[nextIndex];
  }

  function advanceState() {
    const nextItem = chooseNextItem();
    if (!nextItem) return;

    const nextKey = itemKey(nextItem);
    state.currentKey = nextKey;
    state.recentKeys.push(nextKey);

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

  window.addEventListener("keydown", (e) => {
    if (["ArrowUp", "ArrowRight", " ", "PageDown"].includes(e.key)) {
      e.preventDefault();
      next();
    }
  });

  renderInitial();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        const registration = await navigator.serviceWorker.register("./sw.js");
        await registration.update();
      } catch (_) {}
    });
  }
})();
