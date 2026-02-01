🔵 TYPE 3: RATIO-BASED (Middle / Split)
🔸 Example: Find middle of array

👉 Your third example

let arr = [10, 20, 30, 40]

let slow = 0
let fast = 0

while (fast < arr.length && fast + 1 < arr.length) {
    slow++
    fast += 2
}

console.log(arr[slow]) // 30

🧠 Why this works

Fast moves twice

When fast ends → slow at middle

📌 Used for

Find middle

Split array/list

Palindrome checking