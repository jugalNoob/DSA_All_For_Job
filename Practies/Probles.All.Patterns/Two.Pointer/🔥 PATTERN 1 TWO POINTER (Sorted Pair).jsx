🔥 PATTERN 1: TWO POINTER (Sorted Pair)
🧠 Intuition:

“I can control sum by moving left/right”

Example:
[1, 2, 3, 4, 6], target = 6


Start:

L → 1         6 ← R
sum = 7 (too big) → move R


Next:

L → 1     4 ← R
sum = 5 (too small) → move L


Next:

L → 2     4 ← R
sum = 6 ✅ FOUND

💡 Brain Rule:

Sum small → move left++

Sum big → move right--

👉 You are shrinking search space smartly



🔥 1. TWO POINTER (Sorted Pair / Opposite Direction)
🟢 Easy

Two Sum II (sorted)

Remove Duplicates from Sorted Array

Valid Palindrome

👉 Focus:

Left/right movement logic

When to move which pointer

🟡 Medium

Container With Most Water

3Sum

Sort Colors (Dutch Flag)

👉 Focus:

Multiple pointers

Avoid duplicates (important in 3Sum)

🔴 FAANG Level

Trapping Rain Water

4Sum

Minimum Window Substring (hybrid)

👉 Focus:

Pattern mixing

Deep pointer intuition

