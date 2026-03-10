| Rank | Problem / Component                       | LeetCode / Similar | Core Logic Summary (Simple & Multiplied Explanation)                       | Key Data Structures                            | Why It's Top / Asked A Lot                          | Difficulty  |
| ---- | ----------------------------------------- | ------------------ | -------------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------- | ----------- |
| 1    | LRU Cache                                 | 146                | Access → move-to-front (recent), evict least recent on full → O(1) get/put | HashMap + Doubly Linked List                   | #1 LLD/caching question everywhere                  | Medium      |
| 2    | Design Hit Counter                        | 362                | Record hits with timestamp, count in last 5 min (300s) → clean old data    | Queue OR fixed 300 buckets (mod 300)           | Classic time-sliding + fixed-space genius           | Medium      |
| 3    | LFU Cache                                 | 460                | Evict least frequent; tie → evict least recent                             | HashMap + freq → DoublyList + min-freq pointer | Harder LRU variant; tests deep understanding        | Hard        |
| 4    | Rate Limiter – Token Bucket               | —                  | Refill tokens at fixed rate, consume 1 per request, allow bursts           | Map<client, {tokens, lastRefill}>              | Production standard (smooth bursts), Redis-friendly | Medium      |
| 5    | Rate Limiter – Sliding Window Counter     | —                  | Two counters (prev + current window) + weighted sum                        | Map<client, {prevCount, currCount, time}>      | Best no-boundary-burst; balanced modern choice      | Medium      |
| 6    | Rate Limiter – Fixed Window Counter       | —                  | Count per fixed time bucket, reset on new window                           | Map<client, {count, windowStart}>              | Simplest; boundary burst flaw → discuss trade-offs  | Easy-Medium |
| 7    | Rate Limiter – Sliding Window Log         | —                  | Keep deque/timestamps in last window, remove old                           | Map<client, Deque<Long>>                       | Exact sliding, memory-heavy → discussion-worthy     | Medium      |
| 8    | Design Leaderboard (Top K Scores)         | 1244 / variant     | Update score, get top K → handle ties by time/ID                           | HashMap + TreeMap/SortedSet/Heap               | Real-time ranking, common in games/apps             | Medium      |
| 9    | Time-based Key-Value Store                | 981                | Store (value, timestamp), get value at exact time                          | Map<key, List<(value, ts)>> + binary search    | Binary search on timestamp, versioned data          | Medium      |
| 10   | In-Memory Cache with TTL / Sliding Expiry | —                  | Evict on expiry, refresh TTL on access (sliding)                           | HashMap + PriorityQueue (expiry) OR lazy check | Real session/cache; TTL + access refresh            | Medium      |
| 11   | Retry with Exponential Backoff + Jitter   | —                  | Retry failed call: wait = base × 2^attempt + random jitter                 | No DS, just math + loop                        | Reliability pattern; microservices favorite         | Easy-Medium |
| 12   | Circuit Breaker                           | —                  | State: closed → open (after failures) → half-open probe                    | State enum + failure count + timeout           | Prevent cascading failures; pairs with retry        | Medium      |
| 13   | Design TinyURL (with rate limiting)       | 535 variant        | Shorten URL, handle collisions, optional rate limit                        | HashMap + base62/counter                       | Hashing + collision + optional limiter              | Easy-Medium |
| 14   | Design Autocomplete with Frequency        | 642 / 1268 variant | Prefix trie, top-K suggestions by freq/recency                             | Trie + Heap per node OR sorted list            | Trie + top-K heap; core search system               | Medium-Hard |
| 15   | Design Top K Frequent in Stream           | 347 / 692 variant  | Maintain frequency count, keep top K                                       | HashMap + MinHeap (size K) OR buckets          | Streaming analytics; heap maintenance               | Medium      |
| 16   | Design Snake Game                         | 353                | Move snake, eat food, grow, collision detect                               | Deque (body positions) + Set (occupied)        | State + direction + queue → classic simulation      | Medium      |
| 17   | Design Vending Machine                    | —                  | Insert money, select item, dispense + change                               | State machine + inventory + money handler      | Transaction + state logic; real-world modeling      | Medium      |
| 18   | Design Parking Lot                        | —                  | Find spot, entry/exit, payment                                             | Arrays/Maps for levels/spots/types             | OOP + allocation logic; resource management         | Easy-Medium |
| 19   | Design Elevator System (multi elevators)  | —                  | Request handling, direction optimization                                   | PriorityQueue per direction + state            | Event-driven + scheduling; classic LLD              | Hard        |
| 20   | Design File System (Trie-based)           | 1166 variant       | Paths → create/delete/list files/folders                                   | Trie (Map<String, Node>)                       | Hierarchical data; trie classic                     | Medium      |



Key Notes / Interview Insights

Caching & Rate Limiter Questions (#1–7)

Popular because they test O(1) operations, sliding windows, eviction policies, distributed thinking.

Node.js context: Redis + in-memory hybrid → practical implementation.

Leaderboards / Top-K / Time-based KV (#8–9, 14–15)

Tests data structures + streaming / analytics logic.

Frequently used in gaming, feed systems, and metrics pipelines.

Game / Simulation (#16–19)

Event-driven, OOP modeling; tests state management and scheduling.

File System / URL Shorteners (#10, 13, 20)

Classic hashing + trie / tree / versioning → evaluates scalable storage and mapping logic.

Reliability Patterns (#11–12)

Retry/backoff and circuit breaker → microservices reliability → extremely practical for Node.js production scenarios.