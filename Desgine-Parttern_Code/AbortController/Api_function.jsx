async function apiTimeout() {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => controller.abort(), 500); // 500ms timeout

    try {
        console.time('start');
        const response = await fetch('https://jsonplaceholder.typicode.com/users', { signal });
        const data = await response.json();
        console.log(data);
        console.timeEnd('start');
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error("Request aborted due to timeout");
        } else {
            console.error("Fetch error:", error);
        }
    } finally {
        clearTimeout(timeoutId); // Always clear the timeout
    }
}

apiTimeout();
✅ Improvements here:

Fixed typo: respone → response.
Added finally block to always clear the timeout.
Slightly longer timeout for demo purposes.
Error handling more clear (AbortError vs other errors).