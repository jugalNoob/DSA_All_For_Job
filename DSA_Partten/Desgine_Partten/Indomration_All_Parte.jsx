Love this topic — this is exactly how interviewers think.
What you’re pointing at is not “Gang of Four patterns”, but Design Problem Meta-Patterns used in system design + data structure design interviews.

I’ll break this into:

1️⃣ What is the 1 Meta-Pattern
2️⃣ Why interviewers care
3️⃣ Core Design Patterns (with use-cases)
4️⃣ Time–Space tradeoff mindset
5️⃣ API design clarity (huge pro tip)
6️⃣ A mental checklist you can reuse

🧠 1️⃣ The ONE Meta-Pattern (Very Important)
🔑 META-PATTERN:

“Combine basic data structures to satisfy conflicting constraints.”

Every design problem is really asking:

How do you trade:
✔ speed
✔ memory
✔ correctness
✔ simplicity


👉 You NEVER invent new data structures
👉 You compose existing ones (Map, Heap, Stack, Queue, Tree, Set)

🎯 2️⃣ Why Interviewers Love These Problems

Design DS problems test:

Can you model real systems

Can you design clean APIs

Can you optimize time vs space

Can you justify tradeoffs

They are mini system-design interviews.

🧩 3️⃣ Core Design Patterns (Grouped by Meta-Pattern)
🟢 A. Cache Design Pattern

(Map + Ordering Structure)

🔥 LRU Cache

Data Structures

HashMap → O(1) access

Doubly Linked List → ordering

Operations

get(key)
put(key, value)


Tradeoff

Fast access

− Extra memory for pointers

🔥 LFU Cache

Data Structures

HashMap (key → node)

HashMap (freq → DLL)

Track minFrequency

Why harder?

Frequency changes dynamically

Eviction depends on least frequency + recency

🟡 B. Stack Augmentation Pattern

(Stack + Auxiliary Structure)

🔥 Min Stack

Goal

push, pop, top, getMin → O(1)


Pattern

Stack

MinStack OR encode values

Tradeoff

Constant time

− Extra space or math trick

🔵 C. Indexing & Lookup Pattern

(HashMap + Sorted / Searchable DS)

🔥 Time-Based Key Value Store
set(key, value, timestamp)
get(key, timestamp)


Data Structures

HashMap → key

Sorted array / TreeMap → timestamps

Key idea

Binary search over time

🔥 Hit Counter
hit(timestamp)
getHits(timestamp)


Patterns

Fixed window

Sliding window

Circular array

Tradeoff

Precision vs memory

🟣 D. Tree / Prefix Pattern

(Trie-based designs)

🔥 Trie

Used in:

Autocomplete

Dictionary

Prefix search

Search suggestions

Tradeoff

Fast prefix search

− High memory

🔥 Design Search Suggestions

Trie + Priority Queue / Top-K logic

🔴 E. Graph / Feed Design Pattern
🔥 Design Twitter

Requirements

Post tweet

Follow/unfollow

Get news feed

Data Structures

HashMap (user → tweets)

Heap (merge feeds)

Timestamp ordering

Key idea

K-way merge of sorted streams

🟠 F. Queue + Time Pattern
🔥 Rate Limiter

Fixed window

Sliding window

Token bucket

Data Structures

Queue

Counters

Time logic

🟤 G. Frequency & Statistics Pattern
🔥 Top K Frequent Elements

Data Structures

HashMap (count)

Heap / Bucket Sort

Tradeoff

Heap → flexible

Bucket → faster, more memory

📦 30+ COMMON “DESIGN” QUESTIONS (Grouped)
Cache

1::LRU Cache

2::LFU Cache

3:: MRU Cache

Stack

1:: Min Stack

2:: Max Stack

Stack with middle element

Time

1:: Hit Counter

2:: Rate Limiter

3:: Logger Rate Limiter

Key-Value

2:: Time-based KV store

1:: Expiring map

Social

1:: Twitter

2:: Instagram Feed

3:: News Feed

Tree / Trie

1:: Autocomplete

2:: Prefix Map

3:: Word Dictionary

Streaming

1:: Moving average

2:: Median from data stream

⚖️ 4️⃣ Time–Space Tradeoff (INTERVIEW GOLD)

⚖️ 4️⃣ Time–Space Tradeoff (INTERVIEW GOLD)

| Choice            | Result         |
| ----------------- | -------------- |
| More memory       | Faster queries |
| Less memory       | Slower queries |
| Precompute        | Faster reads   |
| Compute on demand | Faster writes  |



📌 Say this explicitly — interviewers LOVE it.

🧠 5️⃣ API Design Clarity (Pro Tip ⭐)

Before coding, define:

What operations exist?
What are time complexities?
What happens on edge cases?

Example (LRU)
get(key) → returns value or -1
put(key, value) → evicts if capacity exceeded


Clear API = clear thinking.

✅ 6️⃣ Universal Design Problem Checklist

When you see “Design X”, do this:

1️⃣ Clarify operations
2️⃣ Identify constraints
3️⃣ Pick base data structures
4️⃣ Combine them
5️⃣ Justify time & space
6️⃣ Explain tradeoffs

🏆 Interview Power Line

“This problem is about trading memory for constant-time operations, so I’ll combine a hash-based lookup with an ordered structure to maintain eviction rules.”