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

All 3 problems use:


| Problem             | Hashing Type       |
| ------------------- | ------------------ |
| Two Sum             | Value → Index      |
| Longest Consecutive | Presence checking  |
| Top K Frequent      | Frequency counting |
