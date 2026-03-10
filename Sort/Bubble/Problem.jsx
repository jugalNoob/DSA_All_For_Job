data.length - 1 - i is used to avoid unnecessary comparisons in Bubble Sort.

Let’s break it step by step simply.

1️⃣ Example Array
[30, 20, 10]


Length:

data.length = 3


Indexes:

0   1   2
30  20  10

2️⃣ Why -1 ?

We compare:

data[j]  with  data[j+1]


If j becomes the last index, j+1 will go out of range.

Example:

j = 2
data[2] vs data[3] ❌ (error)


So we stop at:

length - 1

3 - 1 = 2


So the last comparison index becomes 1.

3️⃣ Why - i ?

After every pass, the largest element moves to the end.

Example:

Start
30 20 10

Pass 1
20 10 30


Now 30 is already in correct position.

So we don't need to check it again.

That’s why we subtract i.

4️⃣ Full Logic

Inner loop:

for (let j = 0; j < data.length - 1 - i; j++)


Meaning:

Total length
- last index safety
- already sorted elements

5️⃣ Step-by-Step Example

Array:

[30, 20, 10]

Pass 1 (i = 0)
j < 3 - 1 - 0
j < 2


Comparisons:

30 vs 20
30 vs 10


Result:

20 10 30

Pass 2 (i = 1)
j < 3 - 1 - 1
j < 1


Comparisons:

20 vs 10


Result:

10 20 30

Pass 3 (i = 2)
j < 3 - 1 - 2
j < 0


No comparisons needed.

6️⃣ Visual Summary
Pass 1 → compare 2 times
Pass 2 → compare 1 time
Pass 3 → compare 0 times


So comparisons reduce like this:

n-1
n-2
n-3
...

7️⃣ Why This Is Important

Without -i, the algorithm would keep checking already sorted elements, making it slower.

So this optimization reduces extra work.

✅ Final meaning:

data.length - 1 - i


means

array length
- avoid out-of-bound comparison
- ignore already sorted elements
