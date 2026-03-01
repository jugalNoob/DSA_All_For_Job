Perfect Jugal 🔥
Now we’re entering high-frequency interview problems.

These 3 hashing problems are asked in:

Product companies

Backend interviews

FAANG-level DSA rounds

I’ll explain each with:

✅ Problem

🧠 Intuition

💻 Code

⏱ Complexity

🎯 Interview tricks

1️⃣ Two Sum
📌 Problem

Given an array and a target, return indices of two numbers such that:

nums[i] + nums[j] = target


Example:

nums = [2,7,11,15]
target = 9

Output: [0,1]

❌ Brute Force

Two loops → O(n²)

✅ Optimized (Hash Map)
🧠 Core Idea

For each number:

needed = target - current


If needed already seen → solution found.

💻 Code
function twoSum(nums, target) {
    const map = new Map(); // value → index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
}

console.log(twoSum([2,7,11,15], 9)); // [0,1]

⏱ Complexity

Time: O(n)
Space: O(n)

🎯 Interview Tip

If array is sorted → use Two Pointer instead → O(1) space.

2️⃣ Longest Consecutive Sequence
📌 Problem

Find the length of the longest consecutive elements sequence.

Example:

[100,4,200,1,3,2]


Output:

4   // sequence: 1,2,3,4

❌ Brute Force

Sort array → O(n log n)

Better solution exists.

✅ Optimized Using Hash Set
🧠 Core Idea

Put all numbers in a Set.

Only start counting when number is beginning of sequence:

if (!set.has(num - 1))

💻 Code
function longestConsecutive(nums) {
    const set = new Set(nums);
    let maxLength = 0;

    for (let num of set) {
        if (!set.has(num - 1)) { // start of sequence
            let current = num;
            let length = 1;

            while (set.has(current + 1)) {
                current++;
                length++;
            }

            maxLength = Math.max(maxLength, length);
        }
    }

    return maxLength;
}

console.log(longestConsecutive([100,4,200,1,3,2])); // 4

⏱ Complexity

Time: O(n)
Space: O(n)

Because each number visited once.

🎯 Why This Is Smart?

We only start counting from sequence start → avoids repeated work.

This is a classic FAANG problem.

3️⃣ Top K Frequent Elements
📌 Problem

Return k most frequent elements.

Example:

nums = [1,1,1,2,2,3]
k = 2

Output: [1,2]

Step 1️⃣ Count Frequencies (Hash Map)
Step 2️⃣ Get Top K

Multiple approaches:

Sort (easy)

Heap (optimized)

Bucket sort (best)

✅ Approach 1: Simple Sort
function topKFrequent(nums, k) {
    const map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(entry => entry[0]);
}

console.log(topKFrequent([1,1,1,2,2,3], 2));

⏱ Complexity

Time: O(n log n)
Space: O(n)

🚀 Optimized: Bucket Sort (O(n))
🧠 Idea

Frequency can be at most n.

Create buckets where:

index = frequency

💻 Code
function topKFrequent(nums, k) {
    const map = new Map();
    const buckets = Array(nums.length + 1).fill().map(() => []);

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, freq] of map.entries()) {
        buckets[freq].push(num);
    }

    const result = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
        }
    }

    return result.slice(0, k);
}

console.log(topKFrequent([1,1,1,2,2,3], 2));

⏱ Complexity

Time: O(n)
Space: O(n)

This is optimal solution.

🔥 Pattern Recognition


| Problem             | Hashing Type       |
| ------------------- | ------------------ |
| Two Sum             | Value → Index      |
| Longest Consecutive | Presence checking  |
| Top K Frequent      | Frequency counting |


🧠 Backend/System Thinking

These patterns are used in:

Log analytics

Rate limiting counters

Top trending videos

Most active users

Duplicate detection

Very relevant to your backend prep.

🎯 Final Interview Tip

If interviewer says:

"Solve in O(n) time"

Immediately think:

HashMap

HashSet

Frequency counting

Hashing reduces nested loops.

If you want next level 🚀

I can now explain: