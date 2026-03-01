Perfect 🔥
Now let’s master Space Complexity Patterns (very important for interviews, especially backend + system design roles like you’re targeting).

📌 What Is Space Complexity?

Space complexity = extra memory used by algorithm
(Not counting input unless interviewer says so.)

It includes:

Variables

Data structures (array, map, stack)

Recursion call stack

Temporary storage

📊 Space Complexity Patterns Table


| # | Pattern                       | Example          | Space Complexity | Why                     |
| - | ----------------------------- | ---------------- | ---------------- | ----------------------- |
| 1 | Constant variables            | `let a,b,c`      | **O(1)**         | Fixed memory            |
| 2 | New array of size n           | `new Array(n)`   | **O(n)**         | Proportional to input   |
| 3 | 2D matrix n×n                 | `new Array(n*n)` | **O(n²)**        | n × n storage           |
| 4 | HashMap / Set storing n items | `map.set()`      | **O(n)**         | Stores all elements     |
| 5 | Recursion depth n             | `T(n)=T(n-1)`    | **O(n)**         | Call stack              |
| 6 | Divide & conquer recursion    | `T(n)=2T(n/2)`   | **O(log n)**     | Tree height             |
| 7 | Backtracking storing paths    | Permutations     | **O(n!)**        | Stores all combinations |
| 8 | Dynamic Programming table     | `dp[n][n]`       | **O(n²)**        | DP matrix               |



| Space    | Meaning          |
| -------- | ---------------- |
| O(1)     | Constant         |
| O(log n) | Recursive divide |
| O(n)     | Array/Map        |
| O(n²)    | Matrix           |
| O(2ⁿ)    | Subset storage   |
| O(n!)    | Permutations     |


🧠 Interview Shortcut

If you see:

New array of size n → O(n)

Map storing all elements → O(n)

2D DP table → O(n²)

Recursion depth n → O(n)

