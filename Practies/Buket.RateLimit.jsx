
// token-bucket.js
let tokens = 50;
let last = Date.now();
const capacity = 50;
const rate = 10; // per second

function allow() {
    const now = Date.now();
    tokens = Math.min(capacity, tokens + (now - last) / 1000 * rate);
    last = now;

    if (tokens >= 1) {
        tokens -= 1;
        return true;
    }
    return false;
}

// Test loop
let count = 0;
const interval = setInterval(() => {
    if (allow()) {
        count++;
        console.log(`Request allowed #${count}  (tokens: ${tokens.toFixed(2)})`);
    } else {
        console.log("Rate limited");
    }
}, 40); // ~25 requests per second attempt



:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



1️⃣ Token Bucket Idea (Simple)

Imagine a bucket with tokens 🪣

Bucket size = 10 tokens


Every request needs 1 token.

If token exists → request allowed
If no token → request blocked


Tokens are refilled every second.

2️⃣ Visual Example
Bucket capacity = 5
Refill rate = 1 token/sec


Start:

Tokens = 5


Requests arrive:

Req1 → token used → 4
Req2 → token used → 3
Req3 → token used → 2
Req4 → token used → 1
Req5 → token used → 0
Req6 → BLOCKED ❌


After 1 second

+1 token added


Now request allowed again.

3️⃣ Simple JavaScript Code
class TokenBucket {

    constructor(capacity, refillRate){
        this.capacity = capacity
        this.tokens = capacity
        this.refillRate = refillRate
        this.lastRefill = Date.now()
    }

    allowRequest(){

        const now = Date.now()
        const elapsed = (now - this.lastRefill) / 1000

        const refill = Math.floor(elapsed * this.refillRate)

        if(refill > 0){
            this.tokens = Math.min(this.capacity, this.tokens + refill)
            this.lastRefill = now
        }

        if(this.tokens > 0){
            this.tokens--
            console.log("Request Allowed | Tokens left:", this.tokens)
            return true
        }

        console.log("Rate limit exceeded")
        return false
    }
}

4️⃣ Using the Bucket
const bucket = new TokenBucket(5, 1)

setInterval(()=>{
    bucket.allowRequest()
},500)


Meaning:

Bucket size = 5
Refill = 1 token per second
Request every 500ms

5️⃣ Step-by-Step Example

Start:

tokens = 5


Requests:

Req1 → tokens=4
Req2 → tokens=3
Req3 → tokens=2
Req4 → tokens=1
Req5 → tokens=0
Req6 → blocked


After 1 second

+1 token


New request:

Req → allowed

6️⃣ Timeline
Time → 

0s     1s     2s

5      +1     +1
tokens tokens tokens


Requests consume tokens.

7️⃣ Why Token Bucket is Better

Compared to Fixed Window

Problem in Fixed Window:

10 req at 0.99s
10 req at 1.01s


Total:

20 requests in 2 seconds


Bad ❌

Token bucket solves this.

8️⃣ Real Systems Use It In

API Gateway

Client → API Gateway → Service


Example rule:

100 requests / second per user


If user sends:

1000 requests


Extra requests are blocked or delayed.

9️⃣ Complexity
Time: O(1)
Space: O(1)


Very efficient.

🔟 Interview Answer (Simple)

You can say:

Token Bucket rate limiter allows requests as long as tokens exist in a bucket. Tokens refill at a fixed rate over time. Each request consumes one token. If no tokens are available, the request is rejected.