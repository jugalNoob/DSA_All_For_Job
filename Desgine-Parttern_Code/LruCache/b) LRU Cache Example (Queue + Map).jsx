class LRUCexplain {

    constructor(capcity){
        this.cache = new Map()
        this.capcity = capcity
    }

    get(key){

        if(!this.cache.has(key)) return -1

        let value = this.cache.get(key)

        this.cache.delete(key)
        this.cache.set(key,value)

        return value
    }

    putcache(key,value){

        if(this.cache.has(key)){
            this.cache.delete(key)
        }
        else if(this.cache.size === this.capcity){

            let firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey)
        }

        this.cache.set(key,value)
    }
}

const lru = new LRUCexplain(3)

lru.putcache(1,'A')
lru.putcache(2,'B')
lru.putcache(3,'C')

console.log([...lru.cache])

lru.get(2)

console.log([...lru.cache])

lru.putcache(4,'D')

console.log([...lru.cache])



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
