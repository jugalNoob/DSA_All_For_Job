
1:::Sum of natural number:::::::::::::::::::::::::::::
function sumofnatural(num){
    // let sum=0;
    // for(let i=0; i<=num; i++){
    //     sum=sum+i
    // }
    // return sum
console.log(sumofnatural(5)) will output 15 (sum of natural numbers up to 5: 1 + 2 + 3 + 4 + 5 = 15).
    return  num*(num+1)/2
}
console.log(sumofnatural(5))
console.log(sumofnatural(10))
console.log(sumofnatural(8))



::::::::::::::sum of digits of a number ||||||||  //////////////////////////////////////////////////////////////////
function sumofDigits(num){
let sum=0;
while(num > 0){
    sum+=num%10;
    num= Math.floor(num/10);
}
return sum
}
console.log(sumofDigits(1287))



:::::::::count the number of digits of a number  //////////////////////////////////////////////////////////////////
function ones(sum){
   let count= sum.toString().length;
   let num=3
   if(count == num){
    console.log(true)
   console.log(count)
   }else{
    console.log(false)
   }
}
ones(123)

function Ones(sum){
   let count = sum.toString().length;
   console.log(count)
   return count;
}

let sum = "jugal sharma";
console.log(Ones(sum));



::::::::::FindMissingNumber:::::::::::

function findMissingNumber(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return num.length * (num.length + 1) / 2 - sum;
}
console.log(findMissingNumber([0,1,2,4])); // Output will be 3 (as 3 is the missing number in the array)



:::::: Longest Common Prefix::::::::::::::::::::::::::::
function longestCommonPrefix(word1, word2) {
    let prefix = "";
    const minLength = Math.min(word1.length, word2.length);

    for (let i = 0; i < minLength; i++) {
        if (word1[i] === word2[i]) {
            prefix += word1[i]; // Add character to prefix if they match
        } else {
            break; // Break the loop if characters don't match
        }
    }
    return prefix;
}
// Example usage:
console.log(longestCommonPrefix('hello', 'world')); // Output will be an empty string as there's no common prefix
console.log(longestCommonPrefix('cat', 'cattle')); // Output will be "cat" as "cat" is the common prefix



:::::::::::::::::::

|||||||||first ocd=curance in  string ::::::::::
function firstOccurrence(str, subStr) {
    return str.indexOf(subStr);
}
// Example usage:
console.log(firstOccurrence("Hello, this is a sample text", "is")); // Output will be 10
console.log(firstOccurrence("JavaScript is fun", "Java")); // Output will be -1 (as "Java" is not present in "JavaScript is fun")



///////////////////  Check which number divide by three  .,.....................

let num = [10, 20, 30, 40, 6 , 0.5];

let de = [];
let two = [];
let three = [];

for (let i = 0; i < num.length; i++) {
  // Check if the number is divisible by 3
  if (num[i] % 3 === 0) {
    de.push(num[i]);
  } 
  // Check if the number is divisible by 2 but not by 3
  else if (num[i] % 2 === 0) {
    two.push(num[i]);
  } 
  // Otherwise, it's neither divisible by 2 nor 3
  else {
    three.push(num[i]);
  }
}

console.log(de, "check with number divisible by 3");
console.log(two, "check with number divisible by 2");
console.log(three, "check with number not divisible by 2 or 3");





 center Point of elemnt array ------------->>>>>

let data = [10, 20, 30, 440, 50];
let centerIndex = Math.floor(data.length / 2);
console.log(centerIndex); // 2
console.log(data[centerIndex]); // 30




 ///  ------ >>> Last element word of array  ------------->>

let data = [10, 20, 30, 440, 50];
let lastElement = data[data.length - 1];
console.log("Last element:", lastElement); // 50


let data = [10, 20, 30, 440, 50];
let lastElement;

for (let item of data) {
    lastElement = item;
}

console.log("Last element:", lastElement); // 50


/// ----- >>> first word of elmenet array -----------?>>

let data = [10, 20, 30, 440, 50];
let firstElement = data[0];
console.log("First element:", firstElement); // 10


let data = [10, 20, 30, 440, 50];
let firstElement;

for (let i = 0; i < data.length; i++) {
    firstElement = data[i];
    break; // Exit the loop after the first iteration
}

console.log("First element:", firstElement); // 10











:::::::::::::||||||||| Cartesian product ::::::::::::
function cartesianProduct(arr1, arr2) {
  const result = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]])
    }
  }
  return result
}
const arr1 = [1, 2]
const arr2 = [3, 4, 5]
console.log(cartesianProduct(arr1, arr2)) // [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]




10::Iterating Over Matrices:  |||||||||||||||||||
// Create a sample 2D matrix
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// Iterate through rows and columns using nested loops
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    const element = matrix[row][col];
    console.log(`Element at row ${row}, col ${col}: ${element}`);
  }
}


// Create an array
// Use Destructuring in for...of Loops:
const pairs = [[1, 'one'], [2, 'two'], [3, 'three']];
for (const [number, name] of pairs) {
  console.log(`${name} is ${number}`);
}




::::::::::::::::
5::Two Pointers with a Single Loop:
function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right]; // Indices of the pair
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null; // If no pair is found
}
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]




5. Dutch National Flag Problem::::::::::::::::::::::::::::::::
function dutchNationalFlag(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[high], arr[mid]] = [arr[mid], arr[high]];
            high--;
        }
    }
    return arr;
}

console.log(dutchNationalFlag([2, 0, 1, 2, 1, 0])); // [0, 0, 1, 1, 2, 2]




5. Greedy Algorithms on Arrays:::::::::::::::::::::::::::::::::::


Greedy algorithms involve making the best decision at each step. An example is finding the minimum number 
of platforms needed for trains, or finding the minimum number of coins to make a certain amount.

Example: Activity selection problem (maximum number of non-overlapping intervals):

function maxActivities(activities) {
  activities.sort((a, b) => a[1] - b[1]); // Sort by end time
  let count = 1; // First activity is always selected
  let end = activities[0][1];
  
  for (let i = 1; i < activities.length; i++) {
    if (activities[i][0] >= end) {
      count++;
      end = activities[i][1];
    }
  }
  
  return count;
}

let activities = [[1, 3], [2, 4], [3, 5], [0, 6], [5, 7], [8, 9]];
console.log(maxActivities(activities)); // Output: 4






::::::::-------------->><><> ---------------------------------------
function rotateArray(arr, steps) {
   for (let i = 0; i < steps; i++) {
       arr.push(arr.shift());
   }
   return arr;
}

let array = [1, 2, 3, 4, 5];
let steps = 3;
console.log(rotateArray(array, steps)); // Output: [3, 4, 5, 1, 2]


::::::::: -------><><>
function rotateMatrix90(matrix) {
   const n = matrix.length;
   // Transpose the matrix
   for (let i = 0; i < n; i++) {
       for (let j = i; j < n; j++) {
           [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
       }
   }
   // Reverse each row
   for (let i = 0; i < n; i++) {
       matrix[i].reverse();
   }
   return matrix;
}
let matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];
console.log(rotateMatrix90(matrix));





:::Filetr in array  ----------------------->
let data = [10, 20, 30, 40, 50, 60, 80];
let op = 20;
for (let i = 0; i < data.length; i++) {
    if (data[i] > op) {
        console.log(data[i]);
    } else {
        console.log("Number is greater than ",op);
    }
}

::: Map Function ---------------------------------<><><><><

let data = ["jugal" , "karan" , "kanika" , "anku"];
let op = 20;
for (let i = 0; i < data.length; i++) {
   console.log(i)
   console.log(data[i])
   console.log(data)
}



::: ------------------->>>>>>>>>> Reducer ----------------
let data = [10, 30 , -1];
let sum = 0;
for (let i = 0; i < data.length; i++) {
    let doubledValue = data[i] 
    sum += doubledValue;
}
console.log("Sum of doubled values:", sum);

let data = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < data.length; i++) {
    sum += data[i];
}

console.log("Sum of array:", sum); // Output: 150




:::: Patterns -------------------------------------<><>
1:sliding windowa
function maxSumSubarray(arr, windowSize) {
    if (arr.length < windowSize) {
        return null;
    }
    let maxSum = 0;
    let currentSum = 0;
    // Calculate sum of first window
    for (let i = 0; i < windowSize; i++) {
        maxSum += arr[i];
    }
    currentSum = maxSum;
    // Slide the window and update the sums
    for (let i = windowSize; i < arr.length; i++) {
        currentSum = currentSum - arr[i - windowSize] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
// Example usage
const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const windowSize = 3;
console.log(maxSumSubarray(arr, windowSize)); // Output: 16 (sum of subarray [7, 8, 1])

2:::Two pointer
function twoSum(arr, target) {
    // Sort the array (if it's not already sorted)
    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [arr[left], arr[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null; // No such pair found
}

// Example usage
const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target)); // Output: [2, 7]


3:::
// Function to find all subarrays of an array
function findAllSubarrays(arr) {
    const subarrays = [];
    const n = arr.length;

    for (let start = 0; start < n; start++) {
        for (let end = start; end < n; end++) {
            const subarray = arr.slice(start, end + 1);
            subarrays.push(subarray);
        }
    }
    return subarrays;
}
// Example usage
const arr = [1, 2, 3];
console.log(findAllSubarrays(arr)); 
// Output: [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]

// Function to find the maximum sum of a subarray
function maxSumSubarray(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
// Example usage
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSumSubarray(nums)); // Output: 6 (sum of subarray [4, -1, 2, 1])





:::::::::::::: ----------------------------------------------------------------/<>><><><><><>
class CircularArray {
    constructor(size) {
        this.size = size;
        this.array = new Array(size);
        this.head = 0; // Points to the first element in the circular array
    }

    // Helper function to calculate the actual index in the circular array
    calculateIndex(index) {
        // Handle negative indices
        if (index < 0) {
            index += this.size;
        }
        return (this.head + index) % this.size;
    }

    // Get value at a specific index in the circular array
    get(index) {
        const actualIndex = this.calculateIndex(index);
        return this.array[actualIndex];
    }

    // Set value at a specific index in the circular array
    set(index, value) {
        const actualIndex = this.calculateIndex(index);
        this.array[actualIndex] = value;
    }

    // Rotate the circular array by a given offset
    rotate(offset) {
        this.head = this.calculateIndex(offset);
    }
}

// Example usage:
const circularArray = new CircularArray(5);
circularArray.set(0, 'A');
circularArray.set(1, 'B');
circularArray.set(2, 'C');
circularArray.set(3, 'D');
circularArray.set(4, 'E');

console.log(circularArray.get(0)); // Output: 'A'
console.log(circularArray.get(-1)); // Output: 'E'
console.log(circularArray.get(5)); // Output: 'A'
circularArray.rotate(2);
console.log(circularArray.get(0)); // Output: 'C' (after rotation)
console.log(circularArray.get(-1)); // Output: 'B' (after rotation)



/// all Types of console in javascript  ------------------>>>  ----------------
console.time("Timer 2");
// some code...
console.timeLog("Timer 2");//console.timeLog(): Logs the current value of a timer that was started with 
// some more code...
console.timeEnd("Timer 2");


console.assert(1 === 2, "This will log because 1 is not equal to 2.");


console.error("This is an error message.");

console.warn("This is a warning message.");

console.warn("This is a warning message.");


console.groupCollapsed("Collapsed Group");
console.log("This message is in a collapsed group.");
console.groupEnd();


console.group("Group 1");
console.log("Message in Group 1");
console.groupEnd();





console.time("Timer 1");
console.timeEnd("Timer 1");


// console.debug("This is a debug message.");
// console.dirxml(document.body);
// console.dir(document.body);
// console.log("%cHello, World!", "color: blue; font-size: 20px;");
// console.clear();
// function a() { b(); }
// function b() { c(); }
// function c() { console.trace("Trace message"); }
// a();
// const users = [
//    { name: "Alice", age: 25 },
//    { name: "Bob", age: 30 }
//  ];
//  console.table(users);
//  console.countReset("Count label");
// console.count("Count label");
// console.count("Count label");
// console.count("Count label");
// console.count("Count label");