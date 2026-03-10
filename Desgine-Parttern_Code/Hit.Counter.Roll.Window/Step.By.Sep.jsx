Your code is implementing a Hit Counter for the last 5 minutes (300 seconds).
This is a very common interview question (used in system design like API rate tracking).

But your code has one small bug, and I’ll explain how it works step-by-step.

1️⃣ Idea of Hit Counter

We want to know:

How many requests happened in the last 5 minutes?


5 minutes =

300 seconds


So we store 300 slots.

index → second
value → number of hits

2️⃣ Data Structure
this.times = new Array(300).fill(0)
this.hits = new Array(300).fill(0)


Example:

times = [0,0,0,0,0....300]
hits  = [0,0,0,0,0....300]


Each index represents a second bucket.

3️⃣ Why % 300
const i = timestamp % 300


Because we only store 300 seconds.

Example:

timestamp = 301

301 % 300 = 1


So index 1 is reused.

This technique is called:

Circular Array / Ring Buffer


Memory stays constant O(300).

4️⃣ Example Hit

Call:

hitCounter(1)


Calculate index:

1 % 300 = 1


Check:

if(this.times[i] !== timestamp)


If this slot is from an old timestamp, reset it.

Example:

times[1] = 1
hits[1] = 1

5️⃣ Another Hit Same Second
hitCounter(1)


Now:

times[1] === 1


So we increment:

hits[1]++


Now:

hits[1] = 2


Meaning:

2 hits at second 1

6️⃣ Example Timeline

Calls:

hit(1)
hit(1)
hit(2)
hit(300)
hit(301)


Array may look like:

times: [0,1,2,0,...300,301]
hits : [0,2,1,0,...1,1]

7️⃣ getHits Function

Purpose:

Count hits from last 300 seconds


Loop:

for(let i=0;i<300;i++)


Check if slot is valid:

timestamp - times[i] < 300


If true:

add hits[i]

8️⃣ Bug in Your Code

You wrote:

if(timesteamp-this[this.times]<300)


This is wrong.

Correct:

if(timesteamp - this.times[i] < 300)

9️⃣ Correct Version
class HitCounter {

  constructor() {
    this.times = new Array(300).fill(0)
    this.hits = new Array(300).fill(0)
  }

  hit(timestamp) {

    const i = timestamp % 300

    if(this.times[i] !== timestamp){
        this.times[i] = timestamp
        this.hits[i] = 1
    } else {
        this.hits[i]++
    }
  }

  getHits(timestamp){

    let total = 0

    for(let i=0; i<300; i++){

        if(timestamp - this.times[i] < 300){
            total += this.hits[i]
        }

    }

    return total
  }

}

🔟 Real World Use Cases

This pattern is used in high-traffic backend systems.

Examples:

1️⃣ API Rate Limiting

Example:

User can make 100 requests per 5 minutes


We track hits like this.

Used in:

• API Gateway
• Node.js backend
• CDN services

2️⃣ Website Analytics

Example:

How many visits in last 5 minutes?


Used in dashboards.

3️⃣ DDOS Protection

Servers track request rate:

too many hits → block IP

1️⃣1️⃣ Complexity

Memory:

O(300) = O(1)


Time:

hit() → O(1)
getHits() → O(300) ≈ O(1)


Very efficient.

1️⃣2️⃣ Why This Is Smart

Instead of storing millions of timestamps, we store only:

300 slots


Memory stays constant.

✅ This is a very good interview problem used by companies like
Google, Amazon, Meta.