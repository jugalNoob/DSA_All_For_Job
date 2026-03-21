🚀 Advanced Version (Leading + Trailing)

👉 Interview level:

function throttling(fn, delay) {
    let lastCall = 0;
    let timeout;

    return function (...args) {
        let now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                lastCall = Date.now();
                fn(...args);
            }, delay - (now - lastCall));
        }
    };
}

🚀 You’re Doing Great

You now understand:

✅ Closure

✅ Timing control

✅ Throttling pattern

🔥 Next Level

If you want:

👉 🔥 Debouncing (search autocomplete)
👉 🔥 Rate limiter in Node.js (Redis based)
👉 🔥 Event loop deep dive