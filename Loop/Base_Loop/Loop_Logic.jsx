🔑 One-line rule to remember (very important for DSA)

Outer loop runs once → inner loop runs fully → then outer loop increments

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(j);
  }
}
🔁 How nested loops actually work
Outer loop (i) controls rows

Inner loop (j) controls columns

For each value of i, the inner loop starts again from j = 1

🧠 Execution Breakdown (Dry Run)
✅ First iteration
pgsql
Copy code
i = 1
j starts from 1
j <= i → 1 <= 1 ✅
console.log(1)
j++ → j = 2
j <= i → 2 <= 1 ❌ → exit inner loop
Output

Copy code
1
✅ Second iteration
csharp
Copy code
i = 2
j starts again from 1
Inner loop:

ini
Copy code
j = 1 → 1 <= 2 ✅ → print 1
j = 2 → 2 <= 2 ✅ → print 2
j = 3 → 3 <= 2 ❌ → exit
Output

Copy code
1
2
✅ Third iteration
ini
Copy code
i = 3
j = 1 → print 1
j = 2 → print 2
j = 3 → print 3
j = 4 ❌ stop
Output

Copy code
1
2
3
✅ Fourth iteration
ini
Copy code
i = 4 → prints 1 2 3 4
✅ Fifth iteration
ini
Copy code
i = 5 → prints 1 2 3 4 5
📤 Final Output (exact order)
Copy code
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
(Console prints line by line)

