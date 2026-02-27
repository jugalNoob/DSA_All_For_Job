1️⃣ Subsequence / Sequence Problems

What it solves:

Checking if one sequence is a subsequence of another

Maintaining order without worrying about contiguity

Example problems:

Check if array A is a subsequence of array B

Check if string s1 is a subsequence of string s2

Technique:

One pointer for A, one pointer for B

Move both pointers carefully based on match

Time Complexity: O(n + m)

2️⃣ Pair Sum / Two Sum in Sorted Array

What it solves:

Find a pair (or triplet) in a sorted array that satisfies a condition (sum, difference, product)

Example problems:

Find two numbers with sum = target

Find closest pair with minimum difference

Technique:

Left pointer at start, right pointer at end

Move pointers toward each other depending on condition

Time Complexity: O(n)

3️⃣ Sliding Window / Contiguous Subarray Problems

What it solves:

Problems involving contiguous subarrays or substrings with certain constraints

Example problems:

Maximum sum subarray of size k

Longest substring without repeating characters

Smallest subarray with sum ≥ target

Technique:

Two pointers represent window start and end

Move end to expand window, start to shrink window

Time Complexity: O(n)

4️⃣ Merge / Combine Sorted Subsequences

What it solves:

Merging two sorted arrays or sequences efficiently

Example problems:

Merge two sorted arrays

Merge two sorted linked lists

Technique:

One pointer for each array

Compare current elements, push the smaller, advance that pointer

Time Complexity: O(n + m)

5️⃣ Partition / Conditional Movement Problems

What it solves:

Separate array elements into groups

Maintain order of elements relative to a condition

Example problems:

Dutch National Flag problem

Move all zeros to end of array

Technique:

Left pointer for one group, right pointer for another

Swap elements based on condition

Time Complexity: O(n)

6️⃣ Reversal / Palindrome Problems

What it solves:

Compare elements from both ends simultaneously

Example problems:

Check if array or string is a palindrome

Reverse an array in place

Technique:

One pointer at start, one at end

Move toward the center

Time Complexity: O(n)



| Problem Type         | Example                     | Pointer Strategy   | Time Complexity |
| -------------------- | --------------------------- | ------------------ | --------------- |
| Subsequence Check    | `A` in `B`                  | i → A, j → B       | O(n + m)        |
| Pair / Two Sum       | sum = target                | left, right        | O(n)            |
| Sliding Window       | max sum / longest substring | start, end         | O(n)            |
| Merge Sorted Arrays  | merge two arrays            | i → arr1, j → arr2 | O(n+m)          |
| Partition / Grouping | move zeros, Dutch flag      | left, right        | O(n)            |
| Palindrome / Reverse | check palindrome            | start, end         | O(n)            |



💡 Key Insight:

Two-pointer problems are all about “linear traversal with coordination”.

Often used with sorted arrays, contiguous windows, or sequence checks.

Reduces nested loops (O(n²)) → linear time (O(n)).