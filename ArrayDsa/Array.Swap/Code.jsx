let arr = [10, 20];

let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

console.log(arr); // [20, 10]



🔹 2️⃣ Swap Using Destructuring (Modern JS)
let arr = [10, 20];

[arr[0], arr[1]] = [arr[1], arr[0]];

console.log(arr); // [20, 10]





🔹 3️⃣ If Question is: "Swap Every Two Adjacent Elements"

Example:

Input:  [10, 20, 30, 40]
Output: [20, 10, 40, 30]

Solution:
function swapPairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return arr;
}

console.log(swapPairs([10, 20, 30, 40]));




🔥 Time & Space Complexity

Time: O(n)

Space: O(1) (in-place swap)

If you're preparing for interviews (like you're doing with DSA topics), this problem tests:

Array manipulation

Index control

In-place operations

Loop increment logic (i += 2)

If you want, I can also show:

XOR swap method

Swap without temp variable

Recursive version

Linked List pair swap (very important interview question)