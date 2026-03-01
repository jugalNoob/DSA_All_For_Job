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