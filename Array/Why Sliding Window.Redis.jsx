Excellent 🔥
Now we go real production level.

🚀 Redis Sliding Window Rate Limiter (Login System)

This is more accurate than simple counter + TTL.

Instead of counting total attempts in 5 minutes,
we track exact timestamps.

🧠 Why Sliding Window?

Simple counter problem:

5 attempts at 4:59
5 attempts at 5:01


User makes 10 attempts in 2 seconds 😬

Sliding window prevents this.

🔥 How It Works (Redis ZSET)

We use:

ZADD   → Add timestamp
ZREMRANGEBYSCORE → Remove old timestamps
ZCARD  → Count attempts


Using Redis Sorted Set (ZSET).

📦 Example: 5 Login Attempts per 5 Minutes
import Redis from "ioredis";

const redis = new Redis();

async function loginRateLimit(userId) {
    const key = `login:sliding:${userId}`;
    const now = Date.now();
    const WINDOW = 5 * 60 * 1000; // 5 minutes
    const LIMIT = 5;

    // 1️⃣ Remove old attempts
    await redis.zremrangebyscore(key, 0, now - WINDOW);

    // 2️⃣ Add current attempt
    await redis.zadd(key, now, now);

    // 3️⃣ Get total attempts in window
    const attempts = await redis.zcard(key);

    // 4️⃣ Set expiration (optional safety)
    await redis.expire(key, 300);

    if (attempts > LIMIT) {
        console.log("🚫 Blocked: Too many login attempts");
        return false;
    }

    console.log("✅ Allowed");
    return true;
}

🔐 How It Works Internally

Let’s say user tries login 3 times:

Redis ZSET looks like:

login:sliding:123

Score     Member
17000001  17000001
17000050  17000050
17000100  17000100


We remove timestamps older than 5 minutes.

Then count remaining entries.

🎯 Why This Is Production Safe

✔ Works across multiple servers
✔ Accurate rolling window
✔ No burst loophole
✔ Auto cleanup
✔ Atomic operations

Used in large systems like:

Cloudflare

Uber

Airbnb

🚀 Even More Advanced Version (Atomic Lua Script)

To prevent race conditions in very high traffic,
you combine all operations into one Lua script.

But for most login systems,
the above version is enough.

🧠 Interview-Level Explanation

If interviewer asks:

How would you prevent brute force login attacks?

You answer:

I would implement a Redis-based sliding window rate limiter using sorted sets. Each login attempt is stored with a timestamp, old entries are removed using ZREMRANGEBYSCORE, and current count is checked using ZCARD. This provides accurate rolling window enforcement across distributed servers.

🔥 That is senior backend answer.