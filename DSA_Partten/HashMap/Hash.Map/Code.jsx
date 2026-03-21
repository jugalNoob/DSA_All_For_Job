🗺️ 4. Hash Map (Base Start)
💡 Idea

Store values in key → value format for fast lookup.

✅ Code
let arr = [1, 2, 2, 3, 1]

let map = {}

for (let num of arr) {
    map[num] = (map[num] || 0) + 1
}

console.log(map)
// {1: 2, 2: 2, 3: 1}

🧠 Intuition

Replace nested loops with quick lookup

Access in O(1)

📌 When to use

Frequency count

Duplicate detection

Two sum problem