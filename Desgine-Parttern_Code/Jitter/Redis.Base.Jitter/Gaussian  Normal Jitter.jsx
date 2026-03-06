b) Gaussian / Normal Jitter

Most values cluster around the base, fewer extreme values

Uses normal distribution (mean = baseTTL, stdDev = baseTTL * 0.1)

function gaussianJitter(baseTTL, stdDev = 0.1) {
  const u1 = Math.random();
  const u2 = Math.random();
  const randStdNormal = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2);
  const jitter = baseTTL * stdDev * randStdNormal;
  return Math.max(0, Math.floor(baseTTL + jitter)); // TTL can't be negative
}
