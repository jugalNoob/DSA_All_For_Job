1️⃣ Rate Limiting / API Throttling

1️⃣ Rate Limiting / API Throttling

Problem: Limit the number of API requests per user to X requests per Y seconds.

How fixed/variable window helps:

Keep a sliding window of requests timestamps per user.

Reject or queue requests if the count in the last window exceeds the limit.

Example tech: Node.js + Redis (sliding window counter for distributed APIs).

// Simplified fixed-window rate limit (per 1 min)
const windowSize = 60 * 1000; // 1 minute
const maxRequests = 100;
const userRequests = {}; // { userId: [timestamps] }

function allowRequest(userId) {
  const now = Date.now();
  userRequests[userId] = userRequests[userId] || [];
  userRequests[userId] = userRequests[userId].filter(t => t > now - windowSize);
  
  if (userRequests[userId].length >= maxRequests) return false;

  userRequests[userId].push(now);
  return true;
}
