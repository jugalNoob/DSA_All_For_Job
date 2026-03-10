🔟 Example: Redis Cache Hit Rate
const requests = 100000
const cacheHitProb = 0.7

const cacheHits = requests * cacheHitProb
const dbHits = requests - cacheHits

console.log("Redis hits:", cacheHits)
console.log("DB hits:", dbHits)


Used for system scaling decisions.