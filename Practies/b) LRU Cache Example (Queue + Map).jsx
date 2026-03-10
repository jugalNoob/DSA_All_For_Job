class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map(); // key -> node
    }

    get(key) {
        if (!this.map.has(key)) return -1;
        const val = this.map.get(key);
        this.map.delete(key);   // remove from Map
        this.map.set(key, val); // re-insert at end → recently used
        return val;
    }

    put(key, value) {
        if (this.map.has(key)) this.map.delete(key);
        else if (this.map.size === this.capacity) {
            // remove least recently used → first inserted
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
        }
        this.map.set(key, value);
    }
}

const lru = new LRUCache(2);
lru.put(1,1);
lru.put(2,2);
console.log(lru.get(1)); // 1
lru.put(3,3); // remove key 2
console.log(lru.get(2)); // -1
