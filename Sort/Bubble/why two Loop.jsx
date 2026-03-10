Good question 👍
Bubble Sort needs two loops because it must:

1️⃣ Repeat passes over the array
2️⃣ Compare adjacent elements inside each pass

Let’s understand simply.

1️⃣ Example Array
[30, 20, 10]


We want:

[10, 20, 30]

2️⃣ Outer Loop (Number of Passes)
for (let i = 0; i < data.length; i++)


This loop says:

Repeat the sorting process multiple times


Because after one pass, the array is not fully sorted yet.

Example:

First Pass
30 20 10


Becomes:

20 10 30


Only largest element (30) is in correct position.

We still need another pass.

3️⃣ Inner Loop (Comparisons)
for (let j = 0; j < data.length - 1 - i; j++)


This loop compares adjacent elements.

Example comparisons:

30 > 20
20 > 10


And swaps them if needed.

4️⃣ How Both Loops Work Together

Think like this:

Outer loop → number of rounds
Inner loop → comparisons inside each round

5️⃣ Visual Example

Array:

30 20 10

Pass 1 (outer loop)

Inner loop compares:

30 vs 20 → swap
30 vs 10 → swap


Result:

20 10 30

Pass 2 (outer loop)

Inner loop compares:

20 vs 10 → swap


Result:

10 20 30

Pass 3

Already sorted.

6️⃣ Why One Loop Is Not Enough

If we only use one loop, we would only compare once:

30 20 10


After one pass:

20 10 30


Still not sorted.

So we need another pass.

7️⃣ Simple Analogy

Think of sorting people by height.

First round:

Tallest moves to the end


Second round:

Second tallest moves to correct place


So we need multiple rounds (outer loop) and comparisons inside each round (inner loop).

8️⃣ Simple Rule
Outer loop → how many times sorting happens
Inner loop → how comparisons happen


✅ That is why two loops are required in Bubble Sort.


Outer loop → how many times sorting happens
Inner loop → how comparisons happen
