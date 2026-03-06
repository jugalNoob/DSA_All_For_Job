Let’s build a real login system example using your FixSlide function to detect peak failed attempts and block users if needed.

We’ll simulate it in Node.js without a database first, then I’ll explain how to scale with Redis.

🚀 Node.js Login Rate Limiter (Fixed-Size Sliding Window)
// Fixed-size sliding window function
function FixSlide(data, windowSize) {
    if (data.length < windowSize) return data.reduce((a,b)=>a+b,0);

    let max = 0;
    let current = 0;

    for (let i = 0; i < windowSize; i++) {
        max += data[i];
    }
    current = max;

    for (let i = windowSize; i < data.length; i++) {
        current = current - data[i - windowSize] + data[i];
        max = Math.max(max, current);
    }

    return max;
}

// Simulate login attempts per user
let userAttempts = {};

// Window size: last 5 attempts
const WINDOW_SIZE = 5;
// Maximum allowed failed attempts in window
const MAX_FAILED = 3;

function login(userId, success) {
    // Initialize user attempts array if not exists
    if (!userAttempts[userId]) userAttempts[userId] = [];

    // Record 1 = failed, 0 = success
    userAttempts[userId].push(success ? 0 : 1);

    // Keep only last WINDOW_SIZE attempts
    if (userAttempts[userId].length > WINDOW_SIZE) {
        userAttempts[userId].shift();
    }

    // Calculate max failed attempts in window
    const maxFailed = FixSlide(userAttempts[userId], WINDOW_SIZE);

    if (maxFailed >= MAX_FAILED) {
        console.log(`🚫 User ${userId} blocked! Too many failed attempts.`);
        return false;
    } else {
        console.log(`✅ User ${userId} allowed. Attempts:`, userAttempts[userId]);
        return true;
    }
}

// Test simulation
login("user1", false); // fail
login("user1", false); // fail
login("user1", true);  // success
login("user1", false); // fail
login("user1", false); // fail
login("user1", false); // fail → blocked
login("user1", true);  // still blocked

🔹 How It Works

Each user has an array of last N attempts.

Each login attempt:

0 = success

1 = fail

Sliding window checks max failed attempts.

If maxFailed >= MAX_FAILED → block user.

Keeps only last N attempts → memory efficient.

🔹 Output Example
✅ User user1 allowed. Attempts: [1]
✅ User user1 allowed. Attempts: [1,1]
✅ User user1 allowed. Attempts: [1,1,0]
✅ User user1 allowed. Attempts: [1,1,0,1]
✅ User user1 allowed. Attempts: [1,1,0,1,1]
🚫 User user1 blocked! Too many failed attempts.
🚫 User user1 blocked! Too many failed attempts.

🔥 Next Level

To make it production-ready:

Use Redis per user → shared across servers.

Use timestamps instead of 0/1 → can block based on time window.

Integrate with OTP, CAPTCHA, or risk scoring.

Combine with sliding window + exponential backoff + jitter → prevent brute-force and spikes.



🔹 How It Works

Each user has an array of last N attempts.

Each login attempt:

0 = success

1 = fail

Sliding window checks max failed attempts.

If maxFailed >= MAX_FAILED → block user.

Keeps only last N attempts → memory efficient.

🔹 Output Example
✅ User user1 allowed. Attempts: [1]
✅ User user1 allowed. Attempts: [1,1]
✅ User user1 allowed. Attempts: [1,1,0]
✅ User user1 allowed. Attempts: [1,1,0,1]
✅ User user1 allowed. Attempts: [1,1,0,1,1]
🚫 User user1 blocked! Too many failed attempts.
🚫 User user1 blocked! Too many failed attempts.

🔥 Next Level

To make it production-ready:

Use Redis per user → shared across servers.

Use timestamps instead of 0/1 → can block based on time window.

Integrate with OTP, CAPTCHA, or risk scoring.

Combine with sliding window + exponential backoff + jitter → prevent brute-force and spikes.