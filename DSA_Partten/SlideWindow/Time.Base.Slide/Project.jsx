1️⃣ What is Time Series Sliding Window?

A time series means data recorded over time.

Example:

Page visits per minute
[10, 15, 20, 30, 25, 40]


A sliding window means we only analyze the recent time period.

Example:

Last 3 minutes


So the window moves like this:

[10,15,20] → sum
[15,20,30] → sum
[20,30,25] → sum
[30,25,40] → sum

2️⃣ Example Problem

Find maximum traffic in last K minutes.

visits = [10,15,20,30,25,40]
k = 3


Windows:

[10,15,20] = 45
[15,20,30] = 65
[20,30,25] = 75
[30,25,40] = 95  ← maximum

3️⃣ JavaScript Code (Sliding Window)
function maxTraffic(visits, k) {

    let sum = 0;

    // first window
    for (let i = 0; i < k; i++) {
        sum += visits[i];
    }

    let maxSum = sum;

    for (let i = k; i < visits.length; i++) {

        sum = sum + visits[i] - visits[i - k];

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

console.log(maxTraffic([10,15,20,30,25,40], 3));


Output

95


Time Complexity

O(n)

4️⃣ Real World Uses (Very Important)
1️⃣ API Rate Limiting

Allow 100 requests per minute.

Sliding window tracks requests in last 60 seconds.

Example:

requests = timestamps

2️⃣ Website Analytics

Track:

page views last 5 minutes

active users last 10 minutes

3️⃣ Stock Market Dashboard

Find highest price change in last 10 minutes.

4️⃣ Chat / Messaging Apps

Track:

messages per minute


Detect spam or bursts.

5️⃣ System Monitoring

Monitor:

CPU usage last 30 seconds

5️⃣ Simple Sliding Window Template

Use this pattern:

let sum = 0;

for (let i = 0; i < k; i++) {
    sum += arr[i];
}

for (let i = k; i < arr.length; i++) {

    sum = sum + arr[i] - arr[i - k];

}


Key idea:

Add new element
Remove old element

⭐ Interview Tip

If problem says:

last K seconds
last K minutes
recent N events
moving average


Think:

👉 Time Series Sliding Window