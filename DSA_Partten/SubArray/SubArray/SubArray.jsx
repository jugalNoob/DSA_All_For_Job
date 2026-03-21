This is a 🔥 top interview trick — if you understand this, you’re ahead of most candidates.

🎯 Problem

Find sum of all subarrays in O(n)

Example:

arr = [1, 2, 3]


Subarrays:

[1] [1,2] [1,2,3] [2] [2,3] [3]


Sum:

1 + 3 + 6 + 2 + 5 + 3 = 20

❌ Brute Force (Don’t do this)

Generate all subarrays → O(n²)

Sum each → O(n³)

🔥 OPTIMIZED IDEA (VERY IMPORTANT)

👉 Instead of thinking:

"Generate subarrays"


Think:

"How many times each element contributes?"

🧠 Key Insight

For index i:

Choices on left = (i + 1)

Choices on right = (n - i)

👉 Total contribution count:


(i+1)(n−i)


⚡ Final Formula

Each element contributes:

arr[i] * (i + 1) * (n - i)

✅ Code (O(n))
function sumOfSubarrays(arr) {
    let n = arr.length
    let total = 0

    for (let i = 0; i < n; i++) {
        total += arr[i] * (i + 1) * (n - i)
    }

    return total
}

console.log(sumOfSubarrays([1, 2, 3])) // 20

🔍 Dry Run

For:

[1, 2, 3]


| i | arr[i] | (i+1) | (n-i) | contribution |
| - | ------ | ----- | ----- | ------------ |
| 0 | 1      | 1     | 3     | 1×1×3 = 3    |
| 1 | 2      | 2     | 2     | 2×2×2 = 8    |
| 2 | 3      | 3     | 1     | 3×3×1 = 9    |

Total:

3 + 8 + 9 = 20 ✅

🧠 Why This Works (Intuition)

Each element appears in multiple subarrays.

Example:

2 appears in:

[2], [1,2], [2,3], [1,2,3]


👉 4 times

So instead of recomputing → multiply directly

🚀 Interview Gold Insight

👉 This trick is used in:

Subarray sum problems

Contribution technique

Advanced DP optimizations

🔥 Pattern Name

👉 Called:

Contribution Technique

💯 Summary

| Step | Idea               |
| ---- | ------------------ |
| 1    | Loop each element  |
| 2    | Count contribution |
| 3    | Multiply & add     |


