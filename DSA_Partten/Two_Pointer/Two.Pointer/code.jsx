🔥 1. Two Pointer (Base Start)
💡 Idea

Use two indices (start & end) to process array from both sides or same direction.

✅ Your code (fixed)
let data = [10, 20, 30, 40]
let start = 0
let end = data.length - 1

while (start < end) {
    console.log(data[start], data[end])
    start++
    end--
}

🧠 Intuition

Instead of nested loops (O(n²)), you reduce to O(n)

Move pointers based on condition

📌 When to use

Sorted arrays

Pair sum problems

Reverse array

Remove duplicates