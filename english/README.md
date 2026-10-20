# English Random Review

Independent iPhone PWA at `/swipewords/english/`, without changing the original SwipeWords app.

- Shuffle all cards, with no repetition until the deck is exhausted. The order/position persist locally.
- Vocabulary and collocations: English, Chinese meaning, and a natural example.
- Full sentences and paragraphs: display original full text only. Long paragraphs can scroll.
- Tap or swipe left/up to advance (up-swipe on short cards). Swipe right/down for previous cards in the same shuffle round.
- No login, tests, or external dependencies. Service Worker enables offline use after first successful load.
- iPhone: open the published HTTPS URL in Safari → Share → Add to Home Screen.

Data derived from the four supplied reviews of Oct 18–20, 2026, with cumulative duplicates removed. Includes suggested polished sentences and model paragraphs as study material, not literal conversation transcripts.

To add new items, append objects to `vocabulary.js`, then bump the service-worker cache version.
