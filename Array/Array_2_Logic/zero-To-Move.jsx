

let data = [0, 4, 5, 9];
let index = 0; // pointer for next non-zero position

for (let i = 0; i < data.length; i++) {
  if (data[i] !== 0) {
    // 🔄 swap non-zero element with 'index' position
    let temp = data[i];
    data[i] = data[index];
    data[index] = temp;
    index++;
  }
}

console.log(data); // [4, 5, 9, 0]



let data = [0, 4, 5, 9];

for (let i = 0; i < data.length - 1; i++) {
  let temp = data[i];
  data[i] = data[i + 1];
  data[i + 1] = temp;
}

console.log(data); // [4, 5, 9, 0]



You're running Selection Sort.
Let me explain your exact code step-by-step using your array:

let data = [50, 40, 30, 20]

🔍 Understanding the variables

i → selects the current position where the smallest number should go

mind → (short for "minimum index") keeps track of the smallest value found in the remaining array

j → scans the rest of the array to find the smallest value

After j-loop ends → you swap data[i] ↔ data[mind]

This is exactly how Selection Sort works.

✅ Step-by-step dry run
Initial Array
[50, 40, 30, 20]

⭐ i = 0

mind = 0 → data[mind] = 50

Now j loop runs:

j = 1

compare 50 > 40 → YES
→ mind = 1

j = 2

compare 40 > 30 → YES
→ mind = 2

j = 3

compare 30 > 20 → YES
→ mind = 3

👉 Smallest value found = 20 at index 3

Swap:
swap data[0] and data[3]


Array becomes:

[20, 40, 30, 50]

⭐ i = 1

mind = 1 → data[mind] = 40

j = 2

40 > 30 → YES
→ mind = 2

j = 3

30 > 50 → NO
→ mind stays 2

Swap:
swap data[1] and data[2]


Array becomes:

[20, 30, 40, 50]

⭐ i = 2

mind = 2 → value = 40

j = 3

40 > 50 → NO

mind stays same → points to 40

Swap:

Numbers are same position, so no effect.

Array remains:

[20, 30, 40, 50]

⭐ i = 3

Last element left → already sorted → loop ends.

🎉 FINAL OUTPUT
[20, 30, 40, 50]

🧠 What is Selection Sort doing?

It selects the smallest value in the unsorted part of the array

Then puts it in the current correct position

Repeats for all indices

👍 Want a visual animation explanation or want me to rewrite this code in simpler form?
You said:
let data = [0, 4, 5, 9];

for (let i = 0; i < data.length - 1; i++) {
  let temp = data[i];
  data[i] = data[i + 1];
  data[i + 1] = temp;
}

console.log(data); // [4, 5, 9, 0]
ChatGPT said:

Here is the step-by-step explanation of how your code works.

✅ Your Code
let data = [0, 4, 5, 9];

for (let i = 0; i < data.length - 1; i++) {
  let temp = data[i];
  data[i] = data[i + 1];
  data[i + 1] = temp;
}

console.log(data); // [4, 5, 9, 0]

🔍 What this code does

This code swaps each element with the next element one-by-one.

Basically:

swap index 0 ↔ index 1

swap index 1 ↔ index 2

swap index 2 ↔ index 3

This causes the entire array to “shift left” and the first element moves to the last position.

🧠 Step-by-step dry run
Initial:
[0, 4, 5, 9]

👉 i = 0

Swap data[0] and data[1]

[4, 0, 5, 9]

👉 i = 1

Swap data[1] and data[2]

[4, 5, 0, 9]

👉 i = 2

Swap data[2] and data[3]

[4, 5, 9, 0]

🎉 Final Output
[4, 5, 9, 0]

📌 Meaning

Your loop performs adjacent swaps — result is like a left rotation by one step.

🎯 If you want an actual left rotate by 1, better code is:
let data = [0, 4, 5, 9];

let first = data.shift(); 
data.push(first);

console.log(data); // [4, 5, 9, 0]





// // let data = [0, 4, 5, 9];
// // let index = 0;

// // // Move non-zero elements to front

// // debugger;

for (let i = 0; i < data.length; i++) {
  if (data[i] !== 0) {
    data[index] = data[i];
    index++;
  }
}

// // // Fill remaining positions with zero
// // while (index < data.length) {
// //   data[index] = 0;
// //   index++;
// // }

// // console.log(data); // [4, 5, 9, 0]



| Step | i | data[i] | index | Array State  | Action                     |
| ---- | - | ------- | ----- | ------------ | -------------------------- |
| 1    | 0 | 0       | 0     | [0, 4, 5, 9] | skip (it’s 0)              |
| 2    | 1 | 4       | 0     | [4, 4, 5, 9] | move 4 to index 0, index=1 |
| 3    | 2 | 5       | 1     | [4, 5, 5, 9] | move 5 to index 1, index=2 |
| 4    | 3 | 9       | 2     | [4, 5, 9, 9] | move 9 to index 2, index=3 |
