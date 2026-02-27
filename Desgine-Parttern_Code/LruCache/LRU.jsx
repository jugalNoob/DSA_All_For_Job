Absolutely! Let's create a simple LRU (Least Recently Used) cache in JavaScript from scratch. I'll break it down step by step and provide a clean implementation.

🔹 Concept Recap

LRU Cache evicts the least recently used item when the cache exceeds its capacity.

Common operations:

get(key) → returns value if present, else -1.

put(key, value) → adds or updates value. If full, removes the least recently used.

Data structures used:

Map in JS (maintains insertion order)

Optional: Doubly linked list for O(1) operations (advanced).

🔹 Simple JS Implementation using Map
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // stores key-value pairs
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        // Move the accessed key to the end (most recently used)
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    put(key, value) {
        // If key exists, remove it first
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        // Insert the key as most recently used
        this.cache.set(key, value);

        // If over capacity, remove the least recently used (first inserted)
        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}

// ✅ Example usage
const lru = new LRUCache(3);

lru.put(1, 'A');
lru.put(2, 'B');
lru.put(3, 'C');
console.log([...lru.cache]); // [[1,'A'], [2,'B'], [3,'C']]

lru.get(2); 
console.log([...lru.cache]); // [[1,'A'], [3,'C'], [2,'B']] → 2 is most recently used

lru.put(4, 'D'); 
console.log([...lru.cache]); // [[3,'C'], [2,'B'], [4,'D']] → 1 is removed (LRU)

🔹 How it works

Map maintains insertion order.

On get:

Accessed item becomes most recently used → delete and re-insert.

On put:

Inserted as most recent.