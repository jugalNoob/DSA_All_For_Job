1️⃣ Start–End Pattern

Pointers:

left = 0, right = n-1

Move logic:

Compare/compute values at both ends

Move one or both pointers inward based on condition

Used in:

Container With Most Water → move pointer with smaller height

Reverse Array → swap arr[left] and arr[right]

Palindrome Check → compare str[left] and str[right]

Key: Always start from both ends and meet in the middle.



2️⃣ Fast–Slow (Two Pointers)

Pointers:

slow → last valid element or processed index

fast → scanning or exploring pointer

Move logic:

fast always moves

slow moves only if condition is satisfied

Used in:

Move Zeroes

Remove Duplicates from Sorted Array

Remove Element in-place

Key: Start at same end (usually left) and slow pointer lags behind fast pointer.





3️⃣ Sliding Window (Variable Window)

Pointers:

left → window start

right → window end

Move logic:

Expand right to include new elements

Move left to shrink window when condition violated

Used in:

Longest substring without repeating characters

Maximum sum subarray of size k

Longest subarray with sum ≤ target

Key: Window size changes dynamically, pointers may not meet.






4️⃣ Fixed + Two (Three / Four Pointer Extension)

Pointers:

Fix 1 or 2 pointers, then use start–end two-pointer scan on remaining array

Move logic:

Fix first pointer(s), then move left/right to find combination

Used in:

3Sum, 3Sum Closest → fix first, left/right scan

4Sum → fix two, left/right scan

Key: Combines Start–End logic but after fixing one or more elements.

Visual Summary


| Pattern        | Left Pointer | Right Pointer | Move Logic                                  | Example Problems                                     |
| -------------- | ------------ | ------------- | ------------------------------------------- | ---------------------------------------------------- |
| Start–End      | 0            | n-1           | Inward toward each other                    | Container With Most Water, Reverse Array, Palindrome |
| Fast–Slow      | Slow=0       | Fast=0 → n-1  | Slow moves conditionally, Fast always moves | Move Zeroes, Remove Duplicates                       |
| Sliding Window | Left=0       | Right=0 → n-1 | Expand/contract window dynamically          | Max sum subarray, Longest substring                  |
| Fixed + Two    | Fixed=0..n   | Left, Right   | Scan remaining array                        | 3Sum, 4Sum                                           |
