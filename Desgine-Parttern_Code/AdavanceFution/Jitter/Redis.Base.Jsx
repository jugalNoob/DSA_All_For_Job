
// ±20% jitter
// function cacheTTL(baseTTL) {
//   const jitter = baseTTL * 0.2; // 20% variation
//   return Math.floor(baseTTL - jitter + Math.random() * (jitter * 2));
// }




// function cacheTTL(baseTTL, minJitter = 0.1, maxJitter = 0.2) {
//   const jitterPercent = minJitter + Math.random() * (maxJitter - minJitter);
//   const jitterAmount = baseTTL * jitterPercent;
//   return Math.floor(baseTTL - jitterAmount + Math.random() * jitterAmount * 2);
// }




// TTL with jitter (seconds)
function cacheTTLSeconds(baseTTL, jitterPercent = 0.2) {
  const jitter = baseTTL * jitterPercent;

  console.log(jitter , 'jugal')
  // Random TTL between baseTTL - jitter and baseTTL + jitter
  return Math.max(1, Math.floor(baseTTL - jitter + Math.random() * (jitter * 2)));
}

// Example usage
function Loop() {
  const baseTTL = 50; // 50 seconds
  for (let i = 0; i < 10; i++) {
    const ttl = cacheTTLSeconds(baseTTL);
    console.log(`Key ${i + 1} TTL: ${ttl} s`);
  }
}

Loop();



✅ Why this is better

Returns seconds, no need to multiply for Redis EX.

Minimum TTL is 1 second to avoid 0 or negative values.

Jitter is configurable, default ±20%.

Easy to plug into Redis or L1 cache:

await redis.set("key", JSON.stringify(data), "EX", cacheTTLSeconds(50));
