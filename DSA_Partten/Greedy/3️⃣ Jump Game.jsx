3️⃣ Jump Game

Problem:
Check if you can reach the last index.

Example

nums = [2,3,1,1,4]
Output = true

Code
function canJump(nums){

    let maxReach=0

    for(let i=0;i<nums.length;i++){

        if(i>maxReach) return false

        maxReach=Math.max(maxReach , i+nums[i])
    }

    return true
}