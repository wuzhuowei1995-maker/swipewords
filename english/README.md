# English Random Review

Independent iPhone PWA at `/swipewords/english/`, without changing the original SwipeWords app.

- Shuffle all cards, with no repetition until the deck is exhausted. The order/position persist locally.
- Vocabulary and collocations: English, Chinese meaning, and a natural example.
- Full sentences and paragraphs: display original full text only. Long paragraphs can scroll.
- Tap or swipe in either horizontal direction to advance. On short cards, either vertical swipe advances too. Backward browsing is disabled to enforce the 80-swipe no-repeat requirement.
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


## 2026-10-25 Word-based phrase library replacement

The user-edited Word document `英语学习词库_单词搭配与句式_583条.docx` is the sole authority for the phrase/word/pattern pool. The 113 blank rows indicate deliberate deletions: they must **not** be refilled from older material. Exactly 470 nonempty Word entries are retained, with their English expression, Chinese meaning, and example unchanged. The 180 sentence and 31 paragraph cards are preserved byte-for-byte in content. Total: 681 cards.

The app now records up to 80 recently displayed card indices in localStorage and defers them at the next full-deck shuffle boundary. All advances show a different card, with no card shown again in the following 80 swipes, including across shuffle rounds and reopening the app on the same device/browser. Right-swipe/back-navigation was changed to advance for consistent behavior. If the vocabulary's count/content/order changes in a future update, saved index order is invalidated and freshly randomized.

## 2026-10-25 user-requested additions: body movements, knocking/noises, football

Append-only change to the previously curated 681-card study deck: 60 body-action vocabulary items with custom English example sentences on the same card, 7 tapping/knocking action terms (including 'knock' to preserve the supplied example), 6 muffled/dull/deep sound terms, 3 natural sound collocations, and 5 football physical-contact collocations. Total 81 new phrase cards; now 551 word/phrase/pattern cards + the original 180 standalone sentences and 31 paragraphs = 762 cards. The seven supplied natural noise-example sentences are retained as examples on the relevant phrase cards instead of separate cards so the examples and expressions appear together. All previously present cards are unchanged. The existing 80-swipe no-repeat logic is unchanged. Service-worker cache version bumped to fetch the new data.

## 2026-10-25: hide individual vocabulary cards from the iPhone app

Use the small ⋯ menu in the bottom-right corner on the English page. On a phrase/word/pattern card, choose "将当前词条移出复习" to exclude it permanently from this device's shuffle. Open "已移除" in the same menu to restore any excluded phrase. Standalone sentence and paragraph cards cannot be excluded. Removed keys are stored locally under `english-random-review-removed-v1`, not changed in GitHub, and do not synchronize across devices, browsers, or storage-clearing events. New vocabulary updates preserve the local exclusion list for matching words, and the previous saved shuffle order is migrated when possible. The 80-swipe no-repeat rule remains in place, including across app restarts and shuffle boundaries. The menu is a deliberate button, not triple-tap, to avoid accidental deletion.

## 2026-10-25: optional 30-day GitHub deletion sync and sentence exclusion

Sentence cards now support local exclusion and restoration with the same management menu as word/phrase cards; paragraphs remain non-removable. Removed entries are still stored locally and immediately disappear from the active review rotation.

Permanent GitHub deletion is **opt-in per removed item**. In the "已移除" list, select "申请 GitHub 30天同步", authenticate on GitHub if prompted, then **submit** the prefilled Issue. Merely tapping "remove" in the app does not start the GitHub timer. After the Issue has remained open for 30 full days, `.github/workflows/english-card-deletion-sync.yml` runs daily and removes the exact matching `kind + front` from `english/vocabulary.js`, then bumps the offline cache. Requests are accepted **only from the repository owner**, not arbitrary GitHub users. Closing the GitHub Issue before processing cancels the remote deletion. Restoring locally does **not** close an already-submitted GitHub Issue; the user must close it on GitHub to cancel. GitHub Actions and GitHub Issues need to remain enabled; scheduled runs may be delayed or disabled by GitHub, so exact completion time is not guaranteed. No GitHub token is embedded in the static App.

## 2026-10-25: batch submission of all locally excluded cards

The user can now open ⋯ → 已移除 and click "批量提交 N 项至 GitHub（30天后删除）" to prepare one GitHub Issue containing all currently excluded words/phrases/sentences. The user must still log into GitHub and press **Submit new issue**. GitHub Pages has no server-side credentials and cannot securely upload localStorage data or silently create issues. The daily GitHub Actions workflow processes both V1 single-card Issues and V2 multi-card Issues, respecting a 30-day grace period from Issue submission (or last reopening), and processes each batch in one commit. Closing an Issue cancels all of its pending deletions. The App keeps local hides immediately; GitHub deletion is opt-in, not automatic.

## 2026-10-25: true complete-cycle shuffle and 12-hour remote deletion

Previously, every word/sentence removal or restoration **reshuffled the entire pool**. This was a real bug: seen items could reappear after only 80 steps while unshown items were indefinitely deferred by repeated reshuffling. The new complete-cycle algorithm keeps the current deck and cursor intact. Removed items are skipped without reshuffling; restored items rejoin the unvisited portion of the current round when feasible or enter the next round. All eligible words, collocations, pattern cards, sentences, and paragraphs appear once per full round before any card repeats; no repeat within 80 displayed cards remains enforced across round boundaries as far as the number of active cards permits. The app shows round and word-card progress inside its ⋯ menu. Local round state is persisted on reopening and new code can migrate stored prior shuffle states or card-key orders across later vocabulary changes.

GitHub deletion issues (single and batch) now become eligible **12 hours** after initial submission or last reopening. GitHub Actions checks hourly at minute 11; processing may be late due to queueing or Actions being disabled. Existing open deletion issues automatically use the new threshold without being resubmitted. Merely excluding cards locally remains independent of remote GitHub Issues.
