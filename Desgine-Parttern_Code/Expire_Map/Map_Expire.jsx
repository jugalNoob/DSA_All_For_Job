Absolutely! Let’s create a simple Expiring Map (TTL Cache) in JavaScript. This is a cache where each key expires after a certain time (TTL = Time To Live).



## 7) Expiring Map (TTL Cache)

**Goal:** Auto‑expire entries
**Core DS:** HashMap + Min‑Heap (expiry)
**Why:** Heap surfaces next expiry
**Tradeoff:** Heap overhead



🔹 Simple TTL Cache in JS
class TTLCache {
    constructor(ttl) {
        this.ttl = ttl; // time in milliseconds
        this.cache = new Map(); // key -> { value, expiresAt }
    }

    set(key, value) {
        const expiresAt = Date.now() + this.ttl;
        this.cache.set(key, { value, expiresAt });
    }

    get(key) {
        const item = this.cache.get(key);

        if (!item) return null;

        // Check if expired
        if (Date.now() > item.expiresAt) {
            this.cache.delete(key);
            return null;
        }

        return item.value;
    }

    // Optional: remove expired keys proactively
    cleanup() {
        const now = Date.now();
        for (let [key, item] of this.cache) {
            if (now > item.expiresAt) {
                this.cache.delete(key);
            }
        }
    }
}

// ✅ Example usage
const cache = new TTLCache(3000); // TTL 3 seconds

cache.set('a', 100);
cache.set('b', 200);

console.log(cache.get('a')); // 100

setTimeout(() => {
    console.log(cache.get('a')); // null (expired)
}, 4000);

🔹 How it works

Each key stores:

value

expiresAt timestamp (current time + TTL)

On get(key):

If expired → remove and return null

Else → return value

Optional: cleanup() removes all expired keys proactively.

🔹 Use Cases

API Response Caching

Cache results for a short time to reduce repeated requests.

Session Storage

Store user session tokens with expiration.

Temporary Data