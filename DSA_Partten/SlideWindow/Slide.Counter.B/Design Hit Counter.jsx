Great 👍 Let’s learn the Design Hit Counter problem. This is a very famous interview question and uses Time Series + Sliding Window.

1️⃣ Problem (Design Hit Counter)

Design a system that:

Records a hit at a timestamp

Returns number of hits in last 5 minutes

5 minutes = 300 seconds


Functions:

hit(timestamp)      → record a hit
getHits(timestamp)  → return hits in last 300 seconds


Example:

hit(1)
hit(2)
hit(3)

getHits(4) → 3


After some time:

hit(300)

getHits(300) → 4
getHits(301) → 3


Because timestamp 1 is older than 300 seconds.

2️⃣ Idea (Sliding Window)

We store timestamps of hits.

When we call getHits():

Remove timestamps older than 300 seconds

Return remaining count.

Data structure used:

Queue

3️⃣ JavaScript Code (Simple Version)
class HitCounter {

    constructor() {
        this.queue = [];
    }

    hit(timestamp) {
        this.queue.push(timestamp);
    }

    getHits(timestamp) {

        while (this.queue.length && this.queue[0] <= timestamp - 300) {
            this.queue.shift();
        }

        return this.queue.length;
    }
}

const counter = new HitCounter();

counter.hit(1);
counter.hit(2);
counter.hit(3);

console.log(counter.getHits(4)); // 3

counter.hit(300);

console.log(counter.getHits(300)); // 4
console.log(counter.getHits(301)); // 3

4️⃣ How It Works

Queue stores timestamps:

[1,2,3,300]


When we check:

getHits(301)


Remove old hits:

301 - 300 = 1


Remove:

timestamp ≤ 1


Queue becomes:

[2,3,300]


Answer:

3 hits

5️⃣ Time Complexity
Operation	Time
hit	O(1)
getHits	O(n) worst case

Usually very fast because old timestamps are removed quickly.

6️⃣ Real World Uses

This exact logic is used in:

API monitoring
How many requests in last 5 minutes?

Website analytics
How many page visits in last minute?

Chat systems
Messages sent in last 10 seconds

Security systems
Login attempts in last 60 seconds

7️⃣ Visual Timeline
hits: 1 2 3 300

time=301

window = last 300 seconds

valid hits:

2 3 300

⭐ Important

This problem teaches:

Sliding window

Queue

Time series processing

Rate limiting systems

These are used in backend + system design interviews.

✅ Since you are learning frontend + HLD + LLD, next you should also understand:

1️⃣ LRU Cache (very famous interview problem)
2️⃣ Event Emitter / Observer pattern
3️⃣ Debounce & Throttle (very important for frontend)