✅ Correct Debounce Code
function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function Main() {
    console.log("message signal");
}

let test = debounce(Main, 2000);

// Simulate multiple calls
setTimeout(() => test(), 0);
setTimeout(() => test(), 500);
setTimeout(() => test(), 1000);

🔍 How It Works

👉 Calls happen quickly:

0ms → test()
500ms → test()
1000ms → test()


👉 Only LAST call executes after 2 sec

🧠 Timeline
Call → reset timer → reset timer → reset timer
Wait 2 sec → execute once ✅

⚡ Output
message signal   (only once)

🧠 Key Concept

👉 Debouncing means:

"Run function only AFTER user stops triggering"

🔥 Use Cases

Search input (Google autocomplete)

Resize events

Typing detection

⚠️ Difference from Throttling



| Feature   | Debounce   | Throttle     |
| --------- | ---------- | ------------ |
| Execution | after stop | at intervals |
| Example   | search     | scroll       |

