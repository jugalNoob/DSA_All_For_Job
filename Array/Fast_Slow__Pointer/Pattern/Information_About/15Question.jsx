Let’s go 🔥
Here are 15 interview-ready questions ONLY on the Fast & Slow pointer pattern, ordered easy → hard, with what the interviewer is testing so you know why this pattern fits.

🟢 EASY (Foundation)
1️⃣ Find the middle of a linked list / array

Why Fast–Slow?
Fast moves 2×, slow moves 1× → when fast ends, slow is middle.

Tests:

Pointer speed logic

Boundary handling (even/odd length)

2️⃣ Detect a cycle in a linked list

Why Fast–Slow?
If there’s a loop, fast will eventually catch slow.

Tests:

Floyd’s Cycle Detection

Infinite loop prevention

3️⃣ Find the length of a cycle

Follow-up of Q2
Once slow === fast, keep moving one pointer to count cycle length.

Tests:

Loop traversal logic

4️⃣ Check if a linked list is a palindrome

Why Fast–Slow?
Fast finds middle → reverse second half → compare.

Tests:

Middle detection

In-place reversal

5️⃣ Remove duplicates from a sorted array (in-place)

Why Fast–Slow?
Slow tracks unique position, fast scans array.

Tests:

In-place modification

Sorted-array assumption

🟡 MEDIUM (Real Interview Zone)
6️⃣ Find the duplicate number in an array (1…n)

Classic LeetCode #287

Array behaves like a linked list
Duplicate = cycle


Why Fast–Slow?
No extra space allowed.

Tests:

Mathematical insight

Floyd algorithm adaptation

7️⃣ Find the starting point of a cycle

After detecting a cycle, reset one pointer to start.

Tests:

Cycle math

Pointer synchronization

8️⃣ Find the happy number

Why Fast–Slow?
Repeated sum-of-squares → either reaches 1 or cycles.

Tests:

Cycle detection in numbers

9️⃣ Remove duplicates but allow at most twice
[1,1,1,2,2,3] → [1,1,2,2,3]


Why Fast–Slow?
Slow controls valid write position.

Tests:

Constraint-based filtering

Index logic

🔟 Find the middle of a stream (linked list version)

Data arrives one by one.

Why Fast–Slow?
No array length available.

Tests:

Streaming logic

Pointer stability

🔴 HARD (Senior / FAANG)
1️⃣1️⃣ Reorder linked list
1 → 2 → 3 → 4 → 5
↓
1 → 5 → 2 → 4 → 3


Fast–Slow usage:

Find middle

Reverse second half

Merge alternately

Tests:

Multi-step pointer reasoning

1️⃣2️⃣ Circular array loop detection

Positive & negative jumps.

Why Fast–Slow?
Detect loop without visited array.

Tests:

Edge cases

Direction consistency

1️⃣3️⃣ Check if a number is circular happy

Generalization of happy number.

Tests:

Pattern abstraction

Cycle detection mindset

1️⃣4️⃣ Split a linked list into two halves

Used in merge sort for linked lists.

Why Fast–Slow?
Efficient mid detection.

Tests:

Divide-and-conquer thinking

1️⃣5️⃣ Find the k-th node from the end

Variant of Fast–Slow

fast moves k steps
slow follows


Tests:

Offset logic

Boundary safety


| Problem Clue               | Think Fast–Slow |
| -------------------------- | --------------- |
| middle                     | ✅               |
| cycle / loop               | ✅               |
| duplicate (no extra space) | ✅               |
| palindrome                 | ✅               |
| in-place array             | ✅               |
| sorted data                | ✅               |
| linked list                | ✅               |
