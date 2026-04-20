🔁 3. Time Window Logic (VERY IMPORTANT 🔥)
👉 Example: 1-minute window counter
let windowStart = Date.now();
let count = 0;

function request() {
  const now = Date.now();

  if (now - windowStart > 60000) {
    windowStart = now;
    count = 0;
  }

  count++;
  console.log("Requests in window:", count);
}

🧠 Use cases:
API rate limiting
Redis rate limiter
fraud detection