Your code is Selection Sort.
Idea of Selection Sort:

Find the smallest element
Place it at the beginning
Repeat for remaining array


Let’s go step-by-step with your array.

1️⃣ Initial Array
[50, 40, 30, 20]


Indexes:

0   1   2   3
50  40  30  20


Outer loop:

for(let i=0; i<data.length; i++)


This decides where the smallest element should go.

2️⃣ First Pass (i = 0)
mind = i = 0


Smallest value index currently:

mind = 0 → value = 50


Inner loop:

for(let j=i+1; j<data.length; j++)


So:

j = 1 → 3

j = 1

Compare:

data[mind] > data[j]
50 > 40  ✅


Update:

mind = 1


Now smallest = 40

j = 2

Compare:

40 > 30  ✅


Update:

mind = 2


Now smallest = 30

j = 3

Compare:

30 > 20  ✅


Update:

mind = 3


Now smallest = 20

Swap
let temp = data[mind]
data[mind] = data[i]
data[i] = temp


Swap:

20 ↔ 50


Array becomes:

[20, 40, 30, 50]

3️⃣ Second Pass (i = 1)
mind = 1


Current smallest:

40


Inner loop:

j = 2 → 3

j = 2

Compare:

40 > 30 ✅


Update:

mind = 2

j = 3

Compare:

30 > 50 ❌


No change.

Swap

Swap:

30 ↔ 40


Array becomes:

[20, 30, 40, 50]

4️⃣ Third Pass (i = 2)
mind = 2


Check:

j = 3


Compare:

40 > 50 ❌


No swap needed.

Array stays:

[20, 30, 40, 50]

5️⃣ Fourth Pass (i = 3)

Only one element left.

Nothing changes.

6️⃣ Final Sorted Array
[20, 30, 40, 50]

7️⃣ Visual Selection Process
Pass 1 → find smallest → place at index 0
Pass 2 → find smallest → place at index 1
Pass 3 → find smallest → place at index 2


Result:

20 30 40 50

8️⃣ Why It’s Called Selection Sort

Because we select the smallest element each time.

9️⃣ Time Complexity
Case	Time
Best	O(n²)
Average	O(n²)
Worst	O(n²)

Even if array already sorted, it still checks everything.

🔟 Key Difference vs Bubble Sort
Bubble Sort	Selection Sort
Many swaps	Few swaps
Adjacent comparisons	Minimum selection
O(n²)	O(n²)