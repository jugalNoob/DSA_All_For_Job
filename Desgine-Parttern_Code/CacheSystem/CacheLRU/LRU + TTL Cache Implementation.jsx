class LRUCacheTTL {
    
    Perfect! Let’s build a full-featured LRU + TTL cache in Node.js using Map. This cache will:

Limit size with LRU eviction

Expire items after a time-to-live (TTL)

Support get, set, delete, and clear
    
    constructor(maxSize = 5, ttl = 5000) { // default TTL: 5 seconds
        this.cache = new Map();
        this.maxSize = maxSize;
        this.ttl = ttl; // in milliseconds
    }

    // Get a value from cache
    get(key) {
        const item = this.cache.get(key);

        if (!item) {
            console.log('Cache miss');
            return null;
        }

        // Check if expired
        if (Date.now() > item.expireAt) {
            this.cache.delete(key);
            console.log('Cache expired');
            return null;
        }

        // Move key to end to mark as recently used
        this.cache.delete(key);
        this.cache.set(key, item);

        console.log('Cache hit');
        return item.value;
    }

    // Set a value in cache
    set(key, value, customTTL = null) {
        if (this.cache.has(key)) {
            this.cache.delete(key); // Remove old entry
        } else if (this.cache.size >= this.maxSize) {
            // Evict least recently used (first key)
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
            console.log(`Evicted key: ${oldestKey}`);
        }

        const expireAt = Date.now() + (customTTL ?? this.ttl);
        this.cache.set(key, { value, expireAt });
        console.log(`Key set: ${key}`);
    }

    delete(key) {
        this.cache.delete(key);
    }

    clear() {
        this.cache.clear();
    }

    print() {
        console.log(
            [...this.cache.entries()].map(([k, v]) => [k, v.value])
        );
    }
}



🔹 Example Usage
const cache = new LRUCacheTTL(3, 3000); // maxSize = 3, TTL = 3 sec

cache.set('a', 1);
cache.set('b', 2);
cache.set('c', 3);
cache.print(); // [["a",1],["b",2],["c",3]]

setTimeout(() => {
    cache.get('a'); // Cache expired or hit depending on timing
}, 3500);

cache.set('d', 4); // Evicts least recently used key
cache.print();

setTimeout(() => {
    cache.print(); // Check which items expired
}, 4000);

✅ Features

LRU eviction

When cache exceeds maxSize, the oldest unused item is removed.

TTL expiry

Items automatically expire after ttl or customTTL per key.

Access updates usage

Calling get(key) moves the key to the end, marking it recently used.

Custom TTL per item

set(key, value, customTTL) allows different expiry times.

Map preserves insertion order

Used for LRU logic without extra data structures.