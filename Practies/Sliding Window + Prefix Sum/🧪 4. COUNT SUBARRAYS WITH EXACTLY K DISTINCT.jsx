🧪 4. COUNT SUBARRAYS WITH EXACTLY K DISTINCT
🧠 Pattern:

👉 Sliding Window + Math Trick

💡 Trick:
Exactly K = AtMost(K) - AtMost(K-1)

✅ Code
function atMostK(nums, k) {
    let map = new Map();
    let left = 0, count = 0;

    for (let right = 0; right < nums.length; right++) {
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);

        while (map.size > k) {
            map.set(nums[left], map.get(nums[left]) - 1);
            if (map.get(nums[left]) === 0) map.delete(nums[left]);
            left++;
        }

        count += right - left + 1;
    }

    return count;
}

function exactlyK(nums, k) {
    return atMostK(nums, k) - atMostK(nums, k - 1);
}