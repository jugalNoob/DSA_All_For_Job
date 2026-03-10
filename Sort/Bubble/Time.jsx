Step-by-step method most people use (very practical way)

Find the most important / repeated operations
Usually: comparisons, assignments, swaps, function calls inside loops
Count how many times those operations happen — in terms of n
(n = size of array, length of list, number of nodes, etc.)
Look only at the fastest growing part when n becomes very large
Ignore:
small constants (like ×2, ×3, ×100)
small added terms (like +5, +n, +1000)

Write it in Big-O notation → O( fastest growing part )

Common patterns – cheat sheet (memorize these)




Good question 👍
Time Complexity means:

How the running time grows when input size (n) increases


We count how many times the main operation runs.

Let's understand each pattern simply.

1️⃣ No Loop → O(1)

Example:

function sum(a,b){
   return a+b
}


Steps:

1 operation


Even if input grows, operations stay the same.

Time Complexity = O(1)


This is called Constant Time.

2️⃣ One Loop → O(n)

Example:

for(let i=0;i<n;i++){
   console.log(i)
}


If:

n = 5 → runs 5 times
n = 100 → runs 100 times


Operations grow linearly.

Time Complexity = O(n)

3️⃣ Two Nested Loops → O(n²)

Example:

for(let i=0;i<n;i++){
   for(let j=0;j<n;j++){
      console.log(i,j)
   }
}


Operations:

n × n


Example:

n = 5

5 × 5 = 25


So:

O(n²)

4️⃣ Three Nested Loops → O(n³)

Example:

for(let i=0;i<n;i++){
  for(let j=0;j<n;j++){
     for(let k=0;k<n;k++){
        console.log(i,j,k)
     }
  }
}


Operations:

n × n × n


Example:

5 × 5 × 5 = 125


So:

O(n³)

5️⃣ Halving Loop → O(log n)

Example (Binary Search idea):

while(n > 1){
   n = n/2
}


Example:

n = 16

16 → 8 → 4 → 2 → 1


Steps:

4 steps


So complexity:

O(log n)


Because the problem size keeps dividing by 2.

6️⃣ Loop + Log Loop → O(n log n)

Example:

for(let i=0;i<n;i++){
   while(m > 1){
       m = m/2
   }
}


Outer loop:

n


Inner loop:

log n


Total:

n × log n


Examples:

Algorithms like:

• Merge Sort
• Quick Sort
• Heap Sort

7️⃣ Exponential Recursion → O(2ⁿ)

Example:

function fib(n){
   if(n<=1) return n
   return fib(n-1) + fib(n-2)
}


Call tree:

fib(4)

      4
    /   \
   3     2
  / \   / \
 2   1 1   0


Calls double each time.

So:

O(2ⁿ)


Very slow.

8️⃣ Quick Trick to Calculate Complexity


| Pattern          | Complexity |
| ---------------- | ---------- |
| Single loop      | O(n)       |
| Nested loop      | O(n²)      |
| Triple loop      | O(n³)      |
| Halving          | O(log n)   |
| Divide problem   | O(n log n) |
| Double recursion | O(2ⁿ)      |


9️⃣ Example Interview Question

Code:

for(let i=0;i<n;i++){
   for(let j=0;j<i;j++){
      console.log(i,j)
   }
}


Runs:

1 + 2 + 3 + ... + n


Formula:

n(n+1)/2


Simplify Big-O:

O(n²)

🔟 Golden Rule (Very Important)

When calculating Big-O:

Ignore:

constants
smaller terms


Example:

O(2n + 5)


Becomes:

O(n)


✅ Interview trick:

Always ask:

How many times does the main operation run?





Real examples with calculation
Example 1 – Bubble sort (like your previous code)
JavaScriptfor(i = 0; i < n; i++) {           // ≈ n times
    for(j = 0; j < n-1-i; j++) {   // ≈ n times each pass
        if(arr[j] > arr[j+1]) swap
    }
}
→ inner loop runs roughly n × n times

→ Time complexity = O(n²)

Example 2 – Optimized bubble with early stop
Same worst case → still O(n²)
But best case (already sorted) → only 1 pass → O(n)
Example 3 – Simple search (find max)

JavaScriptmax = arr[0]

for(i = 1; i < n; i++) {
    if(arr[i] > max) max = arr[i]
}


→ loop runs n-1 times ≈ n times

→ O(n)
Example 4 – Constant time

JavaScriptreturn arr[0] + arr[arr.length-1]

→ always 2 operations → O(1)

Example 5 – Binary search
Each step halves the search space


→ needs ≈ log₂n steps

→ O(log n) (very fast!)

Quick rules to simplify the expression
If you get something like:

3n² + 7n + 42 + 1000/n
→ Keep only the biggest term when n is large
→ 3n² is much bigger than 7n or 42
→ Answer = O(n²)