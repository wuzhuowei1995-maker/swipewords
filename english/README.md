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

## 2026-10-21 update

Imported 213 distinct cards from *English Conversation Review Part 2* and removed one prior duplicate (514 total). Includes seven full speaking paragraphs and revised natural sentences. Some originally unpracticed target groups were added with newly authored illustrative examples; this does not imply that they have been practiced.

## 2026-10-22 update

Added 129 deduplicated study cards from *English Conversation Review* dated 2026-10-22 (81 source vocabulary groups, 37 corrections, 13 sentence patterns and 5 complete English paragraphs). The library now holds 643 cards. The notes are study content, not a record of mastered expressions.

## 2026-10-22 market discussion continuation

Imported 151 deduplicated English practice cards from the October 22 afternoon Market Discussion document (96 vocabulary groups, 37 natural spoken rewrites, 14 reusable sentence patterns and six English speaking paragraphs in the source). Total: 794 unique cards. Examples describe conversational hypotheses, not verified investment claims or completed mastery.
