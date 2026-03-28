Ah! The Squares of a Sorted Array problem is a classic example where two-pointer technique shines on a sorted array. Let’s go step by step.

1️⃣ Problem Statement

Given a sorted array nums (ascending), return a new array containing the squares of each number, also sorted in ascending order.

Example:

nums = [-4, -1, 0, 3, 10]
Output: [0, 1, 9, 16, 100]

2️⃣ Why a Naive Approach Works but Is Suboptimal

Naive Solution: Square each number and then sort.

function sortedSquares(nums) {
    return nums.map(x => x * x).sort((a, b) => a - b);
}


Time Complexity: O(n log n) due to sorting

Space Complexity: O(n)

✅ Works but not optimal — we can do better with O(n) using two pointers.

3️⃣ Optimal Approach (Two-Pointer)

Idea:

The array is sorted, so the largest squares will come from the ends (most negative or most positive).

Use two pointers:

left = 0, right = nums.length - 1

Compare |nums[left]| and |nums[right]|, put the larger square at the end of the result array.

Move pointers inward.

Step-by-Step Example

Array: [-4, -1, 0, 3, 10]


| left | right | Compare         | Place square at result index | Move pointer |
| ---- | ----- | --------------- | ---------------------------- | ------------ |
| -4   | 10    | 16 vs 100 → 100 | res[4] = 100                 | right-- → 3  |
| -4   | 3     | 16 vs 9 → 16    | res[3] = 16                  | left++ → 1   |
| -1   | 3     | 1 vs 9 → 9      | res[2] = 9                   | right-- → 2  |
| -1   | 0     | 1 vs 0 → 1      | res[1] = 1                   | left++ → 2   |
| 0    | 0     | 0 vs 0 → 0      | res[0] = 0                   | done         |


Result: [0, 1, 9, 16, 100]

4️⃣ Code (JavaScript)
function sortedSquares(nums) {
    const n = nums.length;
    const res = new Array(n);
    let left = 0, right = n - 1;
    let pos = n - 1; // fill from end

    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            res[pos] = nums[left] * nums[left];
            left++;
        } else {
            res[pos] = nums[right] * nums[right];
            right--;
        }
        pos--;
    }

    return res;
}

// Example usage
const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums)); // [0, 1, 9, 16, 100]

5️⃣ Complexity Analysis

Time: O(n) → Single pass through array

Space: O(n) → Result array

✅ Much better than naive O(n log n) approach.

💡 Key Intuition:

Because the array is sorted, the largest square comes from the ends.

Filling the result array from the back avoids extra sorting.