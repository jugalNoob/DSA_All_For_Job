import { useEffect } from 'react';

function jitter(base, i, max) {
    let jit = Math.min(base * Math.pow(2, i), max);
    return Math.floor(Math.random() * jit);
}

function wrapFetch(url, options = {}, base = 500, retry = 3, max = 5000) {
    return async function () {
        for (let i = 0; i < retry; i++) {
            const controller = new AbortController();
            options.signal = controller.signal; // pass signal to fetch

            try {
                console.log(`Attempt ${i + 1}`);

                // optional timeout
                const timeout = setTimeout(() => controller.abort(), 2000);

                let response = await fetch(url, options);
                clearTimeout(timeout);

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

// Usage in React component
export default function App() {
    useEffect(() => {
        const fetchData = wrapFetch('https://jsonplaceholder.typicode.com/users');

        fetchData()
            .then(data => console.log('Data:', data))
            .catch(err => console.log('Final Error:', err.message));
    }, []);

    return <div>Check console for fetch results</div>;
}


✅ Key points:

AbortController allows cancelling the fetch if it takes too long.
Works well with retry + backoff logic.
Avoids hanging requests in React components.