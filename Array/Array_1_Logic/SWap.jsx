1️⃣ Swap two specific elements

let data = [10, 20, 30, 40, 50];

// Swap element at index 1 with index 3
let i = 1, j = 3;

let temp = data[i]; // 10 
data[i] = data[j];  // 10 == 40
data[j] = temp; // 40 =10

console.log(data); // [10, 40, 30, 20, 50]




// 2️⃣ Swap elements in pairs (like adjacent swap)
let data = [10, 20, 30, 40, 50];

debugger; for (let i = 0; i < data.length - 1; i += 2) {
    let temp = data[i];
    data[i] = data[i + 1];
    data[i + 1] = temp;
}

console.log(data); // [20, 10, 40, 30, 50]



Reverse Array Properly (DSA way)
let data = [10, 20, 30, 40, 50];

for (let i = 0; i < data.length / 2; i++) {
    let j = data.length - 1 - i;
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
}

console.log(data); // [50, 40, 30, 20, 10]


✅ This reverses the array in one clean pass using swaps left ↔ right.





for (let i = 0; i < 10; i +=2) {  // increment by 2
    console.log(i);
}


/// ------------ >>> Swap system :::::::::

let data = [10, 20, 30, 40, 50];

for (let i = 0; i < data.length; i += 2) { // 
    if (i === 2) {
        data[i] = data[i + 1];  // data[2] = data[3]


                data[i]=data[i+1]
        //3 =4
    }
    console.log(i);
}

console.log(data); // Check updated array

Loop Iteration 1

i = 0

Condition i === 2 → 0 === 2 ❌ false

No change to array

console.log(i) → prints 0

Loop Iteration 2

i = 2

Condition i === 2 → 2 === 2 ✅ true

Execute:

data[2] = data[3]; // data[2] = 40


Updated array:


::::::::::::::::::::::::::::::::::

Your array and loop:

let data = [10, 20, 30, 40, 50];

for (let i = 0; i < data.length; i += 3) { 
    if (i === 3) {
        data[i + 1] = data[i]; // data[4] = data[3]
            //letft to right
        //50 value ==40 value
    }
    console.log(i);
}

console.log('ppp');
console.log(data);

Step 1: Initial Array
data = [10, 20, 30, 40, 50]

Step 2: The loop for (let i = 0; i < data.length; i += 3)

i starts at 0

Condition: 0 < 5 ✅

i === 3? ❌ → skip if

console.log(i) → prints 0

Increment: i += 3 → i = 3

i = 3

Condition: 3 < 5 ✅

i === 3? ✅ → execute data[i + 1] = data[i] → data[4] = data[3]

So, data[4] becomes 40 (was 50)

Array now: [10, 20, 30, 40, 40]

console.log(i) → prints 3

Increment: i += 3 → i = 6

i = 6

Condition: 6 < 5 ❌ → loop ends