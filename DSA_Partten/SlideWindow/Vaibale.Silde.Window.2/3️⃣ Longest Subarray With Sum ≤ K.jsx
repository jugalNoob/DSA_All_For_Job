3️⃣ Longest Subarray With Sum ≤ K
function longestSubarray(nums, k) {
    let left = 0;
    let sum = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum > k) {
            sum -= nums[left];
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

console.log(longestSubarray([1,2,3,4,5], 9)); // 3


Idea:

Maintain window sum

Shrink window when sum > k