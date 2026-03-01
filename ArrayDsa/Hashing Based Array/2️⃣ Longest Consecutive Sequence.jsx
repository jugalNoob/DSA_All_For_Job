2️⃣ Longest Consecutive Sequence
📌 Problem

Find the length of the longest consecutive elements sequence.

Example:

[100,4,200,1,3,2]


Output:

4   // sequence: 1,2,3,4

❌ Brute Force

Sort array → O(n log n)

Better solution exists.

✅ Optimized Using Hash Set
🧠 Core Idea

Put all numbers in a Set.

Only start counting when number is beginning of sequence:

if (!set.has(num - 1))

💻 Code
function longestConsecutive(nums) {
    const set = new Set(nums);
    let maxLength = 0;

    for (let num of set) {
        if (!set.has(num - 1)) { // start of sequence
            let current = num;
            let length = 1;

            while (set.has(current + 1)) {
                current++;
                length++;
            }

            maxLength = Math.max(maxLength, length);
        }
    }

    return maxLength;
}

console.log(longestConsecutive([100,4,200,1,3,2])); // 4

⏱ Complexity

Time: O(n)
Space: O(n)

Because each number visited once.

🎯 Why This Is Smart?

We only start counting from sequence start → avoids repeated work.

This is a classic FAANG problem.