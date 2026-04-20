What is AbortController?

AbortController is a built-in Web API (also in Node.js fetch) used to cancel asynchronous operations, like fetch requests, timers, or any async task that supports a signal.

controller = new AbortController() → creates a controller
signal = controller.signal → pass this to the async operation
controller.abort() → triggers cancellation


🔹 Example: Using AbortController with Fetch + Retry
function jitter(base, i, max) {
    let jit = Math.min(base * Math.pow(2, i), max);
    return Math.floor(Math.random() * jit);
}

function wrapFetch(url, options = {}, base = 500, retry = 3, max = 5000) {
    return async function () {
        for (let i = 0; i < retry; i++) {
            const controller = new AbortController(); // create abort controller
            options.signal = controller.signal;       // pass signal to fetch

            try {
                console.log(`Attempt ${i + 1}`);
                
                // Optional: set a timeout for fetch
                const timeout = setTimeout(() => controller.abort(), 2000); 
                
                let response = await fetch(url, options); 
                clearTimeout(timeout); // clear timeout if successful

                if (!response.ok) throw new Error('Fetch failed');
                let data = await response.json();
                return data;
            } catch (err) {
                let ji = jitter(base, i, max);
                console.log(`Error: ${err.message}. Retrying in ${ji}ms`);
                await new Promise(res => setTimeout(res, ji));
            }
        }
        throw new Error('Max retries reached');
    };
}

// Usage
const testFetch = wrapFetch('https://jsonplaceholder.typicode.com/users');
testFetch().then(console.log).catch(err => console.log(err.message));

🔹 Key Points About AbortController
controller.abort() immediately cancels the operation that supports the signal.
It is useful in retries + jitter when an operation might hang or take too long.
Works with:
fetch (HTTP requests) ✅
ReadableStream / Node.js streams
Any custom async function that supports cancellation

💡 Important:

AbortController does not automatically cancel any function — the function must support the signal.
For your wrap(fn) example above (just throwing errors or sync code), AbortController does nothing. It’s only meaningful for fetch or cancellable async tasks.