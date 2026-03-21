⚡ 2. Prefix Sum (Base Start)
💡 Idea

Store cumulative sum so you don’t recompute again and again.

📌 Formula
prefix[i]=prefix[i−1]+arr[i]

prefix[i]=prefix[i−1]+arr[i]


✅ Code
let arr = [1, 2, 3, 4]
let prefix = []

prefix[0] = arr[0]

for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i]
}

console.log(prefix) // [1, 3, 6, 10]

🧠 Intuition

Want fast range sum?

Instead of loop every time → precompute once

📌 Example

Sum from index 1 to 3:

sum = prefix[3] - prefix[0]

📌 When to use

Range sum queries

Subarray problems

Optimization from O(n²) → O(n)