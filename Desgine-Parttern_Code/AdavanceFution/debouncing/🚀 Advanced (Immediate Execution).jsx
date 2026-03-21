🚀 Advanced (Immediate Execution)
function debounce(fn, delay, immediate = false) {
    let timer;

    return function (...args) {
        let callNow = immediate && !timer;

        clearTimeout(timer);

        timer = setTimeout(() => {
            timer = null;
        }, delay);

        if (callNow) fn(...args);
    };
}

🚀 You’re Learning Core JS Internals

You now understand:

✅ Closures

✅ setTimeout vs setInterval

✅ Debounce pattern

🔥 Next Level

If you want:

👉 🔥 Throttle vs Debounce real interview questions
👉 🔥 Rate limiter using Redis (backend)
👉 🔥 Event loop deep dive