Problem: Trapping Rain Water

Given:

An array height representing elevation map.

Each element is the height of a bar.

Water is trapped between bars. Find total water trapped.

Example:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Pattern: Two-Pointer with Max Tracking

Pointers:

left = 0 → start of array

right = n-1 → end of array

Variables:

leftMax → max height to the left of left pointer

rightMax → max height to the right of right pointer

Logic:

Compare height[left] and height[right].

Move the pointer pointing to smaller height.

Update leftMax / rightMax.

Water trapped = max(leftMax - height[left], 0) (or right).

Why it works:

Water trapped is limited by the smaller of the two sides.

JavaScript Code
function trap(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      // left pointer is smaller
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left++;
    } else {
      // right pointer is smaller
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right--;
    }
  }

  return water;
}

// ✅ Example usage
const heights = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(heights)); // 6

Step-by-Step Explanation


| Step  | Left | Right | Height Left/Right | LeftMax | RightMax | Water Added | Total Water |
| ----- | ---- | ----- | ----------------- | ------- | -------- | ----------- | ----------- |
| 1     | 0    | 11    | 0 / 1             | 0       | 1        | 0           | 0           |
| 2     | 1    | 11    | 1 / 1             | 1       | 1        | 0           | 0           |
| 3     | 2    | 11    | 0 / 1             | 1       | 1        | 1           | 1           |
| 4     | 3    | 11    | 2 / 1             | 2       | 1        | 0           | 1           |
| ...   | ...  | ...   | ...               | ...     | ...      | ...         | ...         |
| Final |      |       |                   |         |          |             | 6           |



