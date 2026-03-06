Very good Jugal 👌🔥
Now we are entering real production security architecture level.

You already asked about:

Geo-location login detection

Risk score system

Redis

Sliding window

Now let’s combine everything properly.

🎯 Goal

Build:

Risk Score + Variable Sliding Window


For:

Suspicious login detection

Fraud prevention

Account takeover detection

🧠 Core Idea

Each login attempt increases a risk score.

We calculate risk based on:


| Condition                  | Risk Points |
| -------------------------- | ----------- |
| New IP                     | +20         |
| New Country                | +30         |
| 3 failed attempts in 5 min | +40         |
| Different device           | +25         |
| Impossible travel          | +50         |




If:

Risk Score > 70 → Require OTP
Risk Score > 100 → Block account

🏗 Architecture Design
User Login
   ↓
Node.js API
   ↓
Check Redis Sliding Window (recent activity)
   ↓
Calculate Risk Score
   ↓
If High → OTP / Block
   ↓
Publish Kafka Event
   ↓
Store in MongoDB

🔥 Redis Data Structures Used
1️⃣ Sorted Set → Login Attempts (Time-based Window)
key: user:123:logins
score: timestamp
value: ip:country

2️⃣ Hash → User Risk Profile
key: user:123:risk
fields:
   last_ip
   last_country
   last_device
   risk_score

🚀 Step-by-Step Implementation
✅ Step 1: Store Login Timestamp (Sliding Window)
async function recordLogin(userId, ip, country) {
    const now = Date.now();
    const windowTime = 10 * 60 * 1000; // 10 minutes

    const key = `user:${userId}:logins`;

    // Add current login
    await redis.zadd(key, now, `${ip}:${country}`);

    // Remove old logins
    await redis.zremrangebyscore(key, 0, now - windowTime);

    // Count recent logins
    const count = await redis.zcard(key);

    return count;
}


This is variable sliding window
Window moves continuously.

✅ Step 2: Calculate Risk Score
async function calculateRisk(userId, ip, country, device) {
    let risk = 0;

    const profileKey = `user:${userId}:risk`;
    const profile = await redis.hgetall(profileKey);

    if (profile.last_ip && profile.last_ip !== ip) {
        risk += 20;
    }

    if (profile.last_country && profile.last_country !== country) {
        risk += 30;
    }

    if (profile.last_device && profile.last_device !== device) {
        risk += 25;
    }

    const recentAttempts = await recordLogin(userId, ip, country);

    if (recentAttempts >= 5) {
        risk += 40;
    }

    return risk;
}

✅ Step 3: Take Action
async function loginHandler(userId, ip, country, device) {
    const riskScore = await calculateRisk(userId, ip, country, device);

    if (riskScore > 100) {
        return "BLOCK_ACCOUNT";
    }

    if (riskScore > 70) {
        return "REQUIRE_OTP";
    }

    return "ALLOW_LOGIN";
}

🔥 Advanced: Impossible Travel Detection

Example:

Login from India
5 minutes later → Login from USA


Impossible physically.

You:

Store last login timestamp

Calculate geo distance

Calculate travel speed

If speed > 1000km/h → add +50 risk

Used by:

Google

Microsoft

Amazon

🧠 Why Sliding Window Is Critical Here?

Because:

5 attempts in 10 minutes → risky
5 attempts in 1 year → normal


So we must track recent activity only.

That is exactly variable sliding window.

📈 Production-Level Improvements
✅ Risk Decay (Very Important)

Risk should decrease over time.

Example:

risk_score = risk_score * 0.8 every 10 minutes


So user doesn’t stay permanently risky.

✅ Use Kafka for Event Streaming

After login:

Publish: LOGIN_EVENT


Security service consumes → calculates advanced analytics.

✅ Use Redis TTL

Expire login window automatically:

await redis.expire(`user:${userId}:logins`, 600);

🏆 Interview-Level Explanation

If interviewer asks:

Design a risk-based authentication system.

You answer:

Use Redis Sorted Sets for sliding window login tracking

Use Hash for storing user risk profile

Calculate dynamic risk score

Apply thresholds for OTP or blocking

Publish events to Kafka for audit logging

Persist in MongoDB

That is senior backend design 💥

🎯 In Your Current Project

Since you already built:

Login system

Cache

Ranking

Redis

Kafka

You can now implement:

Adaptive Authentication System


That makes your system production-grade security.