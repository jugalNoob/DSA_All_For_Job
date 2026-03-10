1️⃣ Two Sum

Problem: Find indices of two numbers that add up to target.

Core Logic: Use a hash map to store num → index. For each num, check if target - num exists.

DS: HashMap

Time/Space: O(n) / O(n)

Node.js Use: Quickly find relationships between datasets.

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(nums[i], i);
    }
    return [];
}