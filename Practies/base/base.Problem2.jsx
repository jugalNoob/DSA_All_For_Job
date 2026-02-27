| #  | Topic            | Problem                          | Type                   | Time Complexity | Example Input / Output                  |
| -- | ---------------- | -------------------------------- | ---------------------- | --------------- | --------------------------------------- |
| 1  | Array            | Find maximum element             | Traversal              | O(n)            | `[3,1,7,5] → 7`                         |
| 2  | Array            | Find minimum element             | Traversal              | O(n)            | `[3,1,7,5] → 1`                         |
| 3  | Array            | Sum of all elements              | Traversal              | O(n)            | `[1,2,3,4] → 10`                        |
| 4  | Array            | Reverse array                    | Two-pointer            | O(n)            | `[1,2,3] → [3,2,1]`                     |
| 5  | Array            | Find missing number 1..n         | Math                   | O(n)            | `[1,2,4] → 3`                           |
| 6  | Array            | Move zeros to end                | Two-pointer            | O(n)            | `[0,1,0,3] → [1,3,0,0]`                 |
| 7  | Array            | Rotate array by k positions      | Reversal               | O(n)            | `[1,2,3,4,5], k=2 → [4,5,1,2,3]`        |
| 8  | Array            | Find pair with sum k             | Hash Map / Brute-force | O(n)/O(n²)      | `[1,3,4,2], k=6 → (4,2)`                |
| 9  | Array            | Count duplicates                 | Hash Map               | O(n)            | `[1,2,2,3,3,3] → {2:2,3:3}`             |
| 10 | Array            | Maximum consecutive 1s           | Sliding Window         | O(n)            | `[1,1,0,1,1,1] → 3`                     |
| 11 | String           | Check palindrome                 | Two-pointer            | O(n)            | `"racecar" → true`                      |
| 12 | String           | Reverse string                   | Two-pointer            | O(n)            | `"abc" → "cba"`                         |
| 13 | String           | Count vowels/consonants          | Traversal              | O(n)            | `"hello" → vowels:2, consonants:3`      |
| 14 | String           | Check anagram                    | Hash Map               | O(n)            | `"listen","silent" → true`              |
| 15 | String           | First non-repeating char         | Hash Map               | O(n)            | `"swiss" → 'w'`                         |
| 16 | Linked List      | Find length                      | Traversal              | O(n)            | `[1→2→3] → 3`                           |
| 17 | Linked List      | Reverse linked list              | Iterative / Recursive  | O(n)            | `[1→2→3] → [3→2→1]`                     |
| 18 | Linked List      | Detect cycle                     | Floyd’s algorithm      | O(n)            | `[1→2→3→2] → true`                      |
| 19 | Linked List      | Find middle node                 | Slow/Fast pointer      | O(n)            | `[1→2→3→4→5] → 3`                       |
| 20 | Linked List      | Delete a node given pointer      | Pointer manipulation   | O(1)            | Delete node 3 in `[1→2→3→4] → [1→2→4]`  |
| 21 | Stack            | Implement stack                  | Array/LinkedList       | O(1) per op     | Push/Pop/Peek                           |
| 22 | Stack            | Check balanced parentheses       | Stack                  | O(n)            | `"{[()]} → true"`                       |
| 23 | Stack            | Next greater element             | Stack                  | O(n)            | `[4,5,2,25] → [5,25,25,-1]`             |
| 24 | Queue            | Implement queue                  | Array/LinkedList       | O(1)            | Enqueue/Dequeue                         |
| 25 | Queue            | Circular queue                   | Array                  | O(1)            | Fixed-size queue                        |
| 26 | Math             | Check prime                      | Loop up to √n          | O(√n)           | `7 → true, 8 → false`                   |
| 27 | Math             | Factorial                        | Iterative/Recursive    | O(n)            | `5! → 120`                              |
| 28 | Math             | Fibonacci                        | Iterative/Recursive    | O(n)            | `Fib(5) → 5`                            |
| 29 | Math             | GCD (Euclidean)                  | Math                   | O(log n)        | `GCD(12,8) → 4`                         |
| 30 | Math             | LCM                              | Math                   | O(log n)        | `LCM(4,5) → 20`                         |
| 31 | Math             | Power of 2 check                 | Bitwise                | O(1)            | `8 → true, 10 → false`                  |
| 32 | Search           | Linear search                    | Traversal              | O(n)            | `[1,2,3], target=2 → index 1`           |
| 33 | Search           | Binary search                    | Divide & Conquer       | O(log n)        | `[1,3,5,7], target=5 → index 2`         |
| 34 | Sort             | Bubble sort                      | Comparison             | O(n²)           | `[3,2,1] → [1,2,3]`                     |
| 35 | Sort             | Selection sort                   | Comparison             | O(n²)           | `[3,2,1] → [1,2,3]`                     |
| 36 | Sort             | Insertion sort                   | Comparison             | O(n²)           | `[3,2,1] → [1,2,3]`                     |
| 37 | Two Pointer      | Two sum (sorted array)           | Two-pointer            | O(n)            | `[1,2,3,4], target=5 → (1,4)`           |
| 38 | Two Pointer      | Remove duplicates (sorted)       | Two-pointer            | O(n)            | `[1,1,2,2,3] → [1,2,3]`                 |
| 39 | Sliding Window   | Max sum subarray size k          | Sliding Window         | O(n)            | `[1,2,3,4], k=2 → 7`                    |
| 40 | Sliding Window   | Longest substring without repeat | Sliding Window         | O(n)            | `"abcabcbb" → 3`                        |
| 41 | Sliding Window   | Minimum size subarray sum ≥ s    | Sliding Window         | O(n)            | `[2,3,1,2,4,3], s=7 → 2`                |
| 42 | Hashing          | Count frequency of elements      | Hash Map               | O(n)            | `[1,2,2,3] → {1:1,2:2,3:1}`             |
| 43 | Hashing          | Find duplicates                  | Hash Map               | O(n)            | `[1,2,2,3] → [2]`                       |
| 44 | Hashing          | Intersection of two arrays       | Hash Map               | O(n+m)          | `[1,2,2,3],[2,3,4] → [2,3]`             |
| 45 | Recursion        | Sum of n numbers                 | Recursion              | O(n)            | `sum(5) → 15`                           |
| 46 | Recursion        | Reverse string                   | Recursion              | O(n)            | `"abc" → "cba"`                         |
| 47 | Recursion        | Fibonacci                        | Recursion              | O(2^n)          | `Fib(5) → 5`                            |
| 48 | Recursion        | Tower of Hanoi                   | Recursion              | O(2^n)          | Move 3 disks from A→C                   |
| 49 | Bit Manipulation | Count set bits                   | Bitwise                | O(log n)        | `5 (101) → 2`                           |
| 50 | Bit Manipulation | Check power of 2                 | Bitwise                | O(1)            | `8 → true`                              |
| 51 | Bit Manipulation | Swap two numbers                 | Bitwise                | O(1)            | `a=3,b=5 → a=5,b=3`                     |
| 52 | Matrix           | Transpose matrix                 | Matrix ops             | O(n*m)          | `[[1,2],[3,4]] → [[1,3],[2,4]]`         |
| 53 | Matrix           | Spiral traversal                 | Matrix ops             | O(n*m)          | `[[1,2],[3,4]] → [1,2,4,3]`             |
| 54 | Matrix           | Search in sorted matrix          | Binary Search          | O(n+m)          | `matrix=[[1,3],[2,4]], target=3 → true` |
