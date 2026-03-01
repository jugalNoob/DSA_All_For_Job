Perfect 🔥
Now let’s build your Time Complexity Formula Cheat Sheet — interview ready.

This will help you quickly calculate complexity during coding rounds.

📌 1️⃣ Loop Based Formulas
✅ 1. Single Loop
for (let i = 0; i < n; i++) {}


Iterations = n
Time = O(n)

✅ 2. Two Separate Loops
for (let i = 0; i < n; i++) {}
for (let j = 0; j < n; j++) {}


Total = n + n = 2n
Drop constant → O(n)

Formula:

T(n) = n + n = 2n → O(n)

✅ 3. Nested Loop
for (let i = 0; i < n; i++)
   for (let j = 0; j < n; j++) {}


Iterations:

n × n = n²


Time = O(n²)

Formula:

T(n) = n * n = n²

✅ 4. Triangular Loop
for (let i = 0; i < n; i++)
   for (let j = 0; j < i; j++) {}


Iterations:

1 + 2 + 3 + ... + (n-1)


Formula:

n(n-1)/2 ≈ n²/2


Drop constant → O(n²)

✅ 5. Logarithmic Loop
for (let i = 1; i < n; i *= 2) {}


Values:

1, 2, 4, 8, 16 ...


We solve:

2^k = n
k = log₂ n


Time = O(log n)

✅ 6. Decreasing by Half
while (n > 1) {
   n = n / 2;
}


Formula:

n / 2^k = 1
2^k = n
k = log n


Time = O(log n)

📌 2️⃣ Common Mathematical Series
1. Sum of First n Numbers
1 + 2 + 3 + ... + n
= n(n+1)/2
≈ n²/2
= O(n²)

2. Geometric Series
1 + 2 + 4 + 8 + ... + n


Formula:

2^(k+1) - 1


If last term ≈ n

Total ≈ 2n
= O(n)

Important:
Even though values double → still linear sum.

📌 3️⃣ Recursion Formulas (Master This 🔥)
✅ 1. Linear Recursion
T(n) = T(n-1) + 1


Solving:

T(n) = n


Time = O(n)

Example: factorial

✅ 2. Binary Recursion
T(n) = 2T(n-1)


Solving:

T(n) = 2^n


Time = O(2ⁿ)

Example: naive Fibonacci

✅ 3. Divide & Conquer
T(n) = T(n/2) + 1


Solve:

n → n/2 → n/4 → n/8 ...


Steps = log n
Time = O(log n)

Example: Binary Search

✅ 4. Merge Sort Formula
T(n) = 2T(n/2) + n


Using Master Theorem:

a = 2
b = 2
f(n) = n

n^log_b(a) = n^log₂(2) = n


Case 2 → O(n log n)

📌 4️⃣ Master Theorem (Very Important)

General form:

T(n) = aT(n/b) + f(n)


Where:

a = number of subproblems

n/b = size of each

f(n) = extra work

Compare:

n^log_b(a)

Case 1

If f(n) smaller →
Result = n^log_b(a)

Case 2

If equal →
Result = n^log_b(a) log n

Case 3

If bigger →
Result = f(n)

📌 5️⃣ Common Pattern Table