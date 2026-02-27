// Function to find the maximum sum of a subarray
function maxSumSubarray(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
// Example usage
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSumSubarray(nums)); // Output: 6 (sum of subarray [4, -1, 2, 1])

[4]            → sum = 4
[4, -1]        → sum = 3
[4, -1, 2]     → sum = 5
[4, -1, 2, 1]  → sum = 6 ✅
[4, -1, 2, 1, -5] → sum = 1

currentSum = Math.max(arr[i], currentSum + arr[i]);
maxSum = Math.max(maxSum, currentSum);

| Step  | Element | currentSum      | maxSum | Explanation             |
| ----- | ------- | --------------- | ------ | ----------------------- |
| Start | -2      | -2              | -2     | first element           |
| 1     | 1       | max(1, -2+1)=1  | 1      | start new subarray at 1 |
| 2     | -3      | max(-3, 1-3)=-2 | 1      | continue                |
| 3     | 4       | max(4, -2+4)=4  | 4      | start new subarray      |
| 4     | -1      | max(-1, 4-1)=3  | 4      | continue                |
| 5     | 2       | max(2, 3+2)=5   | 5      | continue                |
| 6     | 1       | max(1, 5+1)=6   | 6 ✅    | maximum found           |
| 7     | -5      | max(-5, 6-5)=1  | 6      | continue                |
| 8     | 4       | max(4, 1+4)=5   | 6      | final                   |


✅ Answer = 6

🪄 Intuition

If the running sum (currentSum) becomes negative,
it means it will reduce the future total — so we reset it.

If it’s positive, we keep adding to build a larger sum.

That’s the core trick of Kadane’s Algorithm!


| Feature      | Description                                        |
| ------------ | -------------------------------------------------- |
| 🚀 Fast      | Works in **O(n)** time — just one loop             |
| 💾 Efficient | Uses **O(1)** extra space                          |
| 🧠 Smart     | Decides automatically when to start a new subarray |


🧩 Real-world Use Cases

Kadane’s Algorithm (max subarray sum) appears in many practical scenarios:

1️⃣ Stock Market Analysis

Find the best time to buy and sell (maximum profit over continuous days).
→ The subarray with max sum = period of max gain.

2️⃣ Temperature / Sensor Data

Find the period with the highest average reading or continuous improvement.

3️⃣ Gaming / AI Metrics

Find longest winning streak or maximum continuous performance.

4️⃣ Interview Problems

It’s a classic DSA question — almost every technical interview includes it.

🔍 Summary
Concept	Explanation


| Concept            | Explanation                               |
| ------------------ | ----------------------------------------- |
| 🧮 Problem         | Find max sum of any *continuous* subarray |
| ⚙️ Algorithm       | Kadane’s Algorithm                        |
| ⏱️ Time Complexity | O(n)                                      |
| 🧠 Key idea        | Reset running sum if it becomes negative  |
| 💡 Output          | Maximum possible sum                      |
