| # | Question                                                        | Type        | Key Point                 |
| - | --------------------------------------------------------------- | ----------- | ------------------------- |
| 1 | Write a program to find the **sum of all elements** in an array | Easy        | For loop or reduce        |
| 2 | Find **maximum subarray sum**                                   | Medium–Hard | Kadane’s Algorithm        |
| 3 | What is the **time complexity** of summing array elements?      | Theory      | O(n)                      |
| 4 | How to sum array elements **without using loops**?              | Trick       | Use recursion or reduce   |
| 5 | Can you sum elements of a **nested array**?                     | Advanced    | Flatten + sum / recursion |
| 6 | How to find **prefix sums** efficiently?                        | Concept     | Useful for range queries  |




:::::::::::::::::::Sum of array elemnt ||||||||||||||||||||||||||||| 


🟢 1. Using reduce() → Simple Sum of All Elements
let one = [10, 20, 30, -10];

let two = one.reduce((alm, elem) => {
  return alm + elem;
}, 2);

console.log(two);

📝 Q: What is happening here?

.reduce() takes a callback and an initial value (2 in this case).

The callback runs through each element, adding it to the accumulator.

Step by step:

Initial accumulator = 2
2 + 10 = 12
12 + 20 = 32
32 + 30 = 62
62 + (-10) = 52


✅ Output: 52

👉 This is a clean, functional programming approach.
⏱ Time: O(n)
💾 Space: O(1)

👉 Interview Tip:
They may ask:

“How does .reduce() work internally?”

“What happens if the initial value is not provided?”

