1️⃣ Problem

Different APIs may use different rate-limit strategies:

Fixed Window
Sliding Window
Token Bucket


Instead of writing many if/else, we use Strategy Pattern.

2️⃣ Strategy Interface

Base class (common structure):

class RateLimitStrategy {

    allowRequest(){
        throw new Error("Must implement allowRequest()")
    }

}


This means every strategy must implement allowRequest().

3️⃣ Strategy 1 — Fixed Window
class FixedWindow extends RateLimitStrategy{

    allowRequest(){
        console.log("Using Fixed Window rate limit")
    }

}

4️⃣ Strategy 2 — Sliding Window
class SlidingWindow extends RateLimitStrategy{

    allowRequest(){
        console.log("Using Sliding Window rate limit")
    }

}

5️⃣ Context Class

This class uses the strategy.

class RateLimiter{

    constructor(strategy){
        this.strategy = strategy
    }

    check(){
        this.strategy.allowRequest()
    }

}

6️⃣ Using Strategy
const fixed = new FixedWindow()

const limiter = new RateLimiter(fixed)

limiter.check()


Output:

Using Fixed Window rate limit

7️⃣ Change Strategy Dynamically
const sliding = new SlidingWindow()

limiter.strategy = sliding

limiter.check()


Output:

Using Sliding Window rate limit

8️⃣ Execution Flow
API Request
     │
     ▼
RateLimiter (Context)
     │
     ▼
Chosen Strategy
 ┌──────────────┐
 ▼              ▼
FixedWindow   SlidingWindow

9️⃣ Real Backend Example

In large systems:

API Gateway
     │
     ▼
Rate Limiter
 ┌───────────────┐
 ▼               ▼
Fixed Window   Sliding Window


Companies like
Cloudflare, Stripe, and Netflix use similar strategy logic for traffic control.

🔟 Simple Rule to Remember
Factory  → creates object
Strategy → changes behavior
Singleton → single instance


✅ Interview Tip

If interviewer asks:

Where is Strategy Pattern used?

Answer:

Payment methods
Authentication
Sorting algorithms
Rate limiting
Compression algorithms
