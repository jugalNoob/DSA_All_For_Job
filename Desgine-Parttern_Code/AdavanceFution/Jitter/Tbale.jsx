| Enhancement                  | Description                                | Use Case                                |
| ---------------------------- | ------------------------------------------ | --------------------------------------- |
| Exponential Backoff + Jitter | Increasing wait per retry with randomness  | Retries, distributed tasks, API clients |
| Uniform ±x%                  | Random between `[base - x%, base + x%]`    | Rate limits, cache TTLs                 |
| Gaussian / Normal            | Most TTLs near base, few extremes          | Smoothing load spikes                   |
| Linear Scaling               | Jitter grows with attempt or request count | Progressive rate limiting               |
| TTL Cache                    | Precompute TTLs and pick randomly          | High throughput systems, reduce CPU     |
