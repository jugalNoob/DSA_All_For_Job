🔹 LRU Cache with Map
class LRUCache {
    constructor(maxSize = 5) {
        this.cache = new Map();
        this.maxSize = maxSize;
    }

    // Get a value from cache
    get(key) {
        if (!this.cache.has(key)) {
            console.log('Cache miss');
            return null;
        }

        // Move the key to the end to mark it as recently used
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);

        console.log('Cache hit');
        return value;
    }

    // Set a value in cache
    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key); // Remove old entry
        } else if (this.cache.size >= this.maxSize) {
            // Evict the least recently used item (first item in Map)
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
            console.log(`Evicted key: ${oldestKey}`);
        }

        this.cache.set(key, value);
        console.log(`Key set: ${key}`);
    }

    // Delete a key
    delete(key) {
        this.cache.delete(key);
    }

    // Clear all cache
    clear() {
        this.cache.clear();
    }

    // Print cache for debugging
    print() {
        console.log([...this.cache.entries()]);
    }
}

// Usage Example
const lru = new LRUCache(3);

lru.set('a', 1);
lru.set('b', 2);
lru.set('c', 3);
lru.print(); // [["a",1],["b",2],["c",3]]

lru.get('a'); // Access 'a', moves to recently used
lru.set('d', 4); // Evicts 'b' (least recently used)
lru.print(); // [["c",3],["a",1],["d",4]]

console.log(lru.get('b')); // Cache miss → null

✅ How It Works

Map preserves insertion order:

Oldest items are at the start.

Newest items are at the end.

LRU eviction:

When cache.size >= maxSize, remove the first entry (least recently used).

Updating usage:

When get is called, the key is deleted and re-inserted, marking it as recently used.

Customizable max size:

Set maxSize in the constructor.

💡 Optional Improvements:

Add TTL per item (combine LRU + TTL cache).

Make it async for large-scale Node.js caching.

Wrap it for Redis fallback for persistent cache.

If you want, I can make a full LRU + TTL cache in one class — this is basically how Redis-like caches are implemented in Node.js.



::::::::::::::: ------------------------ :::::::::::::::::::::: ---------------------- ::::::::::::::::::::::: 


Ah! Jugal 😎 — this is a classic LRU (Least Recently Used) cache implementation using JavaScript Map. Let’s break it step by step and explain why it works exactly like Redis LRU or a production cache.

1️⃣ Concept of LRU Cache

LRU cache keeps a limited number of items (maxSize) in memory.

When the cache is full and you add a new item:

It evicts the least recently used item.

When you get an item:

It becomes the most recently used, so it won’t get evicted soon.

💡 Think of it like a queue, but most recently used goes to the end.

2️⃣ How Map helps

Map in JS keeps insertion order.

map.keys().next().value gives the first inserted key → the oldest / least recently used.

So Map is perfect for LRU with O(1) get, set, and delete.

3️⃣ Your Code Breakdown
Set Method
set(key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key); // Remove old entry
    } else if (this.cache.size >= this.maxSize) {
        const oldestKey = this.cache.keys().next().value;
        this.cache.delete(oldestKey); // Evict LRU
        console.log(`Evicted key: ${oldestKey}`);
    }
    this.cache.set(key, value); // Add to end → most recently used
    console.log(`Key set: ${key}`);
}


Step 1: If key exists → remove it first (we’ll re-add it to end)

Step 2: If cache full → evict the oldest key

Step 3: Add new key at the end of Map → marks it as recently used

Get Method
get(key) {
    if (!this.cache.has(key)) {
        console.log('Cache miss');
        return null;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);  // Remove old position
    this.cache.set(key, value); // Re-add at end → marks as recently used
    console.log('Cache hit');
    return value;
}


Step 1: Check if key exists → cache miss if not

Step 2: Remove the key and re-add it at end → marks as most recently used

Step 3: Return the value

4️⃣ Step-by-Step Example
const lru = new LRUCache(3);

lru.set('a', 1); // Cache: [a]
lru.set('b', 2); // Cache: [a, b]
lru.set('c', 3); // Cache: [a, b, c]
lru.print();     // [["a",1], ["b",2], ["c",3]]

lru.get('a');    // Access 'a' → moves 'a' to end
// Cache order: [b, c, a]

lru.set('d', 4); // Cache full → evict LRU 'b'
// Cache order: [c, a, d]

console.log(lru.get('b')); // b was evicted → Cache miss → null


✅ Works exactly like LRU caching:

Always evicts least recently used

Keeps recently used items safe

5️⃣ Visual Diagram (Simplified)
Set a → [a]
Set b → [a, b]
Set c → [a, b, c]
Get a → [b, c, a]  (a moves to end)
Set d → [c, a, d]  (evicts b)

6️⃣ Interview Tip

Explain clearly:

“We use Map to maintain insertion order. When we access an item, we delete and re-insert to mark it as most recently used. When inserting and the cache is full, we evict the first key, which is the least recently used. This gives O(1) get, set, and delete.”

You can also mention TTL combined with LRU → like Redis does → super impressive.