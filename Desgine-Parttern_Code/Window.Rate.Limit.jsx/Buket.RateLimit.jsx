
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




class TokenBucket {

    constructor(capacity, refillRate){
        this.capacity = capacity
        this.tokens = capacity
        this.refillRate = refillRate
        this.lastRefill = Date.now()
    }

    allowRequest(){

        const now = Date.now()
        const elapsed = (now - this.lastRefill) / 1000

        const refill = Math.floor(elapsed * this.refillRate)

        if(refill > 0){
            this.tokens = Math.min(this.capacity, this.tokens + refill)
            this.lastRefill = now
        }

        if(this.tokens > 0){
            this.tokens--
            console.log("Request Allowed | Tokens left:", this.tokens)
            return true
        }

        console.log("Rate limit exceeded")
        return false
    }
}
