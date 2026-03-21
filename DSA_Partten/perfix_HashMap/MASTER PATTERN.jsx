This is a very powerful DSA pattern 🔥 — you’re looking at:

🧠 Pattern Name

👉 Prefix Sum + HashMap (Frequency Map)

🎯 What this pattern does

It helps solve problems like:

👉 “Find subarrays with some condition”
👉 “Sum equals target”
👉 “Count subarrays”
👉 “Longest subarray”

💡 CORE IDEA (Very Simple)

Instead of checking all subarrays (O(n²)) ❌
👉 We store prefix sums in a map and solve in O(n) ✅


⚡ MASTER CODE (Your Pattern Explained)
let map = new Map();
map.set(0, 1);  // Important base case

let sum = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (map.has(sum - target)) {
        count += map.get(sum - target);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
}

return count;

🧠 WHY sum - target ?

👉 Think like this:

currentSum - previousSum = target


👉 So:

previousSum = currentSum - target


✔ That’s why we check:

map.has(sum - target)

📦 WHAT IS STORED IN MAP?
Key   → prefix sum
Value → frequency

🔥 DRY RUN (IMPORTANT)
Input:
arr = [1, 2, 3]
target = 3

Step-by-step


| i | arr[i] | sum | sum-target | map               | count |
| - | ------ | --- | ---------- | ----------------- | ----- |
| 0 | 1      | 1   | -2         | {0:1,1:1}         | 0     |
| 1 | 2      | 3   | 0          | {0:1,1:1,3:1}     | 1 ✅   |
| 2 | 3      | 6   | 3          | {0:1,1:1,3:1,6:1} | 2 ✅   |



🎯 WHAT PROBLEMS USE THIS?
🥇 1. Subarray Sum Equals K

👉 Count subarrays with sum = target

🥈 2. Longest Subarray with Sum K

👉 Modify:

if (!map.has(sum)) {
   map.set(sum, i);
}

🥉 3. Count Subarrays with Sum 0

👉 Just set:

target = 0

🏆 4. Equal 0s and 1s

👉 Trick:

0 → -1

🧪 5. Binary Array Sum Problems
🔥 6. Subarray Divisible by K

👉 Use:

sum % k

⚡ TYPES OF QUESTIONS THIS PATTERN SOLVES

| Type              | Example    |
| ----------------- | ---------- |
| Count subarrays   | Sum = K    |
| Longest subarray  | Max length |
| Zero sum problems | sum = 0    |
| Binary problems   | equal 0/1  |
| Modulo problems   | sum % k    |


🧠 INTERVIEW KEY LINE

This is a prefix sum + hashmap pattern where we store cumulative sums and use the relation sum - target to efficiently find valid subarrays in O(n) time.

🚀 WHY map.set(0,1) ?

👉 This handles case when:

sum == target


Example:

[3] → target = 3

❌ COMMON MISTAKE
map.set(sum, 1) ❌


👉 Always use frequency:

map.set(sum, (map.get(sum) || 0) + 1) ✅

🧠 MEMORY TRICK

👉 Remember:

SUM → STORE
SUM - TARGET → CHECK

💬 If you want next level

I can show: