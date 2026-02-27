🔹 Logger Rate Limiter (Sliding Window / Burst Allowed)

Goal:

Allow up to n logs per time window for each unique message.

If exceeded, skip logging until the next window.

🔹 Implementation in JS
class LoggerRateLimiter {
    constructor(limit = 3, windowSize = 10000) {
        this.limit = limit;           // max logs allowed
        this.windowSize = windowSize; // time window in ms
        this.logs = new Map();        // message -> array of timestamps
    }

    log(message) {
        const now = Date.now();

        if (!this.logs.has(message)) {
            this.logs.set(message, []);
        }

        const timestamps = this.logs.get(message);

        // Remove timestamps outside the window
        while (timestamps.length > 0 && now - timestamps[0] > this.windowSize) {
            timestamps.shift();
        }

        if (timestamps.length < this.limit) {
            timestamps.push(now);
            console.log(message); // log allowed
        } else {
            // Rate limit exceeded
            console.log(`Skipped logging "${message}" due to rate limit.`);
        }
    }
}

// ✅ Example Usage
const logger = new LoggerRateLimiter(3, 5000); // max 3 logs per 5 sec

logger.log("Error occurred");
logger.log("Error occurred");
logger.log("Error occurred");
logger.log("Error occurred"); // skipped
setTimeout(() => logger.log("Error occurred"), 6000); // allowed after window

🔹 How It Works

Track timestamps per message

logs map stores arrays of when each message was logged.

Cleanup old timestamps

Remove timestamps outside the sliding window.

Check limit

If count < limit → log and save timestamp.

Else → skip logging (rate-limited).

Sliding window allows bursts but prevents spam.

🔹 Advantages

Works for multiple message types.

Handles bursty logs efficiently.

Memory-efficient because old timestamps are cleaned up.

🔹 Use Cases

Server error logging – prevent flooding logs for repeated errors.

API request logging – limit logs per endpoint.

Monitoring / Alerts – avoid alert spam for repeated events.