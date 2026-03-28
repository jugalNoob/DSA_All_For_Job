function jump(nums) {
    let jumps = 0;
    let maxReach = 0;
    let edge = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);

        if (i == edge) {
            jumps++;
            edge = maxReach;
        }
    }

    return jumps;
}

// Example
console.log(jump([2,3,1,1,4])); // 2
