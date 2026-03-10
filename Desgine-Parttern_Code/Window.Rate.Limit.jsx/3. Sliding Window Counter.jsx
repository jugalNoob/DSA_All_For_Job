3. Sliding Window Counter (Optimized)

This is used in large-scale systems because log storage is expensive.

Instead of storing timestamps, store two buckets.

Previous Window + Current Window


Formula:

count = prevCount * overlap + currentCount


Example:

limit = 100 per minute

Prev bucket = 70
Current bucket = 30
Overlap = 0.5

Total = 70*0.5 + 30

Used In

API gateways

CDN rate limit

cloud systems

Companies like

Cloudflare

Amazon
use this method.