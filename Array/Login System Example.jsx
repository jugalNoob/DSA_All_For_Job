🚀 Real Login System Example

In login systems:

Instead of storing clicks globally:

let userAttempts = {};

function trackLogin(userId) {
    if (!userAttempts[userId]) {
        userAttempts[userId] = [];
    }

    userAttempts[userId].push(Date.now());

    // Clean old attempts
    const FIVE_MINUTES = 5 * 60 * 1000;
    const now = Date.now();

    userAttempts[userId] =
        userAttempts[userId].filter(t => now - t < FIVE_MINUTES);

    console.log(userAttempts[userId].length, "attempts in last 5 mins");
}

🔐 Why This Is Powerful

If attempts > 5 in 5 minutes:

👉 Block login
👉 Add captcha
👉 Increase risk score

🧠 Interview Level Name

This pattern is called:

Sliding Window Rate Limiter