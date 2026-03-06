3️⃣ TTL Cache for Frequently Used Keys

What it is:

For high-traffic systems, computing TTLs with jitter every request may be slightly expensive.

Precompute a set of TTLs and randomly pick one instead of recalculating.

Example:

const ttlCache = Array.from({ length: 10 }, () => uniformJitter(60, 0.2));

function getCachedTTL() {
  return ttlCache[Math.floor(Math.random() * ttlCache.length)];
}

// Usage:
console.log(getCachedTTL()); // returns a TTL from precomputed list


✅ Use Case:

Redis rate limiting for millions of users

Reusing TTLs reduces CPU cost while keeping randomness