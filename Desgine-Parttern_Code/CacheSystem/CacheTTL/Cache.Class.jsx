class TTLCache {
    constructor(ttl = 5000) { // default 5 seconds
        this.cache = new Map();
        this.ttl = ttl;
    }

    set(key, value) {
        const expireAt = Date.now() + this.ttl;
        this.cache.set(key, { value, expireAt });
    }

    get(key) {
        const item = this.cache.get(key);
        if (!item) return null;

        if (Date.now() > item.expireAt) {
            this.cache.delete(key); // expired
            console.log('Cache expired');
            return null;
        }

        console.log('Cache hit');
        return item.value;
    }

    delete(key) {
        this.cache.delete(key);
    }

    clear() {
        this.cache.clear();
    }
}

// Usage
const ttlCache = new TTLCache(3000); // 3 seconds TTL
ttlCache.set('token', 'abc123');

setTimeout(() => {
    console.log(ttlCache.get('token')); // May be "Cache expired"
}, 4000);


✅ Explanation:

Each entry stores { value, expireAt }.

get checks if the item is expired before returning.

TTL allows automatic expiry, useful for temporary caches like session tokens.

3️⃣ Optional: LRU Cache (Least Recently Used)

If you want memory-limited cache, Map can help implement LRU:

Use Map insertion order to track usage.

When cache exceeds max size, remove the oldest entry.

Example can be made if you want a real LRU cache using Map.