App
 |
 |---- Database Connection (1 instance)
 |
 |---- All services use same connection

class CacheCreate {
    static instance = null; // store singleton instance

    constructor() {
        if (CacheCreate.instance) return CacheCreate.instance; // return existing instance
        this.data = new Map();
        CacheCreate.instance = this; // save this instance
    }

    Cacheset(key, value) {
        this.data.set(key, value);
    }

    Cacheget(key) {
        if (this.data.has(key)) {
            console.log(this.data.get(key));
        } else {
            console.log('Cache key not found');
        }
    }
}

// Usage
const cache1 = new CacheCreate();
cache1.Cacheset('123', 'name jugal');

const cache2 = new CacheCreate(); // same instance as cache1
cache2.Cacheget('123');           // name jugal

console.log(cache1 === cache2);   // true ✅


Step by Step

First instance (cache1)

CacheCreate.instance is null → create new Map → save instance

Second instance (cache2)

CacheCreate.instance exists → return the same Map

No new cache is created

Old entries in cache1 are still available

✅ Key Takeaway

Without Singleton → new CacheCreate() always creates fresh cache, losing old entries

With Singleton → new CacheCreate() always returns the same cache instance, preserving all old data