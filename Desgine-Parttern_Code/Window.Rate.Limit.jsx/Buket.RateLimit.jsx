
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