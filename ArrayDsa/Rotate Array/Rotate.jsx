1️⃣ Problem: Rotate Array

Definition: Shift array elements to the left (or right) by a given number of steps.

Input: [1, 2, 3, 4, 5], steps = 3

Output (Left Rotation): [4, 5, 1, 2, 3]
(In your code, you rotate left using arr.push(arr.shift()))

2️⃣ Your Implementation (Step-by-Step)
function rotateArray(arr, steps) {
   for (let i = 0; i < steps; i++) {
       arr.push(arr.shift()); // remove first element, add it to end
   }
   return arr;
}

let array = [1, 2, 3, 4, 5];
let steps = 3;
console.log(rotateArray(array, steps)); // [4,5,1,2,3]


How it works:

arr.shift() removes the first element (1) and returns it.

arr.push() adds that element to the end.

Repeat for the number of steps (3 times).

3️⃣ Visual Example
Step	Array after shift & push
0	[1, 2, 3, 4, 5]
1	[2, 3, 4, 5, 1]
2	[3, 4, 5, 1, 2]
3	[4, 5, 1, 2, 3]
4️⃣ Optimized Approach (Without Looping steps Times)

Idea: Use slicing → O(n) time, O(n) space.

function rotateArrayOptimized(arr, steps) {
    steps = steps % arr.length; // handle steps > length
    return arr.slice(steps).concat(arr.slice(0, steps));
}

console.log(rotateArrayOptimized([1,2,3,4,5], 3)); // [4,5,1,2,3]

5️⃣ Reverse Method (In-Place, O(1) Extra Space)

Algorithm:

Reverse first steps elements.

Reverse remaining elements.

Reverse entire array.

function rotateArrayInPlace(arr, steps) {
    const n = arr.length;
    steps = steps % n;

    function reverse(start, end) {
        while(start < end){
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++; end--;
        }
    }

    reverse(0, steps-1);
    reverse(steps, n-1);
    reverse(0, n-1);

    return arr;
}

console.log(rotateArrayInPlace([1,2,3,4,5], 3)); // [4,5,1,2,3]


Time Complexity: O(n)

Space Complexity: O(1)

6️⃣ Interview Variants

Right rotation instead of left.

Rotate by steps larger than array length → use modulo.

Rotate without extra space → reverse method.

Rotate linked list → similar concept but with pointers.

✅ Tips for Interviews:

Always clarify left vs right rotation.

Handle steps > array length with modulo.

Know 3 methods: loop shift, slicing, reverse.

Trace small examples step by step on a whiteboard.


function rotateArray(arr, steps) {
   for (let i = 0; i < steps; i++) {
       arr.push(arr.shift());
   }
   return arr;
}

let array = [1, 2, 3, 4, 5];
let steps = 3;
console.log(rotateArray(array, steps)); // Output: [3, 4, 5, 1, 2]



Walkthrough for [1, 2, 3, 4, 5] with steps = 3
Iteration 1 (i = 0)

arr.shift() removes 1 → arr becomes [2, 3, 4, 5]




arr.push(1) → arr becomes [2, 3, 4, 5, 1]

Iteration 2 (i = 1)

arr.shift() removes 2 → arr becomes [3, 4, 5, 1]

arr.push(2) → arr becomes [3, 4, 5, 1, 2]

Iteration 3 (i = 2)

arr.shift() removes 3 → arr becomes [4, 5, 1, 2]

arr.push(3) → arr becomes [4, 5, 1, 2, 3]

✅ Final Output
[4, 5, 1, 2, 3]




let array = [1, 2, 3, 4, 5];
let steps = 3;

for (let i = 0; i < steps; i++) {
   let shifted = array.shift();   // remove first element
   array.push(shifted);           // add it to the end
   console.log(`Step ${i+1}: shifted = ${shifted}, array = [${array}]`);
}



array = [1, 2, 3, 4, 5]
Step 1 (i = 0):

shifted = 1

array = [2, 3, 4, 5, 1]

Step 2 (i = 1):

shifted = 2

array = [3, 4, 5, 1, 2]

Step 3 (i = 2):

shifted = 3

array = [4, 5, 1, 2, 3]




let array = [1, 2, 3, 4, 5];
let steps = 3;
let n = array.length; // n = 5



Loop explanation
🔹 Outer loop (runs steps times)
for (let i = 0; i < steps; i++) { ... }


This will do 3 rotations, one at a time.


🔹 Step-by-step rotation logic

Inside each outer loop:

Store first element

let first = array[0];


Saves the first element before it gets overwritten.

Example (Step 1): first = 1.




Shift elements left

for (let j = 0; j < n - 1; j++) {
    array[j] = array[j + 1];
}


This moves every element one step left.



let data = [1, 2, 3, 4, 5];
let step = 3;

function rotationArray(arr, step){

    let n = arr.length;

    for(let i = 0; i < step; i++){

        let first = arr[0];

        for(let j = 0; j < n - 1; j++){
            arr[j] = arr[j + 1];
        }

        arr[n - 1] = first;
    }

    return arr;
}

console.log(rotationArray(data, step));


:::::::::: --------->>> Important ::::::::::::_____??>??



Step 1: First rotation (i = 0)

1️⃣ Store the first element:

first = array[0] = 1


2️⃣ Shift elements left:



| j | Operation                 | Array after step |
| - | ------------------------- | ---------------- |
| 0 | array\[0] = array\[1] → 2 | \[2, 2, 3, 4, 5] |
| 1 | array\[1] = array\[2] → 3 | \[2, 3, 3, 4, 5] |
| 2 | array\[2] = array\[3] → 4 | \[2, 3, 4, 4, 5] |
| 3 | array\[3] = array\[4] → 5 | \[2, 3, 4, 5, 5] |


⚠ Notice: the last element is temporarily duplicated (5).

3️⃣ Put the stored first element at the end:

array[n-1] = first → array[4] = 1


✅ Array after 1st rotation: [2, 3, 4, 5, 1]



Step 2: Second rotation (i = 1)

1️⃣ Store first element:

first = array[0] = 2



| j | Operation | Array after step |
| - | --------- | ---------------- |
| 0 | 3         | \[3, 3, 4, 5, 1] |
| 1 | 4         | \[3, 4, 4, 5, 1] |
| 2 | 5         | \[3, 4, 5, 5, 1] |
| 3 | 1         | \[3, 4, 5, 1, 1] |



3️⃣ Put first at end:

array[4] = 2


✅ Array after 2nd rotation: [3, 4, 5, 1, 2]


Step 3: Third rotation (i = 2)

1️⃣ Store first element:

first = array[0] = 3

| j | Operation | Array after step |
| - | --------- | ---------------- |
| 0 | 4         | \[4, 4, 5, 1, 2] |
| 1 | 5         | \[4, 5, 5, 1, 2] |
| 2 | 1         | \[4, 5, 1, 1, 2] |
| 3 | 2         | \[4, 5, 1, 2, 2] |



3️⃣ Put first at end:

array[4] = 3


✅ Array after 3rd rotation: [4, 5, 1, 2, 3]

Final Array:
[4, 5, 1, 2, 3]
