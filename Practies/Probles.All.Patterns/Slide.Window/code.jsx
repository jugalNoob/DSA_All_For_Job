🪟 3. Sliding Window (Base Start)
💡 Idea

Maintain a window (subarray) and move it instead of recalculating.

✅ Code (fixed size window)
let arr = [1, 2, 3, 4, 5]
let k = 3

let windowSum = 0

// first window
for (let i = 0; i < k; i++) {
    windowSum += arr[i]
}

console.log(windowSum)

// slide window
for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]
    console.log(windowSum)
}

🧠 Intuition

Instead of:

sum each window again → O(n*k)


Do:

add next, remove previous → O(n)

📌 When to use

Subarray with fixed size

Maximum sum subarray

Longest substring problems