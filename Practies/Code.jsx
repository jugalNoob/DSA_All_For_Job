Perfect — this is 🔥 core DSA building skill.
I’ll give you clean, interview-ready code for all 4:

1️⃣ Subarrays (Continuous)

👉 Generate all subarrays → O(n²)

function generateSubarrays(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let temp = []
        for (let j = i; j < arr.length; j++) {
            temp.push(arr[j])
            result.push([...temp])
        }
    }

    return result
}

console.log(generateSubarrays([1, 3, 2]))


✔ Output:

[ [1], [1,3], [1,3,2], [3], [3,2], [2] ]

2️⃣ Substrings (Same logic, but string)
function generateSubstrings(str) {
    let result = []

    for (let i = 0; i < str.length; i++) {
        let temp = ""
        for (let j = i; j < str.length; j++) {
            temp += str[j]
            result.push(temp)
        }
    }

    return result
}

console.log(generateSubstrings("abc"))


✔ Output:

["a","ab","abc","b","bc","c"]

3️⃣ Subsequences (Recursion)

👉 Take / Not Take pattern → O(2ⁿ)

function generateSubsequences(arr) {
    let result = []

    function helper(index, current) {
        if (index === arr.length) {
            if (current.length > 0) {
                result.push([...current])
            }
            return
        }

        // take
        current.push(arr[index])
        helper(index + 1, current)

        // not take
        current.pop()
        helper(index + 1, current)
    }

    helper(0, [])
    return result
}

console.log(generateSubsequences([1, 3, 2]))


✔ Output:

[ [1,3,2], [1,3], [1,2], [1], [3,2], [3], [2] ]

4️⃣ Subsets (Power Set)

👉 Includes empty set → O(2ⁿ)

✅ Method 1: Recursion
function generateSubsets(arr) {
    let result = []

    function helper(index, current) {
        if (index === arr.length) {
            result.push([...current])
            return
        }

        // take
        current.push(arr[index])
        helper(index + 1, current)

        // not take
        current.pop()
        helper(index + 1, current)
    }

    helper(0, [])
    return result
}

console.log(generateSubsets([1, 3, 2]))


✔ Output:

[ [1,3,2], [1,3], [1,2], [1], [3,2], [3], [2], [] ]

⚡ Method 2: Bitmask (INTERVIEW GOLD 🔥)
function subsetsBitmask(arr) {
    let result = []
    let n = arr.length

    for (let mask = 0; mask < (1 << n); mask++) {
        let temp = []

        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                temp.push(arr[i])
            }
        }

        result.push(temp)
    }

    return result
}

console.log(subsetsBitmask([1, 3, 2]))

🧠 Pattern Summary
Type	Technique	Time
Subarray	Nested loop	O(n²)
Substring	Nested loop	O(n²)
Subsequence	Recursion	O(2ⁿ)
Subset	Recursion / Bitmask	O(2ⁿ)
🔥 Interview Insight

👉 If interviewer asks:

"All continuous" → Subarray

"All combinations" → Subset

"Order matters" → Subsequence

"String version" → Substring

🚀 Next Level (Highly Recommended)

I can now give:
👉 Top 10 FAANG questions from these 4 types
👉 Step-by-step solving approach

Just say: "FAANG practice" 💯