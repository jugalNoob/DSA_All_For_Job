🧠 1. Basic Recursive Printing (Forward Traversal)

👉 Print elements of an array from start → end using recursion.

function printForward(data, i = 0) {
  if (i >= data.length) return; // base condition
  console.log(data[i]);
  printForward(data, i + 1);    // move to next index
}

printForward([10, 20, 30, 40]);
// Output: 10 20 30 40

📝 Key Points:

Base condition: i >= length → stop.

Recursion after printing → forward direction.

Time Complexity: O(n)

Space Complexity: O(n) call stack



🔁 2. Basic Reverse Printing (Backward Traversal)

👉 Print elements from end → start using recursion.

function printReverse(data, i = 0) {
  if (i >= data.length) return;

  printReverse(data, i + 1);   // go to end first
  console.log(data[i]);       // print on return
}

printReverse([10, 20, 30, 40]);
// Output: 40 30 20 10


📝 Key Insight:

Swap print position before/after recursion to change direction.




📝 4. Reverse String Recursively
function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // "olleh"


👉 Classic recursion interview problem.




⚡ 5. Recursive Reverse Return New Array (Not in-place)
function reverseReturn(data) {
  if (data.length === 0) return [];
  return [data[data.length - 1]].concat(reverseReturn(data.slice(0, -1)));
}

console.log(reverseReturn([1, 2, 3, 4]));
// Output: [4, 3, 2, 1]



🧪 6. Reverse Using Single Index

👉 Start from last index, push values.

function reverseIndex(data, i = data.length - 1) {
  if (i < 0) return;
  console.log(data[i]);
  reverseIndex(data, i - 1);
}

reverseIndex([10, 20, 30, 40]);
// 40 30 20 10


🚀 7. Common Reverse Recursion Interview Questions 


🎯 Summary Table

| Method          | Technique      | Mutates Original | Complexity            |
| --------------- | -------------- | ---------------- | --------------------- |
| `printForward`  | i → end        | ❌                | O(n)                  |
| `printReverse`  | end → i        | ❌                | O(n)                  |
| `reverseArray`  | start/end swap | ✅                | O(n)                  |
| `reverseString` | slice & concat | ❌                | O(n²) (string concat) |
| `reverseReturn` | new array      | ❌                | O(n²) (concat)        |
| `reverseIndex`  | index--        | ❌                | O(n)                  |


| Question                                            | What they’re testing                  |
| --------------------------------------------------- | ------------------------------------- |
| “Reverse an array using recursion (no loops)”       | Pointer logic & base condition        |
| “Print array elements in reverse order recursively” | Stack return phase understanding      |
| “Reverse a string recursively”                      | String slicing + recursion            |
| “Reverse array without modifying original”          | Pure recursion + immutability         |
| “Reverse using one parameter (like index)”          | Index-based recursion control         |
| “Reverse linked list recursively” *(advanced)*      | Understanding recursion beyond arrays |




⚡ Bonus Follow-Up Questions (Interviewers Like to Ask)

🧐 “Can you do it iteratively now?” (to test loop conversion)

🚀 “What’s the time & space complexity?”

📝 “What happens if the array is empty or has 1 element?”

🧠 “Can you reverse a linked list using recursion?” (advanced)





👉 Great to show interviewer you know both in-place and new array approaches.


unction recvie(data, x = 0) {
    if (x >= data.length) return;

    console.log(data[x]);

    recvie(data, x + 1);
}

let data = [10, 20, 30, 40];
recvie(data);



function recvie(x) {
    if (x > 3) return x;

    console.log(x);

    recvie(x + 1);
}

recvie(0);



Step-by-step dry run

Call 1 → x = 0

Check if (0 > 3) → false

console.log(0) → prints 0

Call again with x = 1

Call 2 → x = 1

Check if (1 > 3) → false

console.log(1) → prints 1

Call again with x = 2

Call 3 → x = 2

Check if (2 > 3) → false

console.log(2) → prints 2

Call again with x = 3

Call 4 → x = 3

Check if (3 > 3) → false

console.log(3) → prints 3

Call again with x = 4

Call 5 → x = 4

Check if (4 > 3) → true ✅

Returns 4 → recursion stops.

🔑 Why does the loop run?

Because the condition is x > 3, not x >= 3.

At x = 0, 1, 2, 3 → x > 3 is false, so recursion continues.

At x = 4 → x > 3 is true, so recursion stops.