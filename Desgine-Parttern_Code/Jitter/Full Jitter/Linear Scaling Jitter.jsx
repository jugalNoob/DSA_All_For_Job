c) Linear Scaling Jitter

Jitter increases as request count or attempt number increases

Example: longer wait as system is more loaded

function linearJitter(baseTTL, factor = 10, attempt = 1) {
  const jitter = attempt * factor; // increases linearly
  return baseTTL + Math.random() * jitter;
}


Use Case:

Progressive backoff in rate limiting

Scaling retries in high-throughput APIs