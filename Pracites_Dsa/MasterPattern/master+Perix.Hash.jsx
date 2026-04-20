Yes 🔥 this is one of the most important interview patterns
👉 If you master this, you unlock tons of problems

🧠 Pattern: Prefix Sum + HashMap
💡 Core Idea

Instead of checking all subarrays (O(n²)),
we use:

👉 Prefix Sum + Map → O(n)

🎯 Problem: Subarray Sum = K
Example:
arr = [1, 2, 3]
k = 3


Subarrays:

[1,2] → 3 ✅
[3]   → 3 ✅


👉 Answer = 2

🧠 Key Insight

We use this identity:

currentSum - previousSum = k


👉 Rearranged:

previousSum = currentSum - k

📌 Formula

prefix[j]−prefix[i]=k 

prefix[j]−prefix[i]=k

🔍 Step-by-Step Thinking

While iterating:

Keep running sum → currSum

Check:

currSum - k exists in map?

If YES → we found subarray(s)
💻 Code (Interview Killer)


function subarraySum(nums, k) {
    let map = new Map();
    map.set(0, 1); // important

    let currSum = 0;
    let count = 0;

    for (let num of nums) {
        currSum += num;

        if (map.has(currSum - k)) {
            count += map.get(currSum - k);
        }

        map.set(currSum, (map.get(currSum) || 0) + 1);
    }

    return count;
}

console.log(subarraySum([1,2,3], 3)); // 2

🔍 Dry Run
nums = [1,2,3], k=3

map = {0:1}

Step 1:
currSum = 1
1-3 = -2 ❌
map = {0:1, 1:1}

Step 2:
currSum = 3
3-3 = 0 ✅ → count=1
map = {0:1,1:1,3:1}

Step 3:
currSum = 6
6-3 = 3 ✅ → count=2

🔥 Why map.set(0,1)?

👉 Handles case:

[3] = k


Without it → you miss answers ❌

⏱️ Complexity
Time: O(n)
Space: O(n)
🚀 Variations (VERY IMPORTANT)
1. Longest Subarray Sum = K

👉 Store first occurrence only

2. Subarray Sum Divisible by K

👉 Use modulo

3. Binary Array (0 & 1)

👉 Convert 0 → -1

4. Count Subarrays with Equal 0s and 1s

👉 Same trick 🔥

🧠 When to Use This Pattern

If problem says:

“subarray sum”
“count subarrays”
“sum equals k”
“continuous sum”

👉 Immediately think:
Prefix + HashMap