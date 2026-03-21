Great — now this is advanced level 🔥
👉 Majority Element > n/3 (harder version of Boyer-Moore)

🧠 PROBLEM

👉 Find all elements that appear more than ⌊n/3⌋ times

⚠️ IMPORTANT FACT

👉 There can be at most 2 elements
(not 3 ❌)

👉 Why?
If 3 elements each appear > n/3 → total > n ❌ impossible

🎯 IDEA (EXTENSION OF BOYER-MOORE)

👉 Instead of 1 candidate → keep 2 candidates

🔥 ALGORITHM

We track:

candidate1, count1
candidate2, count2

🚀 CODE
function majorityElementNby3(nums) {
    let candidate1 = null, candidate2 = null;
    let count1 = 0, count2 = 0;

    // Step 1: Find candidates
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Step 2: Verify
    count1 = 0;
    count2 = 0;

    for (let num of nums) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    let result = [];
    if (count1 > nums.length / 3) result.push(candidate1);
    if (count2 > nums.length / 3) result.push(candidate2);

    return result;
}

🧪 DRY RUN (IMPORTANT 🔥)
Input:
[1, 2, 3, 1, 2, 1, 2, 1]

Step-by-step (simplified)



| num | c1 | count1 | c2 | count2 |
| --- | -- | ------ | -- | ------ |
| 1   | 1  | 1      | -  | 0      |
| 2   | 1  | 1      | 2  | 1      |
| 3   | 1  | 0      | 2  | 0      |
| 1   | 1  | 1      | 2  | 0      |
| 2   | 1  | 1      | 2  | 1      |
| 1   | 1  | 2      | 2  | 1      |
| 2   | 1  | 2      | 2  | 2      |
| 1   | 1  | 3      | 2  | 2      |


Final candidates:
1 and 2

Verify:
1 → 4 times ✅ (> n/3)
2 → 3 times ✅ (> n/3)

🧠 INTUITION

👉 Same idea as before:

Match → increase

Mismatch → cancel

👉 But now:

We allow 2 survivors

⚠️ IMPORTANT RULES
1️⃣ Why 2 candidates?
n/3 → max 2 elements

2️⃣ Why verify again?

👉 Because candidates may not actually satisfy condition

🧠 PATTERN TYPE

👉 ✅ Greedy + Boyer-Moore Extension

⚡ COMPLEXITY


| Type  | Value |
| ----- | ----- |
| Time  | O(n)  |
| Space | O(1)  |



🎯 INTERVIEW GOLD LINE

This is an extension of the Boyer-Moore Voting Algorithm where we track two candidates because at most two elements can appear more than n/3 times. We then verify the candidates in a second pass.

🧠 MEMORY TRICK
n/2 → 1 candidate
n/3 → 2 candidates
n/k → k-1 candidates

💬 Want next level?
