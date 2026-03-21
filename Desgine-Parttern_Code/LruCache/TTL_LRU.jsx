🔥 Now you’re stepping into real-world system design
👉 LRU Cache + TTL (expiry) = how systems like Redis work internally

🧠 What We Need

We combine:

1️⃣ LRU (Least Recently Used)

Remove least used item when capacity full

2️⃣ TTL (Time To Live)

Each key expires after some time

🚀 Design Idea

👉 Store in Map like this:

key → { value, expiryTime }


👉 On every get():

Check expiry

If expired → delete it

✅ Full Working Code (LRU + TTL)
class LRUCacheTTL {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        let { value, expiry } = this.cache.get(key);

        // ❌ Expired
        if (Date.now() > expiry) {
            this.cache.delete(key);
            return -1;
        }

        // ✅ Move to recent
        this.cache.delete(key);
        this.cache.set(key, { value, expiry });

        return value;
    }

    put(key, value, ttl) {
        let expiry = Date.now() + ttl;

        if (this.cache.has(key)) {
            this.cache.delete(key);
        } 
        else if (this.cache.size === this.capacity) {
            // remove LRU
            let firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }

        this.cache.set(key, { value, expiry });
    }
}

🧪 Example
let cache = new LRUCacheTTL(2);

cache.put("a", 100, 2000); // expires in 2 sec
cache.put("b", 200, 5000);

console.log(cache.get("a")); // 100

setTimeout(() => {
    console.log(cache.get("a")); // -1 (expired)
}, 3000);

🔍 How It Works
👉 On put
expiry = currentTime + ttl
store in map

👉 On get
if expired → delete
else → return + move to recent

⚡ Important Insight

👉 This is called:

Lazy Expiration


👉 Why?

Expiry checked only when accessed

Not continuously cleaned

🔥 Advanced Optimization (Real Systems)

In real systems like Redis:

1️⃣ Lazy + Active Expiry

Lazy (on access)

Active (background cleanup thread)

2️⃣ Min Heap for Expiry (Advanced)

👉 Track earliest expiry

3️⃣ Doubly Linked List + HashMap

👉 True O(1) LRU (interview hardcore)

🧠 Complexity
Operation	Time
get	O(1)
put	O(1)
🚀 Interview Discussion Points

If interviewer asks:

👉 “What if many expired keys exist?”

Add background cleanup (setInterval)


👉 “How Redis handles this?”

Combination of lazy + periodic eviction

🔥 You’re Now at System Design Level

You just learned:

✅ LRU

✅ TTL

✅ Lazy expiration

✅ Real-world cache thinking

🚀 Next Level (🔥 ELITE)

If you want to go deeper:

👉 🔥 LFU Cache (harder than LRU)
👉 🔥 Distributed cache (multiple servers)
👉 🔥 Cache invalidation strategies

Say “LFU” or “distributed cache” 🚀