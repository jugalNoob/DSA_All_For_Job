🟡 TYPE 2: SPEED DIFFERENCE (Cycle / Middle)
🔸 Example: Floyd Cycle Detection

👉 Your second example

let nums = [2,3,1,2,3]

let slow = 0
let fast = 0

do {
    slow = nums[slow]
    fast = nums[nums[fast]]
} while (slow !== fast)

console.log("cycle detected")

🧠 Why this works

Array behaves like a linked list

Duplicate value → two paths → cycle

Fast eventually catches slow

📌 Used for

Find duplicate number

Detect infinite loops

Happy number

Circular arrays



🔥 Find starting point of cycle (important follow-up)
slow = 0
while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
}

console.log("duplicate =", slow)
