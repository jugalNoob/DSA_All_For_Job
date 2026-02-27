Classic 🔥 let’s do Fibonacci with recursion, clean and interview-ready.

1️⃣ Basic recursive Fibonacci (most asked)
function fib(n) {
  if (n <= 1) return n;   // base case

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));

Output
8


Sequence:

0 1 1 2 3 5 8

2️⃣ Print Fibonacci series using recursion
function fibSeries(n, a = 0, b = 1) {
  if (n === 0) return;

  console.log(a);
  fibSeries(n - 1, b, a + b);
}

fibSeries(7);

Output
0
1
1
2
3
5
8

3️⃣ ⚠️ Problem with basic recursion (INTERVIEW TRAP)

Time Complexity:

O(2^n)  ❌ very slow


Because:

Same values are recalculated again and again

Exponential call tree

4️⃣ Optimized recursive Fibonacci (Memoization 💡)
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;

  if (memo[n]) return memo[n];

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

console.log(fibMemo(40));

Time Complexity
O(n) ✅

5️⃣ Tail Recursive Fibonacci (clean & fast)
function fibTail(n, a = 0, b = 1) {
  if (n === 0) return a;

  return fibTail(n - 1, b, a + b);
}

console.log(fibTail(7));

🎯 Interview one-liner (gold)

“Naive recursive Fibonacci is exponential. Using memoization or tail recursion reduces it to linear time.”