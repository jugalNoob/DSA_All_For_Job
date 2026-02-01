5️⃣ Remove a specific element
let nums = [3,2,2,3]
let val = 3
let slow = 0

for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
        nums[slow++] = nums[fast]
    }
}

console.log(nums.slice(0, slow)) // [2,2]