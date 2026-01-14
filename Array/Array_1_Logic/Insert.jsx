🔹 What is Array Insert?

In arrays, insert means adding a new element at a specific position (index).

If you insert at the end, it’s like .push().

If you insert at the start, it’s like .unshift().

If you insert at a middle index, you use .splice().


6️⃣ Key Interview Tips
Know manual vs built-in: Understand splice, push, unshift, but also manual shifting.

Edge cases: Empty array, inserting at first or last index, negative index.

Sorted array insertion: Often comes with binary search for the correct index.

Step-by-step tracing: Draw the array and shift elements visually.

Ask about space constraints: Some interviews require in-place insertions.




5️⃣ Interview Question Variants

Here’s a DSA-style cheat sheet for “Array Insert”:

| # | Type                     | Example                                 | Approach                            | Complexity                                |
| - | ------------------------ | --------------------------------------- | ----------------------------------- | ----------------------------------------- |
| 1 | Insert at index          | `[10,20,30]` → insert 25 at index 1     | Shift elements right, assign value  | O(n) time, O(1) space                     |
| 2 | Insert at start          | `[2,3,4]` → insert 1                    | Shift all elements right, assign 1  | O(n), O(1)                                |
| 3 | Insert at end            | `[1,2,3]` → insert 4                    | `array.push(4)`                     | O(1), O(1)                                |
| 4 | Insert multiple elements | `[1,2,3]` → insert `[10,20]` at `[1,3]` | Loop + `splice()`                   | O(n*m), O(1)                              |
| 5 | Sorted insert            | `[10,20,30]` → insert 25 to keep sorted | Binary search to find index + shift | O(n)                                      |
| 6 | Insert in dynamic array  | Large array with many inserts           | Use `ArrayList` / dynamic structure | Amortized O(1) push, O(n) insert at index |




Array Insert DSA Interview Questions
1️⃣ Insert at a Given Index

Problem: Insert an element at a specific position in an array.

Example:

let data = [10, 20, 30, 40, 50];
let index = 2;
let value = 25;

// Shift elements from end to index
for(let i = data.length - 1; i >= index; i--){
    data[i+1] = data[i];
}
data[index] = value;

console.log(data); // [10, 20, 25, 30, 40, 50]


Time Complexity: O(n) → worst case when inserting at start

Space Complexity: O(1) → in-place

2️⃣ Insert at the Start

Problem: Insert at the first index (0).

let data = [2,3,4,5];
data.splice(0,0,1); 
console.log(data); // [1,2,3,4,5]


Notes:

Use splice for simple JS solution.

Manually, shift all elements to the right.

3️⃣ Insert at Multiple Indexes

Problem: Insert multiple elements at specified positions.

let myArray = ["E1","E2","E3"];
let elements = ["New1","New2"];
let indexes = [1,3];

for(let i=0; i<elements.length; i++){
    myArray.splice(indexes[i], 0, elements[i]);
}
console.log(myArray); // ["E1","New1","E2","New2","E3"]


Use case: Dynamic insertion in arrays, scheduling, or ordered data.

4️⃣ Custom Function for Array Insert (Step-by-Step)
let data = [10,20,30,40,50];
let ind = 1;
let add = 'jugal sharma';

function inserting(data, ind, add){
    // 1. Shift elements to right
    for(let i = data.length-1; i>=ind; i--){
        data[i+1] = data[i];
    }
    // 2. Insert new value
    data[ind] = add;

    console.log("New array:", data);
}

inserting(data, ind, add);
// Output: [10,"jugal sharma",20,30,40,50]


Explanation:

Loop from end → index, shift elements one by one.

Place the new element at the target index.

Efficient for small arrays, good for understanding memory shifts.




// let data=[10 , 20 , 30 , 40 , 50]
// let index=3
// let add='jugal sharma'

// function interarra(data , index , add){

// debugger; for(let i=index; i<data.length; i++){

//     data[i+1]=data[i]

// }

// data[index]=add
// console.log(data)
// }
// console.log(data)
//  interarra(data, index, add)




1::Array Insert  ...................................
:::::::::::::::::::::::
et data=[ 9 , 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1,0,100 ]
console.log(data.length)
let add=69;

let post=0;

for(let i=data.length-1; i>=0; i--){

    if(i>=post){
        
        data[i+1]=data[i]
    }if(i==post){

        data[i]=add;
    }

}

console.log(data)


// ---> Third logic 

var myArray = ["Element 1", "Element 2", "Element 3"];
var elementsToInsert = ["New Element 1", "New Element 2"];
var insertionIndexes = [1, 3];
for (var i = 0; i < elementsToInsert.length; i++) {
  var index = insertionIndexes[i];
  myArray.splice(index, 0, elementsToInsert[i]);
}
console.log(myArray);


// ---> Four Logic
let data=[2 ,  3 , 4 , 5]
data.splice(0 , 0 , 1)
console.log(data)



// new code inn inster array ----------------->>

💡 What’s happening step by step:


let data = [10, 20, 30, 40, 50];
let ind = 1;
let add = 'jugal sharma';

function instering(data, ind, add) {

    debugger;
  // 1️⃣ Save the value currently at index before inserting
//   let pushedValue = data[ind];

  // 2️⃣ Shift elements from end → index
  for (let i = data.length - 1; i >= ind; i--) {
    data[i + 1] = data[i];
  }

  // 3️⃣ Insert new value at index
  data[ind] = add;

  // 4️⃣ Show results
//   console.log("Pushed value:", pushedValue);
  console.log("New array:", data);
}

instering(data, ind, add);


Step 1: i = 4

👉 4 >= 1 ✅ true
👉 data[5] = data[4] → move 50 to index 5

[10, 20, 30, 40, 50, 50]

Step 2: i = 3

👉 3 >= 1 ✅ true
👉 data[4] = data[3] → move 40 to index 4

[10, 20, 30, 40, 40, 50]

Step 3: i = 2

👉 2 >= 1 ✅ true
👉 data[3] = data[2] → move 30 to index 3

[10, 20, 30, 30, 40, 50]

Step 4: i = 1

👉 1 >= 1 ✅ true
👉 data[2] = data[1] → move 20 to index 2

[10, 20, 20, 30, 40, 50]


👉 Loop ends here. All elements from index 1 onward have been shifted one step to the right.

📝 Final Insert

After the loop:

data[ind] = add;   // data[1] = 'jugal sharma'


Result:

[10, 'jugal sharma', 20, 30, 40, 50]






| Step                  | Action                   | Array                                  |
| --------------------- | ------------------------ | -------------------------------------- |
| Start                 | Original array           | `[10, 20, 30, 40, 50]`                 |
| Shift 50 → position 5 | i=4                      | `[10, 20, 30, 40, 50, 50]`             |
| Shift 40 → position 4 | i=3                      | `[10, 20, 30, 40, 40, 50]`             |
| Shift 30 → position 3 | i=2                      | `[10, 20, 30, 30, 40, 50]`             |
| Shift 20 → position 2 | i=1                      | `[10, 20, 20, 30, 40, 50]`             |
| Shift 10 → position 1 | i=0                      | `[10, 10, 20, 30, 40, 50]`             |
| Insert new value      | data[0] = "jugal sharma" | `['jugal sharma', 10, 20, 30, 40, 50]` |
