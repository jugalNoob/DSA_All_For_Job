let tokens = 5;           // bucket capacity
const MAX_TOKENS = 5;
const REFILL_INTERVAL = 2000; // 1 token every 2 seconds

// refill tokens over time
setInterval(() => {
  if (tokens < MAX_TOKENS) tokens++;
}, REFILL_INTERVAL);

// simulate incoming requests
function sendRequest() {
  if (tokens > 0) {
    tokens--;
    console.log("Request sent ✅ | Tokens left:", tokens);
  } else {
    console.log("Rate limit hit ❌ | No tokens available");
  }
}

// simulate requests every 500ms
setInterval(sendRequest, 500);
