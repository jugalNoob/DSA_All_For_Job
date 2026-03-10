ll explain Time Series Sliding Window for Rate Limiting and other real systems in a very simple way.

1️⃣ What is Time Series Data?

Time series = data with timestamps.

Example (API requests):

Time      Request
10:00:01  user1
10:00:05  user1
10:00:08  user1
10:00:20  user1


Each request happens at a specific time.

2️⃣ What is Sliding Window?

Sliding window means we only check recent time range.

Example:

Limit: 5 requests per 10 seconds


We only count requests in last 10 seconds.

Window example:

Time → →

[1,2,3,4,5]  → valid
[2,3,4,5,6]  → window moves


Old requests leave the window, new ones enter.

3️⃣ Rate Limiting (Real Example)

Problem:

Allow 3 requests per 10 seconds


Requests:

t=1  request
t=2  request
t=5  request
t=7  request


Check window:

Window: last 10 seconds


If there are already 3 requests, reject new request.

4️⃣ Simple JavaScript Code (Rate Limiter)
class RateLimiter {

    constructor(limit, windowSize) {
        this.limit = limit;
        this.windowSize = windowSize;
        this.requests = [];
    }

    allowRequest(timestamp) {

        // remove old requests
        while (this.requests.length &&
               this.requests[0] <= timestamp - this.windowSize) {
            this.requests.shift();
        }

        if (this.requests.length < this.limit) {
            this.requests.push(timestamp);
            return true;
        }

        return false;
    }
}

const limiter = new RateLimiter(3, 10);

console.log(limiter.allowRequest(1));
console.log(limiter.allowRequest(2));
console.log(limiter.allowRequest(5));
console.log(limiter.allowRequest(7)); // false

5️⃣ How Sliding Window Works Here

Requests stored:

[1,2,5]


New request:

7


Check window:

7 - 10 = -3


Still 3 requests → limit reached → reject

6️⃣ Real Systems Using Time Sliding Window
1️⃣ API Rate Limiting

Used by:

Google APIs

Stripe

GitHub

Example:

100 requests per minute

2️⃣ Login Security

Detect too many login attempts.

Example:

5 login attempts in 1 minute


Block user.

3️⃣ Chat Spam Detection

Example:

10 messages in 5 seconds


Detect spam bots.

4️⃣ Analytics Dashboard

Track:

users active in last 5 minutes

5️⃣ System Monitoring

Track:

CPU spikes last 30 seconds

7️⃣ Types of Rate Limiting Algorithms
Algorithm	Idea
Fixed Window	Reset counter every time window
Sliding Window	Move window continuously
Token Bucket	Tokens added over time
Leaky Bucket	Constant request flow

Most accurate:

👉 Sliding Window

8️⃣ Visual Example
Limit = 3 requests
Window = 10 sec


Timeline:

1   2   5   7   12

Window(7):
[1,2,5] → reject

Window(12):
[2,5,7] → allow

⭐ Important Interview Question

Companies ask:

Design a Rate Limiter
Design a Hit Counter
Design API request limiter


Solution usually uses:

Queue

Sliding window

Time series