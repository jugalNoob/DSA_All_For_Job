## 8) Hit Counter

**Goal:** Count hits in last N seconds
**Core DS:** Queue / Circular array
**Why:** Time‑bucket aggregation
**Tradeoff:** Precision vs memory


🔹 What is a Hit Counter?

A Hit Counter is a system that counts the number of times an event occurs, usually a web page request, API call, or any action.

Think of it like a visitor counter on a website:

Every time someone visits a page → the counter increments.

You can also track hits in a time window, like “hits in the last 5 minutes”.

🔹 Simple Example Concept


| Time (s) | Event       | Hit Count |
| -------- | ----------- | --------- |
| 0        | User visits | 1         |
| 3        | User visits | 2         |
| 7        | User visits | 3         |
| 10       | User visits | 4         |



You can also limit the count within a time frame. For example, only count hits in the last 10 seconds.

🔹 Simple Hit Counter Implementation (No Time Window)
let hitCount = 0;

function hit() {
    hitCount++;
    console.log(`Total Hits: ${hitCount}`);
}

// Simulate hits
hit(); // Total Hits: 1
hit(); // Total Hits: 2
hit(); // Total Hits: 3


✅ Works if you just want a total hit counter.

🔹 Hit Counter with Time Window (e.g., last 5 minutes)
const hits = [];

function hit() {
    const now = Date.now();
    hits.push(now); // store timestamp of hit
    cleanup(now);
    console.log(`Hits in last 5 minutes: ${hits.length}`);
}

function cleanup(currentTime) {
    const FIVE_MINUTES = 5 * 60 * 1000;
    // Remove hits older than 5 minutes
    while (hits.length > 0 && currentTime - hits[0] > FIVE_MINUTES) {
        hits.shift();
    }
}

// Simulate hits
hit();
hit();
setTimeout(hit, 2000); // after 2 sec


hits stores timestamps of each hit.

cleanup() removes old hits outside the window.

hits.length = number of hits in last 5 minutes.

🔹 Use Cases

Web Traffic Analytics – track page or API usage.

Rate Limiting – count hits per user per time window.

Monitoring – track server requests for scaling decisions.

Gaming / App Events – track button clicks or actions in a time w

