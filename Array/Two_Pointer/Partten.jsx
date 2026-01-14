➡ Two Pointer Interview Question Set (Top 25)


🔥 TWO POINTER TECHNIQUE (0 → Advanced)
✅ What is Two Pointer?

Two pointers use two indices to scan a data structure (mostly arrays/strings) efficiently instead of nested loops.

👉 Reduces O(n²) → O(n) in many problems.

🧠 When to Use Two Pointer?

Array / String

Sorted or can be sorted

Pair / triplet / range

Reverse / palindrome

Merge / compare

Sliding window variant

📌 BASIC LEVEL
1️⃣ Reverse an Array / String

Pattern: Start–End

Logic

One pointer at start

One pointer at end

Swap → move inward

Code
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

2️⃣ Palindrome Check

Pattern: Start–End

Code
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

3️⃣ Remove Duplicates (Sorted Array)

Pattern: Slow–Fast

Code
function removeDuplicates(nums) {
  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}

📌 INTERMEDIATE LEVEL
4️⃣ Two Sum (Sorted Array)

Pattern: Start–End

Code
function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return null;
}

5️⃣ Move Zeroes

Pattern: Fast–Slow

Code
function moveZeroes(nums) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
  return nums;
}

6️⃣ Valid Anagram

Pattern: Two pointers + sorting

Code
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  s = s.split('').sort();
  t = t.split('').sort();

  let i = 0, j = 0;
  while (i < s.length) {
    if (s[i] !== t[j]) return false;
    i++;
    j++;
  }
  return true;
}

📌 ADVANCED LEVEL
7️⃣ 3 Sum

Pattern: Fix one + two pointer

Code
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (nums[left] === nums[left - 1]) left++;
        while (nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
}

8️⃣ Container With Most Water

Pattern: Greedy Two Pointer

Code
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
}

9️⃣ Trapping Rain Water

Pattern: Two pointer with max tracking

Code
function trap(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right--;
    }
  }
  return water;
}

📌 COMBINATION PATTERNS




| Pattern      | Used In                    |
| ------------ | -------------------------- |
| Start–End    | Palindrome, Reverse, Water |
| Fast–Slow    | Duplicates, Zeroes         |
| Fixed + Two  | 3Sum, 4Sum                 |
| Greedy Move  | Max Area                   |
| Window + Two | Subarray problems          |



🧠 INTERVIEW TIPS

✅ Always ask: Is array sorted?
✅ Draw pointers before coding
✅ Explain pointer movement reason
✅ Mention time complexity O(n)

🎯 FINAL SUMMARY

✔ Two pointer reduces complexity
✔ Used in 80% array/string problems
✔ Master 5 patterns → solve 30+ problems
✔ Essential for FAANG & product companies