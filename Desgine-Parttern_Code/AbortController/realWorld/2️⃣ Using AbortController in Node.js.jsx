🔹 2️⃣ Using AbortController in Node.js
Node.js >= v18 has built-in fetch with AbortController.
Works almost the same as in React.
import fetch from 'node-fetch'; // only for Node < 18

function wrapFetch(url, options = {}, base = 500, retry = 3, max = 5000) {
    return async function () {
        for (let i = 0; i < retry; i++) {
            const controller = new AbortController();
            options.signal = controller.signal;

            try {
                console.log(`Attempt ${i + 1}`);
                const timeout = setTimeout(() => controller.abort(), 2000);

                let response = await fetch(url, options);
                clearTimeout(timeout);

                if (!response.ok) throw new Error('Fetch failed');
                let data = await response.json();
                return data;
            } catch (err) {
                let ji = Math.min(base * Math.pow(2, i), max); // exponential jitter
                console.log(`Error: ${err.message}. Retrying in ${ji}ms`);
                await new Promise(res => setTimeout(res, ji));
            }
        }
        throw new Error('Max retries reached');
    };
}

// Usage
const fetchData = wrapFetch('https://jsonplaceholder.typicode.com/users');

fetchData()
    .then(data => console.log('Data:', data))
    .catch(err => console.log('Final Error:', err.message));

🔹 Key Notes
AbortController works only if fetch supports signal.
setTimeout(() => controller.abort(), 2000) → cancels the request if it takes too long.
Retry wrapper ensures exponential backoff + random jitter to avoid hammering the API.
Can be used in React, Node.js, or any environment that supports fetch + AbortController.

💡 Pro Tip for Interviews / Production:

Always combine AbortController with retry + jitter/backoff for resilient API calls.
Makes your system robust against network issues.