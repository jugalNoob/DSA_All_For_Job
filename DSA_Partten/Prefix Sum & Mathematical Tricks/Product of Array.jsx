Ah! “Product of Array Except Self” is a classic prefix-suffix product problem. Let’s break it down clearly.

1️⃣ Problem Statement

Given an array nums of length n, return an array output such that:

𝑜
𝑢
𝑡
𝑝
𝑢
𝑡
[
𝑖
]
=
∏
𝑗
≠
𝑖
𝑛
𝑢
𝑚
𝑠
[
𝑗
]
output[i]=
j

=i
∏
	​

nums[j]

Constraints:

Do not use division.

Achieve O(n) time and O(1) extra space (excluding output array).

Example:

nums = [1, 2, 3, 4]
Output = [24, 12, 8, 6]


Explanation:

index 0 → 2×3×4 = 24

index 1 → 1×3×4 = 12

index 2 → 1×2×4 = 8

index 3 → 1×2×3 = 6

2️⃣ Naive Approach (Not Allowed)

For each index, multiply all other elements → O(n²)

Using total product / nums[i] → uses division (not allowed)

3️⃣ Optimal Approach (Prefix & Suffix Products)

Idea:

Compute prefix products (product of all elements to the left of current index).

Compute suffix products (product of all elements to the right).

Multiply prefix × suffix for each index → result.

Step-by-Step Example

Array: [1, 2, 3, 4]

Prefix products (left → right):




| i | Prefix  |
| - | ------- |
| 0 | 1       |
| 1 | 1       |
| 2 | 1×2=2   |
| 3 | 1×2×3=6 |



Suffix products (right → left):

i| i | Suffix   |
| - | -------- |
| 3 | 1        |
| 2 | 4        |
| 1 | 3×4=12   |
| 0 | 2×3×4=24 |






Multiply prefix × suffix:

output[0] = 1 × 24 = 24

output[1] = 1 × 12 = 12

output[2] = 2 × 4 = 8

output[3] = 6 × 1 = 6

✅ Matches expected output

4️⃣ Code (JavaScript)
function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);

    // Step 1: compute prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        output[i] = prefix;
        prefix *= nums[i];
    }

    // Step 2: compute suffix products and multiply
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= suffix;
        suffix *= nums[i];
    }

    return output;
}

// Example usage
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // [24, 12, 8, 6]

5️⃣ Complexity Analysis

Time: O(n) → two passes

Space: O(1) extra (output array excluded)

✅ Very efficient, commonly asked in interviews.



5️⃣ Complexity Analysis

Time: O(n) → two passes

Space: O(1) extra (output array excluded)

✅ Very efficient, commonly asked in interviews.

💡 Key Intuition:

Think of each position as:


output[i]=(product of all numbers to the left)×(product of all numbers to the right)



No division needed, just prefix & suffix accumulation.