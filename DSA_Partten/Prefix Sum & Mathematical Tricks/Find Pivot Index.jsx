Got it! The “Find Pivot Index” problem is a neat prefix-sum / cumulative sum problem. Let’s go step by step.

1️⃣ Problem Statement

Given an array nums, find an index i such that:

sum of nums[0..i-1]=sum of nums[i+1..n-1]



Return the leftmost pivot index if multiple exist.

Return -1 if no pivot exists.

Example:

nums = [1, 7, 3, 6, 5, 6]
Output: 3


Explanation:

Left sum: 1 + 7 + 3 = 11

Right sum: 5 + 6 = 11

Index 3 → pivot





2️⃣ Naive Approach (Brute Force)

For each index, calculate left sum and right sum → O(n²)

❌ Too slow for large arrays

3️⃣ Optimal Approach (Single Pass)

Idea:

Keep track of total sum of the array.

Maintain left sum as you iterate.

For index i:


right sum=total sum−left sum−nums[i]

If left sum === right sum, pivot found.

Step-by-Step Example

Array: [1, 7, 3, 6, 5, 6]

totalSum = 1+7+3+6+5+6 = 28

leftSum = 0 initially




| i | nums[i] | leftSum | totalSum - leftSum - nums[i] | Pivot? |
| - | ------- | ------- | ---------------------------- | ------ |
| 0 | 1       | 0       | 28-0-1=27                    | ❌      |
| 1 | 7       | 1       | 28-1-7=20                    | ❌      |
| 2 | 3       | 8       | 28-8-3=17                    | ❌      |
| 3 | 6       | 11      | 28-11-6=11                   | ✅      |



Pivot index = 3

4️⃣ Code (JavaScript)
function pivotIndex(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i; // pivot found
        }
        leftSum += nums[i];
    }

    return -1; // no pivot
}

// Example usage
const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums)); // 3

5️⃣ Complexity Analysis

Time: O(n) → single pass

Space: O(1) → only leftSum and totalSum

✅ Very efficient, commonly asked in interviews.

💡 Key Intuition:

totalSum minus current element minus leftSum gives rightSum in O(1).

No need for nested loops.