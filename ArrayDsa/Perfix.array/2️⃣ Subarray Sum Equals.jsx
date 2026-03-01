2️⃣ Subarray Sum Equals K (VERY IMPORTANT 🔥)

This is a classic interview problem.

📌 Problem

Given array and integer k, count subarrays whose sum = k.

Example:

[1,1,1], k=2
Answer = 2


Subarrays:

[1,1] (index 0-1)
[1,1] (index 1-2)

❌ Brute Force

Check all subarrays → O(n²)

Not good.

✅ Optimized Using Prefix Sum + HashMap
🔥 Core Idea

If:

currentSum - k = some previous prefixSum


Then subarray exists.

✅ Code
function subarraySum(nums, k) {
    let count = 0;
    let prefixSum = 0;
    const map = new Map();

    map.set(0, 1); // Important base case

    for (let num of nums) {
        prefixSum += num;

        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
}

console.log(subarraySum([1,1,1], 2)); // 2

🔎 Dry Run

Array:

[1,1,1]
k = 2


Step 1:

prefixSum = 1
map = {0:1}
1-2 = -1 → not exist
map = {0:1, 1:1}


Step 2:

prefixSum = 2
2-2 = 0 → exists
count = 1
map = {0:1, 1:1, 2:1}


Step 3:

prefixSum = 3
3-2 = 1 → exists
count = 2


Answer = 2

⏱ Complexity

Time: O(n)
Space: O(n)

🎯 Why Important?

Used in:

Transaction analysis

Log aggregation

Real-time metrics

Financial systems

Interviewers LOVE this question.