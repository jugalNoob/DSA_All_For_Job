
// Token Bucket configuration Simple  ------------------->>>


const maxTokens = 5; // Maximum tokens the bucket can hold
const refillRate = 1; // Tokens added to the bucket every second
let tokens = maxTokens; // Current tokens in the bucket
const refillRate = 1000; // 1 token per second
// Refill tokens periodically
setInterval(() => {
    if (tokens < maxTokens) {
        tokens++; // Refill the bucket
        console.log(`Token added. Current tokens: ${tokens}`);
    }
}, 1000); // Refill every 1 second


if (tokens > 0) {
    tokens--; // Consume a token
    console.log(`Token consumed. Remaining tokens: ${tokens}`);
} else {
    res.status(429).send("Too Many Requests. Please try again later.");
    console.log("Request rejected. Bucket is empty.");
}


Token Bucket: Like a prepaid water tank that refills slowly — if full, you can take a quick shower (burst).