## 2) LFU Cache

**Goal:** Evict least‑frequent, then least‑recent
**Core DS:** HashMap (key→node) + HashMap (freq→DLL) + minFreq
**Why:** Frequency buckets keep eviction O(1)
**Tradeoff:** Higher memory & complexity


Sure! Let’s break it down simply.

🔹 What is LFU Cache?

LFU = Least Frequently Used cache.

It’s a type of cache that removes the item that is used the least number of times when the cache is full.

Unlike LRU (which cares about recency), LFU cares about frequency.

🔹 How it works (simple example)

Imagine a cache with capacity = 3:


| Key | Value | Frequency |
| --- | ----- | --------- |
| 1   | A     | 2         |
| 2   | B     | 1         |
| 3   | C     | 3         |


If we add a new item 4 → D, the cache is full.

LFU will remove the key with the smallest frequency.

Here, key 2 has frequency 1 (least used), so it will be removed.

🔹 Key Points

Each item in LFU has a frequency counter.

On get(key):

Return the value

Increment the frequency of that key.

On put(key, value):

If cache has space → add it with frequency = 1

If cache is full → remove least frequently used key

If multiple keys have same frequency → remove the oldest one (tie-breaker).

🔹 Visual analogy

Think of a library:

Books that are borrowed least often are removed first when new books arrive.

LRU cares about last borrowed

LFU cares about borrow count