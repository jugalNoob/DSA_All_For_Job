✅ Correct Code
function throttling(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        let now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            return fn(...args);
        }
    };
}

function Main() {
    console.log("message signal");
}

let test = throttling(Main, 2000); // 2 sec delay

// Call multiple times
setInterval(() => {
    test();
}, 500);

🔍 How It Works
Calls every 500ms
BUT function runs only every 2000ms

🧠 Timeline Example
Time → 0ms   → run ✅
Time → 500ms → skip ❌
Time → 1000ms → skip ❌
Time → 2000ms → run ✅

⚡ Output
message signal
(wait 2 sec)
message signal
(wait 2 sec)
...

🧠 Key Concept

👉 Throttling means:

"Run function at most once every X ms"

🔥 Use Cases

Scroll events

API rate limiting

Button spam prevention