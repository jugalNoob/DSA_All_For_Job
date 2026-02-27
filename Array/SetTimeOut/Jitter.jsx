Jitter🌐 What is Jitter?

Jitter = small random variation in timing when you schedule repeated tasks.

Think of it as:

“I want to poll every 2 seconds, but sometimes I wait 1.9s or 2.1s instead of exactly 2s.”

🧠 Why Use Jitter?

Without jitter, many clients might hit the server at exactly the same time.

Example:

1000 clients polling every 2 seconds

All requests arrive at the same instant → server spikes → overload

With jitter:

Each client adds tiny random delay

Requests get spread out → reduces load peaks

🔥 Simple Example in JavaScript
let baseDelay = 2000  // 2 seconds

function poll() {
    console.log("Polling server at", new Date().toISOString())

    // Add jitter: random between 0 and 500ms
    let jitter = Math.floor(Math.random() * 500)
    let nextDelay = baseDelay + jitter

    setTimeout(poll, nextDelay)
}

poll()


Output (intervals vary slightly):

Polling server at 10:00:00.000
Polling server at 10:00:02.321
Polling server at 10:00:04.112
Polling server at 10:00:06.450
...

🏗 Real World Use Cases

Polling systems → avoid server spikes

Distributed systems / retries → avoid thundering herd problem

IoT devices → randomize reporting time to balance network