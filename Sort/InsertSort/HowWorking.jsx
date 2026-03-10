Your code is Insertion Sort.
Idea is similar to sorting playing cards in your hand 🃏.

You take one element and insert it in the correct place in the sorted part.

Let's go step-by-step.

1️⃣ Initial Array
[9, 2, 1]


Indexes:

0   1   2
9   2   1


Insertion sort assumes:

First element is already sorted


So:

Sorted part: [9]
Unsorted part: [2,1]


Loop starts from:

for (let i = 1; i < data.length; i++)

2️⃣ First Pass (i = 1)
current = data[i]
current = 2

j = i - 1
j = 0


Array:

[9, 2, 1]


Check condition:

while (j >= 0 && current < data[j])

2 < 9  ✅


So shift element:

data[j + 1] = data[j]


Meaning:

data[1] = 9


Array becomes:

[9, 9, 1]


Decrease j:

j--
j = -1


Loop stops.

Now insert current value:

data[j + 1] = current

data[0] = 2


Array becomes:

[2, 9, 1]

3️⃣ Second Pass (i = 2)
current = data[2]
current = 1

j = 1


Array:

[2, 9, 1]


Check:

1 < 9  ✅


Shift:

data[2] = 9


Array:

[2, 9, 9]


Decrease j:

j = 0


Check again:

1 < 2  ✅


Shift:

data[1] = 2


Array:

[2, 2, 9]


Decrease j:

j = -1


Loop stops.

Insert value:

data[0] = 1


Array becomes:

[1, 2, 9]

4️⃣ Final Sorted Array
[1, 2, 9]

5️⃣ Visual Explanation

Start:

9 | 2 1


Insert 2

2 9 | 1


Insert 1

1 2 9


Left side is always sorted part.

6️⃣ Key Idea
Take element
Shift bigger elements right
Insert element at correct position

7️⃣ Time Complexity
Case	Time
Best	O(n)
Average	O(n²)
Worst	O(n²)

Best case example:

[1,2,3,4]


No shifting needed.

8️⃣ Why Insertion Sort Is Useful

Used when:

Small dataset
Nearly sorted arrays


Examples:

• Database sorting small lists
• Online sorting (new data inserted)

✅ Your Insertion Sort implementation is correct.

If you're preparing for DSA interviews, the next two most important sorts are:

Merge Sort (O(n log n))
Quick Sort (O(n log n))