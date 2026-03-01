🔍 Detailed Explanation
1️⃣ Constant Space → O(1)
function sum(arr) {
   let total = 0;
   for (let i = 0; i < arr.length; i++) {
      total += arr[i];
   }
   return total;
}


Extra space used:

total, i


Constant → O(1)

2️⃣ Linear Space → O(n)
function copyArray(arr) {
   let result = [];
   for (let num of arr) {
      result.push(num);
   }
   return result;
}


New array size n → O(n)

3️⃣ 2D Matrix → O(n²)
let matrix = Array(n).fill().map(() => Array(n).fill(0));


Memory = n × n

4️⃣ HashMap / Set → O(n)

Example:

function twoSum(nums, target) {
   const map = new Map();
}


Worst case:
Stores all n elements.

Space = O(n)

5️⃣ Linear Recursion → O(n)
function f(n) {
   if (n === 0) return;
   f(n - 1);
}


Call stack depth = n

So space = O(n)

Even though no new array!

6️⃣ Divide & Conquer → O(log n)

Example: Binary Search

function binarySearch(arr, left, right) {
   if (left > right) return -1;
   let mid = Math.floor((left + right)/2);
   return binarySearch(arr, left, mid-1);
}


Depth = log n

So space = O(log n)

7️⃣ Backtracking / Permutations → O(n!)
function permutations(nums) {}


Stores all permutations.

Number = n!

Memory huge.

8️⃣ DP Table → O(n²)

Example:

let dp = Array(n).fill().map(() => Array(n).fill(0));


Used in:

Longest Common Subsequence

Matrix problems

🧠 Important Interview Trick

Always clarify:

"Are we counting input array space?"

Usually:
We do NOT count input.

We count:
Extra memory only.

📌 In-Place Algorithms (Very Important)

If algorithm modifies input without extra storage:

Space = O(1)

Example:

function reverse(arr) {
   let left = 0;
   let right = arr.length - 1;
   while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
   }
}


No extra array → O(1)

📊 Recursion Space Pattern Quick Guide
Recursion Type	Space
Linear recursion	O(n)
Binary recursion (balanced)	O(log n)
Fibonacci naive	O(n) stack, but time exponential

Important:
Even if time is O(2ⁿ), stack depth is still O(n).

🚀 Space vs Time Examples
Example 1
for (i=0; i<n; i++)
   for (j=0; j<n; j++)


Time = O(n²)
Space = O(1)

Example 2
let arr = new Array(n*n);


Time = O(1) (creation)
Space = O(n²)

🎯 Backend/System Design Connection

Space complexity matters in:

Caching systems

Memory leaks

Redis storage

Kafka buffer sizes

Rate limiting counters

Memory explosion can crash production.

🔥 Most Common Interview Mistake

People forget recursion stack counts as space.

Example:

Merge Sort:

Time: O(n log n)

Space: O(n)

Because it creates temporary arrays.

📌 Growth Order Summary


| Space    | Meaning          |
| -------- | ---------------- |
| O(1)     | Constant         |
| O(log n) | Recursive divide |
| O(n)     | Array/Map        |
| O(n²)    | Matrix           |
| O(2ⁿ)    | Subset storage   |
| O(n!)    | Permutations     |

