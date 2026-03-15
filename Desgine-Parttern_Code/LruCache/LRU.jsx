class LRUCache{

constructor(capacity){
this.capacity = capacity
this.map = new Map()
}

get(key){

if(!this.map.has(key)) return -1

const value = this.map.get(key)

this.map.delete(key)
this.map.set(key,value)

return value
}

put(key,value){

if(this.map.has(key)){
this.map.delete(key)
}
else if(this.map.size === this.capacity){

let firstKey = this.map.keys().next().value

this.map.delete(firstKey)

}

this.map.set(key,value)

}

}


// ✅ Example usage
const lru = new LRUCache(3);

lru.put(1, 'A');
lru.put(2, 'B');
lru.put(3, 'C');
console.log([...lru.cache]); // [[1,'A'], [2,'B'], [3,'C']]

lru.get(2); 
console.log([...lru.cache]); // [[1,'A'], [3,'C'], [2,'B']] → 2 is most recently used

lru.put(4, 'D'); 
console.log([...lru.cache]); // [[3,'C'], [2,'B'], [4,'D']] → 1 is removed (LRU)

🔹 How it works

Map maintains insertion order.

On get:

Accessed item becomes most recently used → delete and re-insert.

On put:

Inserted as most recent.