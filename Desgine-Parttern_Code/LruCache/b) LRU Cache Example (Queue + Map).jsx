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


const lru = new LRUCache(3);

lru.put(1, 'A');
lru.put(2, 'B');
lru.put(3, 'C');
console.log([...lru.cache]); // [[1,'A'], [2,'B'], [3,'C']]

lru.get(2); 
console.log([...lru.cache]); // [[1,'A'], [3,'C'], [2,'B']] → 2 is most recently used

lru.put(4, 'D'); 
console.log([...lru.cache]); // [[3,'C'], [2,'B'], [4,'D']] → 1 is removed (LRU)
