Problem: Remove Duplicates from Sorted Array

Given:

A sorted array nums

Remove duplicates in-place so that each element appears only once

Return new length

Example:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5 (array modified to [0,1,2,3,4,...])

Pattern: Fast–Slow Pointers

Slow pointer: Tracks last unique element

Fast pointer: Scans the array

Logic:

If nums[fast] !== nums[slow] → new unique element

Move slow++ and overwrite nums[slow] = nums[fast]




function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let slow = 0; // Last unique element index

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1; // New length
}

// ✅ Example usage
let arr = [0,0,1,1,1,2,2,3,3,4];
let newLength = removeDuplicates(arr);
console.log(newLength); // 5
console.log(arr.slice(0, newLength)); // [0,1,2,3,4]


| Fast | Slow | nums[fast] | nums[slow] | Action             | Array State     |
| ---- | ---- | ---------- | ---------- | ------------------ | --------------- |
| 1    | 0    | 0          | 0          | skip               | [0,0,1,1,1,...] |
| 2    | 0    | 1          | 0          | slow++ & overwrite | [0,1,1,1,1,...] |
| 3    | 1    | 1          | 1          | skip               | [0,1,1,1,1,...] |
| 4    | 1    | 2          | 1          | slow++ & overwrite | [0,1,2,1,1,...] |
| 5    | 2    | 3          | 2          | slow++ & overwrite | [0,1,2,3,1,...] |
| 6    | 3    | 4          | 3          | slow++ & overwrite | [0,1,2,3,4,...] |



✅ Resulting array (first slow+1 elements): [0,1,2,3,4]

Key Insights

Array must be sorted → duplicates are consecutive.

Time Complexity: O(n) → single pass

Space Complexity: O(1) → in-place

Fast–Slow pattern essence:

fast → scans array

slow → lags behind, marks valid/unique position

💡 Tip for interviews:

Always mention in-place requirement

Explain why slow pointer only moves when a new unique element is found

Mention return value vs modified array