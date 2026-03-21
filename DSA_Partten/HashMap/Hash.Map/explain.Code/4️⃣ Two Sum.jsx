4️⃣ Two Sum

Problem: Given an array, find indices of two numbers that add up to a target.

Example:

arr = [2,7,11,15], target = 9 → [0,1]


Solution using HashMap:

function twoSum(arr, target) {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map[complement] !== undefined) return [map[complement], i];
        map[arr[i]] = i;
    }
    return [];
}
console.log(twoSum([2,7,11,15], 9)); // [0,1]