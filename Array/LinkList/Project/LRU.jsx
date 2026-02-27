Excellent choice Jugal 🔥
LRU Cache is very important for interviews + real backend systems (Redis, CDN, DB caching).

Let’s build a:

🚀 Real-World Project: API Response Cache (LRU Based)

Imagine:

Your Node.js API calls database

DB is slow

We cache most recently used data

If cache full → remove least recently used

Exactly how:

Redis

Browser cache

CDN

DB query caching
work internally.

🧠 Why LRU?

LRU = Least Recently Used

If capacity = 3
Access pattern:

A → B → C
Access A
Add D


B gets removed (because least recently used)





🔥 Implementation Strategy (Interview Level)

We use:

HashMap → O(1) lookup

Doubly Linked List → O(1) remove + move

Time Complexity:

get() → O(1)

put() → O(1)

💻 Real Project Code (Production Style)

Save as:

lruCache.js

// ==============================
// 🔹 Doubly Linked List Node
// ==============================
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// ==============================
// 🔹 LRU Cache Class
// ==============================
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    // Dummy head & tail
    this.head = new Node(null, null);
    this.tail = new Node(null, null);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Remove node
  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // Insert at front (Most Recently Used)
  insert(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
  }

  // Get value
  get(key) {
    if (!this.cache.has(key)) {
      console.log(`❌ Cache MISS for ${key}`);
      return null;
    }

    const node = this.cache.get(key);

    this.remove(node);
    this.insert(node);

    console.log(`✅ Cache HIT for ${key}`);
    return node.value;
  }

  // Put value
  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.remove(node);
      this.insert(node);
    } else {
      if (this.cache.size >= this.capacity) {
        // Remove LRU (last node)
        const lru = this.tail.prev;
        this.remove(lru);
        this.cache.delete(lru.key);
        console.log(`🗑 Removed LRU key: ${lru.key}`);
      }

      const newNode = new Node(key, value);
      this.insert(newNode);
      this.cache.set(key, newNode);
    }
  }

  display() {
    let current = this.head.next;
    let output = "Cache State:\n";

    while (current !== this.tail) {
      output += `${current.key}:${current.value} → `;
      current = current.next;
    }

    console.log(output + "NULL\n");
  }
}

// ==============================
// 🚀 Real Life Simulation
// ==============================

const cache = new LRUCache(3);

cache.put("user1", "Jugal");
cache.put("user2", "Rahul");
cache.put("user3", "Aman");

cache.display();

cache.get("user1");  // Access user1 (becomes most recent)

cache.put("user4", "Rohit"); // Removes least used

cache.display();

🧠 Real Backend Example

Imagine:

app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;

  const cachedUser = cache.get(userId);
  if (cachedUser) {
    return res.json({ source: "cache", data: cachedUser });
  }

  const user = await db.findUser(userId);

  cache.put(userId, user);

  res.json({ source: "database", data: user });
});


This reduces:

DB load

Response time

Server cost

🎯 Interview Explanation

If interviewer asks:

Why use Doubly Linked List?

Because:

We need O(1) remove from middle

Singly list can't remove in O(1) without previous pointer

Why HashMap?

To access nodes in O(1)

Overall Complexity?

get → O(1)

put → O(1)

Space → O(capacity)

🚀 Since You're Backend Focused

Next Level:

Redis + LRU hybrid

Distributed cache strategy

Write-through vs Write-back caching

L1 + L2 cache system

Cache invalidation strategy

If you want, I can now build:

🔥 LRU + Express API Full Mini Project
🔥 L1 (Memory) + L2 (Redis) Cache Architecture
🔥 Production Level Caching Strategy Diagram