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