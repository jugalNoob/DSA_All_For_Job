Classic 🔥 let’s do Fibonacci with recursion, clean and interview-ready.

function fibonacci(n) {
    if (n === 0) return 0      // 0th Fibonacci
    if (n === 1) return 1      // 1st Fibonacci

    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(6))  // Output: 8
🧠 Fibonacci Sequence

Index → Value:

0 → 0
1 → 1
2 → 1
3 → 2
4 → 3
5 → 5
6 → 8


✅ So fibonacci(6) = 8




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
🔥 Optimized Version (DP / Memoization)
function fibonacciMemo(n, memo = {}) {
    if (n === 0) return 0
    if (n === 1) return 1
    if (memo[n]) return memo[n]

    memo[n] = fibonacciMemo(n-1, memo) + fibonacciMemo(n-2, memo)
    return memo[n]
}

console.log(fibonacciMemo(50)) // Fast

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