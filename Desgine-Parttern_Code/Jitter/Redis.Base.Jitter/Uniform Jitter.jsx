
a) Uniform Jitter (current ±x%)

Randomly distributed between [base - x%, base + x%]

Example: cacheTTL function we wrote:

function uniformJitter(baseTTL, percent = 0.2) {
  const jitter = baseTTL * percent;
  return baseTTL - jitter + Math.random() * (2 * jitter);
}


Use Case: Simple TTLs for caching or rate limits.