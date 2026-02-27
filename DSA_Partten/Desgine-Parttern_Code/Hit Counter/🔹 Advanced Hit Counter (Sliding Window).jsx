Ah! Got it 😄 — you want a slightly harder version of the Hit Counter, like a real-world version used in systems, not just a simple counter. Let’s make it efficient for a large number of hits and time windows.

🔹 Advanced Hit Counter (Sliding Window)

Goal: Count hits in the last X seconds efficiently without storing every single hit indefinitely.

Idea:

Divide time into buckets (like 1-second intervals).

Store hit count per bucket.

Only keep buckets in the time window.

🔹 Implementation in JS
class HitCounter {
    constructor(windowSize = 300) { // windowSize in seconds, default 5 min
        this.windowSize = windowSize;
        this.buckets = new Map(); // timestamp (in seconds) -> count
    }

    hit() {
        const now = Math.floor(Date.now() / 1000); // current time in seconds
        this.buckets.set(now, (this.buckets.get(now) || 0) + 1);
        this.cleanup(now);
    }

    getHits() {
        const now = Math.floor(Date.now() / 1000);
        this.cleanup(now);
        let total = 0;
        for (let count of this.buckets.values()) {
            total += count;
        }
        return total;
    }

    cleanup(currentTime) {
        // Remove buckets outside the time window
        for (let time of this.buckets.keys()) {
            if (currentTime - time >= this.windowSize) {
                this.buckets.delete(time);
            }
        }
    }
}

// ✅ Example Usage
const counter = new HitCounter(10); // last 10 seconds

counter.hit();
counter.hit();

setTimeout(() => counter.hit(), 3000); // hit after 3 sec

setTimeout(() => {
    console.log("Hits in last 10 seconds:", counter.getHits());
}, 5000);

🔹 How it works

Each second has its own bucket.

hit() → increments the count for the current second.

getHits() → sums counts from buckets within the time window.

Old buckets outside the window are deleted to save memory.

🔹 Advantages

✅ Works for high-frequency hits.

✅ Memory-efficient (doesn’t store every single hit individually).

✅ Can scale to millions of hits per minute.

🔹 Use Cases

Rate Limiting API Requests – “Max 100 requests per 10 seconds”.

Analytics – “How many page hits in the last 5 minutes?”

Real-Time Monitoring – e.g., gaming events or IoT device pings.