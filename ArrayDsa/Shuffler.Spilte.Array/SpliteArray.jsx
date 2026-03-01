
let data = [10, 20, 30];
let start = 0;
let end = data.length - 1;
let mid = Math.floor((start + end) / 2);

for(let i=start; i<=mid; i++){
     console.log(data[i] , 'start to mind');
}



for (let i = mid; i <= end; i++) {
  console.log(data[i] , 'mind to end');
}




let data = [10, 20, 30, 40, 50];

let start = 0;
let end = data.length - 1;
let mid = Math.floor((start + end) / 2);

console.log("Start:", data[start], "Mid:", data[mid], "End:", data[end]);

let left = data.slice(0, mid + 1);
let right = data.slice(mid + 1);

console.log("Left half:", left);
console.log("Right half:", right);



🟦 1. Split into two equal halves
let data = [10, 20, 30, 40, 50, 60, 70];

let mid = Math.floor(data.length / 2);
let firstHalf = data.slice(0, mid);
let secondHalf = data.slice(mid);

console.log(firstHalf);   // [10, 20, 30]
console.log(secondHalf);  // [40, 50, 60, 70]


👉 slice(start, end) doesn’t change the original array.


🟩 2. Split at a specific index

For example, split after index 3 (0-based):

let data = [10, 20, 30, 40, 50, 60, 70];

let index = 3;
let part1 = data.slice(0, index);
let part2 = data.slice(index);

console.log(part1);  // [10, 20, 30]
console.log(part2);  // [40, 50, 60, 70]

🟨 3. Split into chunks of a fixed size

For example: chunks of size 2:

let data = [10, 20, 30, 40, 50, 60, 70];
let size = 2;
let result = [];

for (let i = 0; i < data.length; i += size) {
  result.push(data.slice(i, i + size));
}

console.log(result);
// [ [10, 20], [30, 40], [50, 60], [70] ]

🟧 4. Using splice() (modifies original)
let data = [10, 20, 30, 40, 50, 60, 70];
let part1 = data.splice(0, 3);  // remove first 3
let part2 = data;               // remaining

console.log(part1); // [10, 20, 30]
console.log(part2); // [40, 50, 60, 70]






let data = [10, 20, 30, 40, 50, 60, 70];

let firstHalf = [];
let secondHalf = [];

let mid = Math.floor(data.length / 2);

// First half
for (let i = 0; i < mid; i++) {
  firstHalf[firstHalf.length] = data[i];
}

// Second half
for (let i = mid; i < data.length; i++) {
  secondHalf[secondHalf.length] = data[i];
}

console.log(firstHalf);   // [10, 20, 30]
console.log(secondHalf);  // [40, 50, 60, 70]





✨ BONUS: Split into chunks of fixed size (e.g., 2) using loop only


let data = [10, 20, 30, 40, 50, 60, 70];
let size = 2;
let chunks = [];
let temp = [];

for (let i = 0; i < data.length; i++) {
  temp[temp.length] = data[i];

  if (temp.length === size || i === data.length - 1) {
    chunks[chunks.length] = temp;
    temp = [];
  }
}

console.log(chunks);
// [ [10, 20], [30, 40], [50, 60], [70] ]
