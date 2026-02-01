🟢 TYPE 1: READ–WRITE (In-place modification)
🔸 Example: Remove duplicates from sorted array

👉 Your example (perfect)

let nums = [1, 1, 2, 2]

let slow = 0

for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
        slow++
        nums[slow] = nums[fast]
    }
}

console.log(nums.slice(0, slow + 1)) // [1,2]

🧠 Why this works

Array is sorted

Duplicates are adjacent

fast scans

slow keeps unique position

📌 Used for

Remove duplicates

Allow at most K duplicates

Filter values in-place



🔥 Variant: Allow at most 2 duplicates
let nums = [1,1,1,2,2,3]
let slow = 2

for (let fast = 2; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 2]) {
        nums[slow] = nums[fast]
        slow++
    }
}

console.log(nums.slice(0, slow)) // [1,1,2,2,3]