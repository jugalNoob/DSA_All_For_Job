| #  | Problem                                           | Technique / Type              | Example                                 | Notes / Use Case                               |
| -- | ------------------------------------------------- | ----------------------------- | --------------------------------------- | ---------------------------------------------- |
| 1  | **Two Sum (sorted array)**                        | Two-pointer                   | `[1,2,3,4,6], target=6 → [1,5]`         | Find pair sum = target. Sorted array required. |
| 2  | **Two Sum (unsorted array)**                      | Hash Map                      | `[2,7,11,15], target=9 → [0,1]`         | Alternative O(n) approach without sorting.     |
| 3  | **Pair with maximum sum ≤ target**                | Two-pointer                   | `[1,2,3,4], target=6 → [2,4]`           | Maximize sum without exceeding target.         |
| 4  | **Two numbers with difference = k**               | Two-pointer                   | `[1,3,5,7], k=2 → [1,3],[3,5],[5,7]`    | Find all pairs with difference k.              |
| 5  | **Two numbers with product = target**             | Two-pointer                   | `[1,2,3,4], target=8 → [2,4]`           | Works if array sorted & positive.              |
| 6  | **Container With Most Water**                     | Two-pointer                   | `[1,8,6,2,5,4,8,3,7] → max area = 49`   | LeetCode classic. Left/right pointer scan.     |
| 7  | **Remove Duplicates from Sorted Array**           | Two-pointer                   | `[0,0,1,1,1,2] → [0,1,2]`               | One pointer scans, one pointer writes unique.  |
| 8  | **Move Zeroes**                                   | Two-pointer                   | `[0,1,0,3,12] → [1,3,12,0,0]`           | Swap non-zero with first zero.                 |
| 9  | **Trapping Rain Water**                           | Two-pointer                   | `[0,1,0,2,1,0,1,3,2,1,2,1] → 6`         | Left/right max scan with two pointers.         |
| 10 | **Reverse Array / String in-place**               | Two-pointer                   | `[1,2,3,4] → [4,3,2,1]`                 | Swap elements at left/right.                   |
| 11 | **Palindrome Check**                              | Two-pointer                   | `"racecar" → true`                      | Check symmetry from both ends.                 |
| 12 | **Dutch National Flag (0,1,2 sort)**              | Three-pointer variant         | `[2,0,2,1,1,0] → [0,0,1,1,2,2]`         | Extended two-pointer logic.                    |
| 13 | **Subarray with sum = target (positive numbers)** | Sliding window (two pointers) | `[1,2,3,7,5], target=12 → [2,3,7]`      | Only works for positives.                      |
| 14 | **Squares of a sorted array**                     | Two-pointer                   | `[-4,-1,0,3,10] → [0,1,9,16,100]`       | Compare left/right squares and fill from end.  |
| 15 | **Pairs with sum closest to target**              | Two-pointer                   | `[1,3,4,7,10], target=15 → [4,10]`      | Variant of Two Sum for closest sum.            |
| 16 | **Remove Element**                                | Two-pointer                   | `[3,2,2,3], val=3 → [2,2]`              | Overwrite unwanted elements.                   |
| 17 | **Merge Two Sorted Arrays in-place**              | Two-pointer                   | `[1,3,5], [2,4,6] → [1,2,3,4,5,6]`      | Standard merging in merge sort.                |
| 18 | **Max consecutive ones after flipping**           | Sliding window                | `[1,0,1,1,0], k=1 → max=4`              | Sliding window two-pointer variant.            |
| 19 | **Minimize absolute difference between pairs**    | Two-pointer                   | `[1,3,5], [2,4,6] → min diff=1`         | Match elements in two sorted arrays.           |
| 20 | **Longest subarray with sum ≤ K**                 | Sliding window                | `[1,2,3,4,5], K=8 → length=3 ([1,2,3])` | Two-pointer sliding window.                    |
