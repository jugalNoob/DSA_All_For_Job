class CACHED{
    constructor(capcity){
        this.cache=new Map()
        this.capcity=capcity
       
    }
    set(key){
     if(!this.cache.has(key)) return -1
     let value=this.cache.get(key)
     this.cache.delete(key)
    this.cache.set(key , value)
    return value
    }

    put(key,value){
        if(this.cache.has(key)){
            this.cache.delete(key)
        }else if(this.cache.size === this.capcity){
            let firest=this.cache.keys().next().value
            this.cache.delete(firest)
        }
        return this.cache.set(key,value)
    }
}

let lru = new CACHED(2);

lru.put(1, 10); // {1=10}
lru.put(2, 20); // {1=10, 2=20}

lru.set(1);     // access → move to end
// {2=20, 1=10}

lru.put(3, 30); // remove 2
// {1=10, 3=30}

console.log(lru)



// Index (i),arr[i],prefix[i-1],Math.max(...),prefix becomes,Meaning (up to this point)
// 0,3,—,—,[3],max in [0..0] = 3
// 1,1,3,"max(3, 1) → 3","[3, 3]",max in [0..1] = 3
// 2,4,3,"max(3, 4) → 4","[3, 3, 4]",max in [0..2] = 4
// 3,2,4,"max(4, 2) → 4","[3, 3, 4, 4]",max in [0..3] = 4
// 4,5,4,"max(4, 5) → 5","[3, 3, 4, 4, 5]",max in [0..4] = 5

// // prefixLoop([3,1,4,2,5])


// Final result: [3, 3, 4, 4, 5]
// What does “prefix max” mean?
// prefixMax[i] = the maximum value in the subarray from index 0 to i (inclusive)
// In other words:

// At position 0 → maximum of first 1 element
// At position 1 → maximum of first 2 elements
// At position 2 → maximum of first 3 elements
// ...
// At position n-1 → maximum of all elements

// So the array [3, 3, 4, 4, 5] tells you:

// Up to index 0: highest = 3
// Up to index 1: highest = 3
// Up to index 2: highest = 4
// Up to index 3: highest = 4
// Up to index 4: highest = 5 (whole array)

// Why / when do people use prefix maximum?
// Common real-world / competitive programming uses:

// Range maximum queries (fast answers)
// You can answer in O(1): “What is max in [0..k]?” → just look at prefix[k]

// Find next greater element / previous greater element
// Very useful when building monotonic stack solutions

// Stock price problems
// Example: maximum profit until each day
// Example: how many days was today's price the highest so far?

// Building blocks for harder problems
// Trap rain water
// Largest rectangle in histogram (sometimes)
// Maximum subarray sum variants
// Many sliding window / two-pointer problems

// Quick decision making
// “Is the current element the maximum seen so far?” → arr[i] === prefix[i]


// Quick comparison table

// Name,Meaning at each position,"Example output for [3,1,4,2,5]"
// Original array,just the value,"[3,1,4,2,5]"
// Prefix Max,max from 0 to i,"[3,3,4,4,5]"
// Prefix Sum,sum from 0 to i,"[3,4,8,10,15]"
// Prefix Min,min from 0 to i,"[3,1,1,1,1]"