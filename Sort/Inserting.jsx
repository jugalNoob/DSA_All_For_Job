let data = [9, 6, 5, 1, 2];

console.log("Initial:", data);

for (let i = 1; i < data.length; i++) {
  let current = data[i];
  let j = i - 1;

  console.log(`\nPass ${i} → current = ${current}`);

  while (j >= 0 && data[j] > current) {
    console.log(`  Compare ${data[j]} > ${current} → shift ${data[j]} right`);
    data[j + 1] = data[j];
    console.log("  Array now:", data);
    j--;
  }

  data[j + 1] = current;
  console.log(`  Insert ${current} at index ${j + 1}`);
  console.log("  Result after this pass:", data);
}

console.log("\nSorted:", data);





// 🔹 Why j+1 (not j)?

// Because when the while loop ends, j has gone one step too far left:

// After shifting, j = -1

// But the correct index is 0 → so we use j+1

// If we wrote data[j] = current, that would be data[-1] = 30 ❌ (invalid index).

// 🔹 General rule

// The loop shifts elements rightward until we find a smaller one or j runs out.

// When the loop stops, j is just before the correct spot.

// So the correct place is always at j+1.

// ✅ Think of it like this:

// Shift bigger numbers to the right → creating a "hole".

// That hole ends up at index j+1.

// We fill the hole with current.




Dry Run (Your Example)
Initial
[40, 30, 20]

Pass 1 (i = 1, current = 30, j = 0)

Compare: data[0] = 40 > 30 ✅

Shift 40 to the right:

[40, 40, 20]   // 40 moved to index 1


j becomes -1

👉 Now j = -1, so the correct index is j + 1 = 0
Place current = 30 at index 0:

[30, 40, 20]

Pass 2 (i = 2, current = 20, j = 1)

Compare: data[1] = 40 > 20 ✅

Shift 40 right:

[30, 40, 40]


j = 0

Compare: data[0] = 30 > 20 ✅

Shift 30 right:

[30, 30, 40]


j = -1

👉 Insert current = 20 at j+1 = 0:

[20, 30, 40]

✅ Final Result
Sorted: [20, 30, 40]

Key takeaway

data[j+1] = data[j] → keeps shifting bigger elements right.

When the loop ends, j is one step too far left.

That’s why we insert at j+1, which is the empty slot.

⚡ Quick way to think about it:
👉 “I keep pushing bigger numbers to the right until I find the hole.
The hole ends up at j+1. That’s where I drop current.”




////// --------------->>

Initial Array
[40] [30] [20]

Pass 1 (i = 1, current = 30, j = 0)

👉 Compare 40 > 30 ✅ → shift 40 right.

Step 1 (shift 40 right):
[40] [40] [20]
 ↑
 hole here


Now j = -1 → loop ends.

Hole is at index 0 = j+1

👉 Insert 30 into hole:

[30] [40] [20]

Pass 2 (i = 2, current = 20, j = 1)

👉 Compare 40 > 20 ✅ → shift 40 right.

[30] [40] [40]
          ↑
         hole


👉 j = 0 → compare 30 > 20 ✅ → shift 30 right.

[30] [30] [40]
 ↑
hole


Now j = -1 → loop ends.

Hole is at index 0 = j+1

👉 Insert 20 into hole:

[20] [30] [40]

✅ Final Sorted Array
[20] [30] [40]

🔑 Why j+1?

Because after the last shift:

The hole always ends up to the right of j.

That’s the exact spot for current.

So we do:








Array:
data = [9, 6, 5, 1, 2]

First pass (i = 1)

current = data[1] = 6

j = i - 1 = 0 → index of element before current

Inner while loop
while (j >= 0 && data[j] > current) {
    data[j + 1] = data[j]; // swap left and right
    j--;
}


Check condition: j >= 0 && data[j] > current

j = 0 → 0 >= 0 ✅

data[j] = 9 > current = 6 ✅

Inside loop: shift data[j] right:

data[j + 1] = data[j] // data[1] = data[0] = 9

0 + 1 //index j


Array becomes:

[9, 9, 5, 1, 2]


Decrement j-- → j = -1

Step 2: Insert current
data[j + 1] = current


Now j = -1 → j + 1 = 0

So we do:

data[0] = 6
Array now:

[6, 9, 5, 1, 2]


✅ First pass complete. current (6) is inserted in the correct position.
Pass 1: Insert 11

current = 11, j = 0

Compare data[j] > current → 12 > 11 ✅

Shift 12 to the right → [12, 12, 6, 5]

j-- → j = -1

Insert 11 at j + 1 = 0 → [11, 12, 6, 5]

Visual:

Before shift: 12 11 6 5
Shift right:  12 12 6 5
Insert left:  11 12 6 5

Pass 2: Insert 6

current = 6, j = 1

Compare data[1] > 6 → 12 > 6 ✅ → shift 12 → [11, 12, 12, 5]

Compare data[0] > 6 → 11 > 6 ✅ → shift 11 → [11, 11, 12, 5]

j = -1, insert 6 at 0 → [6, 11, 12, 5]

Visual:

Before shift: 11 12 6 5
Shift right:  11 12 12 5
Shift right:  11 11 12 5
Insert left:  6 11 12 5

Pass 3: Insert 5

current = 5, j = 2

Compare data[2] > 5 → 12 > 5 ✅ → shift 12 → [6, 11, 12, 12]

Compare data[1] > 5 → 11 > 5 ✅ → shift 11 → [6, 11, 11, 12]

Compare data[0] > 5 → 6 > 5 ✅ → shift 6 → [6, 6, 11, 12]

j = -1, insert 5 at 0 → [5, 6, 11, 12]

Visual:

Before shift: 6 11 12 5
Shift right:  6 11 12 12
Shift right:  6 11 11 12
Shift right:  6 6 11 12
Insert left:  5 6 11 12

✅ Summary:

Shift right = moving larger elements rightward to make space.

Insert left = place current into the correct position leftward in the sorted portion.

Effectively, the sorted portion grows left to right, and larger elements move right to make space.

✅ Final Sorted: [5, 6, 11, 12]



Step 1: First Iteration

i = 1 → current = data[1] = 11

j = i - 1 = 0 → data[j] = data[0] = 12

🔹 Code Recap

for (i = 0; i < data.length; i++): iterates through each element.

current = data[i]: pick the element to insert.

j = i - 1: pointer to compare with sorted left part.

while (j >= 0 && data[j] > current): shift elements greater than current.

Finally, put current in the right position.


🔹 Insertion Sort Trace (Array = [9, 6, 5, 1, 2])


| Pass    | Current | Comparisons         | Action                             | Resulting Array   |
| ------- | ------- | ------------------- | ---------------------------------- | ----------------- |
| 1 (i=0) | 9       | None (j = -1)       | Insert `9` at position 0           | `[9, 6, 5, 1, 2]` |
| 2 (i=1) | 6       | 9 > 6               | Shift 9 right, insert 6 at pos 0   | `[6, 9, 5, 1, 2]` |
| 3 (i=2) | 5       | 9 > 5, 6 > 5        | Shift 9, then 6, insert 5 at pos 0 | `[5, 6, 9, 1, 2]` |
| 4 (i=3) | 1       | 9 > 1, 6 > 1, 5 > 1 | Shift 9, 6, 5, insert 1 at pos 0   | `[1, 5, 6, 9, 2]` |
| 5 (i=4) | 2       | 9 > 2, 6 > 2, 5 > 2 | Shift 9, 6, 5, insert 2 at pos 1   | `[1, 2, 5, 6, 9]` |



🔹 Example in your case
Pass 1 (i = 0)
current = 9
j = -1 → no comparison
Insert 9 at position 0
Array: [9, 6, 5, 1, 2]


👉 This kind of step table is very handy in interviews because it clearly shows:

Which element is being considered (current)

What comparisons are made

Where shifting happens

The state of the array after each pass