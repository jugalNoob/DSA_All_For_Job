import redis from './redisClient.js'; // your Redis client
import Redlock from 'redlock';

// -------------------- L1 Memory Cache --------------------
class LRUCache {
    constructor(maxSize = 5) {
        this.cache = new Map();
        this.maxSize = maxSize;
    }

    get(key) {
        const entry = this.cache.get(key);
        if (!entry) return null;

        // TTL check
        if (Date.now() > entry.expire) {
            this.cache.delete(key);
            return null;
        }

        // Move to end → most recently used
        this.cache.delete(key);
        this.cache.set(key, entry);
        return entry.value;
    }

    set(key, value, ttl = 5000) {
        if (this.cache.has(key)) this.cache.delete(key);
        else if (this.cache.size >= this.maxSize) {
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }

        const expire = Date.now() + ttl;
        this.cache.set(key, { value, expire });
    }

    print() {
        console.log([...this.cache.entries()]);
    }
}

// -------------------- Distributed Lock --------------------
const redlock = new Redlock([redis], {
    retryCount: 3,
    retryDelay: 100,
    retryJitter: 50,
});

// -------------------- L1 + L2 Cache System --------------------
class CacheSystem {
    constructor(l1Size = 100) {
        this.l1 = new LRUCache(l1Size);
    }

    async get(key, fetchFunction, ttl = 5000) {
        // Step 1: Try L1 cache
        let data = this.l1.get(key);
        if (data) {
            console.log('L1 cache hit');
            return data;
        }

        // Step 2: Try L2 (Redis)
        const redisData = await redis.get(key);
        if (redisData) {
            console.log('L2 cache hit');
            data = JSON.parse(redisData);
            this.l1.set(key, data, ttl);
            return data;
        }

        // Step 3: Acquire distributed lock to prevent cache stampede
        const lockKey = `lock:${key}`;
        let lock;
        try {
            lock = await redlock.acquire([lockKey], 5000); // 5s lock
        } catch {
            // If lock not acquired → stale read fallback
            const stale = await redis.get(key);
            if (stale) return JSON.parse(stale);
            return null;
        }

        try {
            // Step 4: Double check Redis after acquiring lock
            const check = await redis.get(key);
            if (check) {
                data = JSON.parse(check);
                this.l1.set(key, data, ttl);
                return data;
            }

            // Step 5: Fetch fresh data
            data = await fetchFunction();

            // Step 6: Save to L1 + L2
            this.l1.set(key, data, ttl);
            await redis.set(key, JSON.stringify(data), 'EX', Math.floor(ttl / 1000));
        } finally {
            await lock.release();
        }

        return data;
    }
}
