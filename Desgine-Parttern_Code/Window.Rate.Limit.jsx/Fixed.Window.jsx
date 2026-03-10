let count = 0
let windowStart = Date.now()
let LIMIT = 5
let WINDOW = 5000 // 5 seconds

function MianClick(){

    let now = Date.now()

    if(now - windowStart > WINDOW){
        count = 0
        windowStart = now
    }

    if(count < LIMIT){
        count++
        console.log("Request allowed", count)
    }else{
        console.log("Rate limit exceeded")
    }
}


::::::::::::::::::::::::::::::::::::::::::: ------------------------->>>

class FixedWindowRateLimiter {
  constructor(limit) {
    this.limit = limit
    this.counter = new Map()
  }

  allow(user) {
    const minute = Math.floor(Date.now() / 60000)

    if (!this.counter.has(user)) {
      this.counter.set(user, { minute, count: 1 })
      return true
    }

    let data = this.counter.get(user)

    if (data.minute === minute) {
      if (data.count >= this.limit) return false
      data.count++
      return true
    }

    this.counter.set(user, { minute, count: 1 })
    return true
  }
}

:::::::::::::::::::::::::::::::::::::: --------------------------->>>



1️⃣ Scenario

Limit: 5 requests per 60 seconds

Key: IP address (can also be User ID, API key, etc.)

Behavior: Fixed Window – resets at the end of each window.

2️⃣ Fixed Window Limiter Concept

Each client (IP) has a counter and a window reset timestamp.

When a request comes:

If the current time > resetTime, reset the counter and set a new resetTime.

Otherwise, increment the counter.

If counter > limit → block request.

Problem: At window boundaries, burst traffic can exceed the limit.

3️⃣ Express Middleware Implementation
// fixed-window-rate-limiter.js

const rateLimiters = new Map(); // Stores: key -> { count, resetTime }

function fixedWindowLimiter(limit = 5, windowMs = 60000) {
  return (req, res, next) => {
    const key = req.ip; // use req.userId or API key if needed
    const now = Date.now();

    let data = rateLimiters.get(key) || { count: 0, resetTime: now + windowMs };

    // Window expired → reset counter
    if (now > data.resetTime) {
      data = { count: 0, resetTime: now + windowMs };
    }

    data.count += 1;
    rateLimiters.set(key, data);

    if (data.count > limit) {
      return res.status(429).json({ error: 'Too Many Requests - window reset soon' });
    }

    next();
  };
}

// Usage in Express
// app.use(fixedWindowLimiter(5, 60000));

4️⃣ How it Works Step by Step
Example: limit = 5, window = 60s

Time = 0s, request 1 → count = 1 → allowed

Time = 10s, request 2 → count = 2 → allowed

Time = 50s, request 5 → count = 5 → allowed

Time = 55s, request 6 → count = 6 → blocked ✅

Time = 61s, window expired → count resets → request allowed

5️⃣ Notes

Memory: Very low (1 Map per IP or user)

Precision: Medium (may allow bursts at window boundaries)

Burst Problem: Users can send 2× limit at the boundary if they time requests perfectly

6️⃣ Production Tip (Redis Version)

For distributed systems:

Store counter + reset timestamp in Redis

Use single key per IP

Example:

key = "rate:IP:123.45.67.89"
value = { count, resetTime }


Ensures all servers share the same counter

Prevents distributed bursts

7️⃣ Comparison With Sliding Window / Token Bucket
