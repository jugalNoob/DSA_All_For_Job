# 30 Design Problems – Explained (Meta‑Pattern View)

> **Meta‑Pattern:** Combine basic data structures to satisfy
 conflicting constraints (time, space, ordering, frequency).

For each problem below you’ll see: **Goal → Core DS → Why 
it works → Tradeoffs** (no code).

---

## 1) LRU Cache

**Goal:** O(1) get/put with least‑recent eviction
**Core DS:** HashMap + Doubly Linked List
**Why:** Map gives O(1) access; DLL maintains recency order
**Tradeoff:** Extra pointers for speed

## 2) LFU Cache

**Goal:** Evict least‑frequent, then least‑recent
**Core DS:** HashMap (key→node) + HashMap (freq→DLL) + minFreq
**Why:** Frequency buckets keep eviction O(1)
**Tradeoff:** Higher memory & complexity

## 3) Min Stack

**Goal:** getMin in O(1)
**Core DS:** Stack + auxiliary min stack (or encoding)
**Why:** Track minimum alongside values
**Tradeoff:** Extra space or math trick

## 4) Max Stack

**Goal:** getMax in O(1)
**Core DS:** Stack + auxiliary max stack
**Why:** Symmetric to Min Stack
**Tradeoff:** Extra space

## 5) Stack with Middle Element

**Goal:** Find/delete middle in O(1)
**Core DS:** Doubly Linked List + mid pointer
**Why:** Middle pointer updates on size change
**Tradeoff:** Pointer management

## 6) Time‑Based Key Value Store

**Goal:** Get value at timestamp
**Core DS:** HashMap + sorted list / TreeMap
**Why:** Binary search on time
**Tradeoff:** Slower writes if strictly sorted

## 7) Expiring Map (TTL Cache)

**Goal:** Auto‑expire entries
**Core DS:** HashMap + Min‑Heap (expiry)
**Why:** Heap surfaces next expiry
**Tradeoff:** Heap overhead

## 8) Hit Counter

**Goal:** Count hits in last N seconds
**Core DS:** Queue / Circular array
**Why:** Time‑bucket aggregation
**Tradeoff:** Precision vs memory

## 9) Logger Rate Limiter

**Goal:** Print message once per interval
**Core DS:** HashMap (msg→lastTime)
**Why:** Fast suppression check
**Tradeoff:** Map growth

## 10) Rate Limiter

**Goal:** Control request rate
**Core DS:** Counters / Queue / Token Bucket
**Why:** Time‑based accounting
**Tradeoff:** Accuracy vs simplicity

## 11) Moving Average from Data Stream

**Goal:** Rolling average
**Core DS:** Queue + running sum
**Why:** O(1) update per item
**Tradeoff:** Window memory

## 12) Median from Data Stream

**Goal:** Real‑time median
**Core DS:** Two Heaps (max‑heap, min‑heap)
**Why:** Balance halves
**Tradeoff:** Heap maintenance

## 13) Top K Frequent Elements

**Goal:** Most frequent items
**Core DS:** HashMap + Heap / Buckets
**Why:** Frequency aggregation
**Tradeoff:** Heap vs bucket memory

## 14) K Closest Points

**Goal:** Closest by distance
**Core DS:** Max‑Heap of size K
**Why:** Keep best K so far
**Tradeoff:** Heap cost

## 15) Design Twitter

**Goal:** News feed by recency
**Core DS:** HashMap + Heap (K‑way merge)
**Why:** Merge sorted tweet streams
**Tradeoff:** Feed generation cost

## 16) Design Instagram Feed

**Goal:** Media feed + follow graph
**Core DS:** HashMap + Heap + Graph
**Why:** Same as Twitter with media
**Tradeoff:** Storage & fan‑out

## 17) Trie

**Goal:** Prefix search
**Core DS:** Trie (prefix tree)
**Why:** O(length) lookup
**Tradeoff:** High memory

## 18) Autocomplete System

**Goal:** Suggest top results
**Core DS:** Trie + Top‑K per node
**Why:** Prefix narrowing + ranking
**Tradeoff:** Memory heavy

## 19) Word Dictionary (Wildcard Search)

**Goal:** Support '.' wildcard
**Core DS:** Trie + DFS
**Why:** Branch on wildcard
**Tradeoff:** Worst‑case branching

## 20) Design Browser History

**Goal:** Back/Forward navigation
**Core DS:** Stack(s) or DLL
**Why:** Natural navigation model
**Tradeoff:** Memory for history

## 21) Design File System

**Goal:** Hierarchical storage
**Core DS:** Trie / Tree
**Why:** Path traversal
**Tradeoff:** Node overhead

## 22) Design Parking Lot

**Goal:** Slot allocation by size
**Core DS:** Heaps / Sets by type
**Why:** Fast allocation & release
**Tradeoff:** Multiple indexes

## 23) Design HashMap

**Goal:** Key‑value storage
**Core DS:** Array + Buckets (chaining)
**Why:** Average O(1) access
**Tradeoff:** Collisions & resizing

## 24) Design HashSet

**Goal:** Unique elements
**Core DS:** Same as HashMap without values
**Why:** Membership checks
**Tradeoff:** Memory

## 25) Circular Queue

**Goal:** Fixed‑size queue
**Core DS:** Array + head/tail
**Why:** Space efficient reuse
**Tradeoff:** Index math

## 26) LRU Cache with Expiry

**Goal:** LRU + TTL
**Core DS:** LRU (Map+DLL) + Min‑Heap
**Why:** Evict by time & recency
**Tradeoff:** Extra structure

## 27) Snapshot Array

**Goal:** Versioned array
**Core DS:** Array of maps / lists
**Why:** Sparse snapshot storage
**Tradeoff:** Query time

## 28) Randomized Set

**Goal:** O(1) insert/delete/getRandom
**Core DS:** Array + HashMap
**Why:** Index swap trick
**Tradeoff:** Extra index map

## 29) All O(1) Data Structure

**Goal:** Inc/Dec & getMax/Min
**Core DS:** HashMap + DLL of counts
**Why:** Ordered frequency buckets
**Tradeoff:** Complex pointers

## 30) Design Search Suggestions System

**Goal:** Show suggestions as you type
**Core DS:** Trie + sorting/heap
**Why:** Prefix‑based narrowing
**Tradeoff:** Memory vs latency

---

## How to Use This in Interviews

* **Start with API** (operations & constraints)
* **Choose base DS** (Map, Heap, Stack, Tree)
* **Compose** to meet time goals
* **State tradeoffs clearly**

> Interviewer signal: *Clear API + justified tradeoffs > perfect code.*


I’ve created a clean, interview-ready canvas with 30 design problems fully explained using the meta-pattern mindset (goal → data structures → why → tradeoffs).

👉 You can now scroll, revise, and reuse this as a single source for:

DS design interviews

System-design rounds (LLD)

“Design X” LeetCode problems

How to use this effectively

Before interviews: skim each problem and say the core DS combo out loud

During interviews: explain API first, then DS choice, then tradeoff

After interviews: map any new problem to one of these 30 patterns

If you want next, I can:

🔥 Convert this into a 1-page cheat sheet

🔥 Do deep dives (LRU, LFU, Twitter, Rate Limiter) one by one

🔥 Add common follow-up questions interviewers ask for each

