🎯 When To Use What?

🔹 Use Subarray when:

Maximum subarray sum

Sliding window

Contiguous range problems

🔹 Use Subsequence when:

Longest Increasing Subsequence

Target sum

String pattern matching

DP problems

🔹 Use Subset when:

Combination problems

Knapsack

Partition equal subset sum

Backtracking problems


Gemini explained it correctly 👍
Let me make it more clear + deeper (interview level understanding) for you.

We’ll use:

const data = [9, 2, 1];

🔵 1️⃣ Subarray (Contiguous)
🔹 Meaning

A subarray must be continuous.

Valid:

[9]
[9,2]
[9,2,1]
[2]
[2,1]
[1]


Invalid:

[9,1] ❌ (not continuous)

🔹 Why Double Loop?

Because:

First loop → starting index

Second loop → ending index

Take everything between them

for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
        let subarray = data.slice(i, j + 1);
        console.log(subarray);
    }
}

🧠 Why complexity = O(n²)?

Because:

Start index choices = n
End index choices ≈ n
Total ≈ n²

🔴 2️⃣ Subsequence (Not necessarily contiguous)
🔹 Meaning

You can skip elements, but order must remain same.

Valid:

[9]
[2]
[1]
[9,2]
[9,1]
[2,1]
[9,2,1]
[]


Invalid:

[1,9] ❌ (order changed)

🔹 Why 2^n ?

For each element:

Take OR Skip


So:

2 × 2 × 2 = 2³ = 8

🔹 Bitmask Explanation (Very Important)
data = [9,2,1]
index     0 1 2


Binary from 0 to 7:


| Binary | Meaning    | Result  |
| ------ | ---------- | ------- |
| 000    | skip all   | []      |
| 001    | take 1     | [9]     |
| 010    | take 2     | [2]     |
| 011    | take 9 & 2 | [9,2]   |
| 100    | take 1     | [1]     |
| 101    | take 9 & 1 | [9,1]   |
| 110    | take 2 & 1 | [2,1]   |
| 111    | take all   | [9,2,1] |



🟢 3️⃣ Subset

In coding interviews:

👉 Subset = Subsequence (same generation method)

Difference is only in thinking context.


| Subsequence                  | Subset                            |
| ---------------------------- | --------------------------------- |
| Order matters                | Order doesn't matter              |
| Mostly array/string problems | Mostly set / combination problems |


Example:

[9,1]


Subsequence → valid (order preserved)

Subset → also valid (order doesn't matter anyway)

🔥 Important Interview Insight

| Concept     | Must be Continuous? | Total Count | Complexity |
| ----------- | ------------------- | ----------- | ---------- |
| Subarray    | ✅ Yes               | n(n+1)/2    | O(n²)      |
| Subsequence | ❌ No                | 2^n         | O(2^n)     |
| Subset      | ❌ No                | 2^n         | O(2^n)     |



🎯 When To Use What?
🔹 Use Subarray when:

Maximum subarray sum

Sliding window

Contiguous range problems

🔹 Use Subsequence when:

Longest Increasing Subsequence

Target sum

String pattern matching

DP problems

🔹 Use Subset when:

Combination problems

Knapsack

Partition equal subset sum

Backtracking problems

🧠 Very Important Interview Trick

If question says:

Contiguous
Continuous
Window
Range


👉 Think SUBARRAY

If question says:

Pick elements
Choose some elements
Combination
Include/Exclude


👉 Think SUBSET / SUBSEQUENCE

If you want next level 🔥
I can explain:

Why subarray count = n(n+1)/2 proof

Why subset count = 2^n proof

Convert subset recursion → DP

Most asked interview problems from each