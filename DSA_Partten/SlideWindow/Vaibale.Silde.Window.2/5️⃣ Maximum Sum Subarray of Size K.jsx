5️⃣ Maximum Sum Subarray of Size K

5️⃣ Maximum Sum Subarray of Size K
function maxSumSubarray(nums, k) {
    let sum = 0;
    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    maxSum = sum;

    for (let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

console.log(maxSumSubarray([1,4,2,10,23,3,1,0,20], 4)); // 39


Idea:

Fixed window size K

Add next element and remove first element
