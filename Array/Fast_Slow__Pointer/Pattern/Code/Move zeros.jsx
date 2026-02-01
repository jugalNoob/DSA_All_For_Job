🔥 MORE ARRAY PROBLEMS USING FAST & SLOW
4️⃣ Move zeros to end (in-place)
let nums = [0,1,0,3,12]
let slow = 0

for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
        nums[slow] = nums[fast]
        slow++
    }
}

while (slow < nums.length) {
    nums[slow] = 0
    slow++
}

console.log(nums) // [1,3,12,0,0]
