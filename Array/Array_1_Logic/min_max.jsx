let data=[10 , 20 , 30 , 40 , 50 , 60 , 70 , 80]
let max=data[0]
let count=0
for(let i=0; i<data.length; i++){
    if(data[i] > max){
    console.log(count++)
    if(count > 1){
    max=data[i]
    break;
        }
    }
}
console.log(max)



let data = [10, 20, 30, 40, 50, 60]
let max = data[1]


for (let i = 0; i < data.length -2; i++) { 
    console.log('i:', i, 'data[i]:', data[i], 'max before:', max)
    if (data[i] > max) {
        max = data[i]
    }
    console.log('max after:', max)
}

console.log('FINAL:', max)




✅ Tips for DSA Interviews:

Always ask about negative numbers / empty array.

Know array vs string min/max differences.

Mention optimized pair comparison for large datasets.

Can combine with frequency/count problems or range queries.




let data = [-2, -1, -3, 10, 20, , 30, 10];
let min = Infinity; // start with a large number

for (let i = 0; i < data.length; i++) {
    let value = data[i];



    if (value === undefined || value < 0) continue; // skip negatives and undefined
    console.log(value)
  
    // update min
    if (value < min) {
        min = value;
    }
}

//console.log("Positive Values:", positiveData); // [10, 20, 30, 10]
console.log("Minimum Positive Value:", min);   // 10





let data = [-2, -1, -3, 10, 20, , 30, 10];
let min = Infinity;

for (let value of data) {
    if (value >= 0) {
        if (value < min) min = value;
    }
}

console.log("Minimum Positive Value:", min); // 10

If you want, I can make a one-pass version that finds:

Minimum positive

Maximum positive

All positive values

Indexes of negatives

All in one loop — super practical for interviews.


let data = [-2, -1, -3, 10, 20, , 30, 10];

let positiveValues = [];
let minPositive = Infinity;
let maxPositive = -Infinity;
let negativeIndexes = [];

for (let i = 0; i < data.length; i++) {
    let value = data[i];

    if (value === undefined) continue; // skip empty slots

    if (value < 0) {
        negativeIndexes.push(i); // record index of negative value
        continue; // skip negative value
    }

    // collect positive numbers
    positiveValues.push(value);

    // update min and max
    if (value < minPositive) minPositive = value;
    if (value > maxPositive) maxPositive = value;
}

console.log("Positive Values:", positiveValues);       // [10, 20, 30, 10]
console.log("Minimum Positive Value:", minPositive);   // 10
console.log("Maximum Positive Value:", maxPositive);   // 30
console.log("Indexes of Negative Values:", negativeIndexes); // [0, 1, 2]





1️⃣ Problem: Find Min and Max

Definition: Find the smallest (min) and largest (max) element in a dataset (array or string).

Use Case: Frequently used in sorting, sliding window, range problems, and DSA basics.

2️⃣ Array - Basic Loop Method
let data = [1, 2, 3, 4];

let min = data[0];
let max = data[0];

for(let i = 0; i < data.length; i++){
    if(data[i] < min) min = data[i];
    if(data[i] > max) max = data[i];
}

console.log("Min:", min); // 1
console.log("Max:", max); // 4


Explanation:

Traverse the array once → compare each element with current min and max.

Time Complexity: O(n)

Space Complexity: O(1)

3️⃣ Array - Using Built-in Math Functions
let arr = [40, 20, 60];

console.log("Min:", Math.min(...arr)); // 20
console.log("Max:", Math.max(...arr)); // 60


Spread operator (...arr) converts array to individual arguments for Math functions.

Time Complexity: O(n) internally

Space Complexity: O(n) (due to spread)

4️⃣ Multiple Variables
const a = 10, b = 20, c = 5;

const min = Math.min(a, b, c);
const max = Math.max(a, b, c);

console.log(`Min: ${min}, Max: ${max}`); // Min: 5, Max: 20


Works for fixed number of elements (not arrays).

Useful in coding interviews when comparing few values.

5️⃣ String Example - Min and Max Characters

You can find lexicographical min/max in a string:

let str = "bdac";

let minChar = str[0];
let maxChar = str[0];

for(let i = 0; i < str.length; i++){
    if(str[i] < minChar) minChar = str[i];
    if(str[i] > maxChar) maxChar = str[i];
}

console.log("Min Char:", minChar); // a
console.log("Max Char:", maxChar); // d


Use Case: Sorting strings, finding range of characters, ASCII-based calculations.

6️⃣ Interview Variants

Find min/max in a 2D array → traverse row by row.

Find k smallest / largest elements → use heap / sorting.

Find min/max with constraints → e.g., even numbers, positive numbers.

Min/Max difference → max - min → used in range problems.

7️⃣ Optimized Approach (Pair Comparison)

Compare in pairs → reduce total comparisons.

function getMinMax(arr){
    let min = arr[0], max = arr[0];
    for(let i = 1; i < arr.length; i += 2){
        if(i+1 < arr.length){
            if(arr[i] < arr[i+1]){
                min = Math.min(min, arr[i]);
                max = Math.max(max, arr[i+1]);
            } else {
                min = Math.min(min, arr[i+1]);
                max = Math.max(max, arr[i]);
            }
        } else {
            min = Math.min(min, arr[i]);
            max = Math.max(max, arr[i]);
        }
    }
    return {min, max};
}

console.log(getMinMax([40,20,60,10,5])); // {min:5, max:60}


Reduces comparisons from 2n → 3n/2

Time Complexity: O(n)

Space Complexity: O(1)




:::::::: Min and Max Logic in array  .................
https://log2base2.com/
1. first 

let data=[1 , 2 , 3 , 4]

let min=data[0]

for(let i=0; i<data.length; i++){
    if(data[i] < min){
        min=data[i]
    }
}
console.log(min)

let max=data[0]
for(let i=0; i<data.length; i++){
   if(data[i] > max){
       max=data[i]
   }
}
console.log(max)


2.second 
let min=[40 , 20]

console.log(Math.min(...min))

let max =[40 , 60]

console.log(Math.max(...max))

3.third
const a = 10;
const b = 20;
const c = 5;

const min = Math.min(a, b, c); // Minimum value
const max = Math.max(a, b, c); // Maximum value

console.log(`Minimum: ${min}`); // Output: Minimum: 5
console.log(`Maximum: ${max}`); // Output: Maximum: 20