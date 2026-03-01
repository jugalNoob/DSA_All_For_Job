🔍 Detailed Explanation of Each
1️⃣ Single Loop → O(n)
for (let i = 0; i < n; i++) {
   console.log(i);
}


Runs exactly n times.

2️⃣ Full Nested Loop → O(n²)
for (let i = 0; i < n; i++) {
   for (let j = 0; j < n; j++) {
      console.log(i, j);
   }
}


Inner loop runs n times for each outer loop.

Total = n × n

3️⃣ Triangular Nested Loop → O(n²)
for (let i = 0; i < n; i++) {
   for (let j = 0; j < i; j++) {
      console.log(i, j);
   }
}


Runs:

1 + 2 + 3 + ... + n
= n(n+1)/2
≈ n²/2


Still O(n²)

4️⃣ Doubling Loop → O(log n)
for (let i = 1; i < n; i *= 2) {
   console.log(i);
}


Values:

1, 2, 4, 8, 16...


How many times until n?

Answer: log₂(n)

5️⃣ Halving Loop → O(log n)
for (let i = n; i > 0; i /= 2) {
   console.log(i);
}


Values:

n, n/2, n/4, n/8...


Also log₂(n) steps.

6️⃣ Loop Until n/2 → O(n)
for (let i = 0; i < n/2; i++) {
}


n/2 steps
Constants ignored → O(n)

7️⃣ Two Separate Loops → O(n)
for (let i = 0; i < n; i++) {}
for (let i = 0; i < n; i++) {}


Total:

n + n = 2n


Drop constant → O(n)

8️⃣ While Halving → O(log n)
while (n > 0) {
   n = Math.floor(n / 2);
}


Each step halves the problem.

🔁 Recursion Patterns
9️⃣ Linear Recursion → O(n)
T(n) = T(n-1) + O(1)


Example:

function f(n) {
   if (n === 0) return;
   f(n - 1);
}


Called n times.

🔟 Divide & Conquer → O(n log n)
T(n) = 2T(n/2) + O(n)


Example:

Merge Sort

Binary Tree traversal

Why n log n?

Because:

log n levels

Each level does O(n) work

1️⃣1️⃣ Fibonacci Type → O(2ⁿ)
T(n) = T(n-1) + T(n-2)


Example:

function fib(n) {
   if (n <= 1) return n;
   return fib(n-1) + fib(n-2);
}


Expands like binary tree.

Very expensive.

🧠 Interview Shortcut Guide