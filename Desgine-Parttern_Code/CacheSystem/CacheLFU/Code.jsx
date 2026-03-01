Absolutely! Let’s make a simple LFU Cache in JavaScript with a practical use case.

🔹 Simple LFU Cache in JS

We’ll keep it easy to understand, using Map to store values and frequency counts.

class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // key -> { value, freq }
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        // Increment frequency
        this.cache.get(key).freq += 1;
        return this.cache.get(key).value;
    }

    put(key, value) {
        if (this.capacity === 0) return;

        if (this.cache.has(key)) {
            // Update value and increment frequency
            const item = this.cache.get(key);
            item.value = value;
            item.freq += 1;
            return;
        }

        if (this.cache.size >= this.capacity) {
            // Remove least frequently used key
            let minFreq = Infinity;
            let keyToRemove;
            for (let [k, v] of this.cache) {
                if (v.freq < minFreq) {
                    minFreq = v.freq;
                    keyToRemove = k;
                }
            }
            this.cache.delete(keyToRemove);
        }

        // Add new key with freq = 1
        this.cache.set(key, { value, freq: 1 });
    }
}

// ✅ Example usage
const lfu = new LFUCache(3);

lfu.put(1, 'A');
lfu.put(2, 'B');
lfu.put(3, 'C');

lfu.get(1); // frequency of 1 becomes 2
lfu.get(3); // frequency of 3 becomes 2

lfu.put(4, 'D'); // removes key 2 (least frequency)

console.log([...lfu.cache]); 
// Output: [[1, {value:'A', freq:2}], [3,{value:'C', freq:2}], [4,{value:'D', freq:1}]]

🔹 Use Case of LFU Cache

:: --:: Video Streaming Platforms

Frequently watched videos are kept in memory, less popular videos 
are evicted.

:: --:: Database Query Caching

Store results of frequently used queries to improve speed.

:: --:: Web Server Caching

Popular web pages or API responses are cached.

:: --:: Recommendation Systems

Frequently accessed user preferences or items stay in fast-access cache.



💡 Key Difference from LRU:

LRU evicts based on last use.

LFU evicts based on number of uses (frequency).