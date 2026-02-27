| Type              | Description                       | Example      | Real Use                  |
| ----------------- | --------------------------------- | ------------ | ------------------------- |
| Fixed Window      | Continuous elements of fixed size | `[4,2,1]`    | Sliding window problems   |
| Variable Window   | Size changes dynamically          | `[1,2,3]`    | Dynamic constraints       |
| Positive/Negative | Based on total sum sign           | `[4,-1,2,1]` | Kadane’s algorithm        |
| Target Sum        | Sum equals target                 | `[2,3,7]`    | Subarray sum problems     |
| Prefix            | Starts from index 0               | `[3,5,2]`    | Prefix sums               |
| Suffix            | Ends at last index                | `[5,2,6]`    | Reverse cumulative sums   |
| Distinct          | All elements unique               | `[1,2,3]`    | Longest distinct subarray |





🧩 What is a Subarray (Quick Recap)

A subarray is a contiguous (continuous) part of an array.
👉 The elements must be next to each other — no skipping.

Example:
If arr = [1, 2, 3]
then subarrays are:

[1]
[2]
[3]
[1, 2]
[2, 3]
[1, 2, 3]

🧠 Types of Subarrays

We can categorize subarrays based on length, sum, or properties.

🟢 1. Fixed-Length Subarray

A subarray with a specific window size.

Used in:

Sliding window problems

Performance or average analysis

Example:

let arr = [4, 2, 1, 7, 8, 1];
let k = 3;

// Fixed-length subarrays of size 3:
console.log([4,2,1]);
console.log([2,1,7]);
console.log([1,7,8]);
console.log([7,8,1]);


🧮 Used in:

Finding max/min sum of k consecutive numbers

Sliding window algorithms

🔵 2. Variable-Length Subarray

Length is not fixed — can change based on condition.

Example:
Find subarrays where the sum ≤ target

let arr = [1, 2, 3, 4];
let target = 5;

// Possible variable-length subarrays under condition
// [1,2], [2,3], [1,2,3] etc.


🧮 Used in:

Subarray with sum less than or equal to k

Longest subarray meeting some constraint

🟠 3. Positive/Negative Sum Subarrays

Categorized by their total sum:

Example:

let arr = [-2, 1, -3, 4, -1, 2, 1];


✅ Positive sum subarray → [4, -1, 2, 1]
❌ Negative sum subarray → [-2, 1, -3]

🧮 Used in:

Kadane’s Algorithm (Maximum sum subarray)

Financial or sensor analysis

🟣 4. Subarray with Target Sum

Find a subarray whose sum = target value.

Example:

let arr = [1, 2, 3, 7, 5];
let target = 12;
// Subarray with sum 12 → [2, 3, 7]


🧮 Used in:

Find continuous section adding up to a value

Problems like “subarray sum equals k”

🟤 5. Prefix Subarray

Starts from the beginning of the array.

Example:

let arr = [3, 5, 2, 6];
Prefix subarrays:
[3]
[3, 5]
[3, 5, 2]
[3, 5, 2, 6]


🧮 Used in:

Prefix sum technique

Cumulative statistics, e.g., total profit till day N

⚫ 6. Suffix Subarray

Ends at the last element of the array.

Example:

Suffix subarrays of [3, 5, 2, 6]:
[6]
[2, 6]
[5, 2, 6]
[3, 5, 2, 6]


🧮 Used in:

Cumulative sums from the end

Problems involving reverse traversal

🔴 7. Distinct Element Subarray

Subarray that contains unique elements only.

Example:

let arr = [1, 2, 1, 3, 4];
Subarrays with distinct elements:
[1,2], [2,1,3], [1,3,4]


🧮 Used in:

Longest substring without repeating characters

Sliding window + HashSet technique

🧠 Meaning of Subarray

A subarray means a continuous part (chunk) of an array.
It must come from the original array without changing the order and without skipping elements.

Think of it like taking a slice of the array 🍞 —
You can cut a continuous piece, but you can’t skip in between.




const arr = [4, 2, 1, 7];


| Subarray       | Explanation    |
| -------------- | -------------- |
| `[4]`          | single element |
| `[2]`          | single element |
| `[1]`          | single element |
| `[7]`          | single element |
| `[4, 2]`       | continuous     |
| `[2, 1]`       | continuous     |
| `[1, 7]`       | continuous     |
| `[4, 2, 1]`    | continuous     |
| `[2, 1, 7]`    | continuous     |
| `[4, 2, 1, 7]` | whole array    |





✅ All are subarrays because elements are next to each other.

❌ Not subarrays (these are “subsequences”)
[4, 1]   ❌ (not continuous)
[2, 7]   ❌ (skipped elements)

🧩 In the context of your code:

When you use a window of size 3:

[4, 2, 1, 7, 8, 1, 2]


You’re looking at these subarrays of length 3:

[4, 2, 1]
[2, 1, 7]
[1, 7, 8]
[7, 8, 1]
[8, 1, 2]


Each of these is a subarray — contiguous, same order, fixed size.

🧮 Simple analogy

Think of an array as a line of boxes:

[4][2][1][7][8][1][2]


A subarray is like selecting a continuous group of boxes:

      ↑   ↑   ↑
     [1][7][8]   ← subarray

🪄 In summary:

| Term            | Description                 | Continuous? |
| --------------- | --------------------------- | ----------- |
| **Array**       | Original full data          | ✅           |
| **Subarray**    | Continuous slice from array | ✅           |
| **Subsequence** | May skip elements           | ❌           |




🧩 Base Array
arr = [4, 2, 1, 7, 8]

🟩 1️⃣ Subarray → Continuous elements

A subarray is a continuous slice of the array.

Think: 🧱 boxes stuck together — no gaps.

Examples:
[4]           ✅
[4, 2]        ✅
[2, 1, 7]     ✅
[7, 8]        ✅
[4, 2, 1, 7]  ✅


🧠 Rule: You cannot skip any element in between.

Visual:

Array: [4][2][1][7][8]
Subarray:     [2][1][7]


✅ Continuous — valid subarray

🟨 2️⃣ Subsequence → Can skip elements

A subsequence can skip elements, but the order must remain the same.

Examples:
[4, 1, 8]     ✅ (skipped 2,7)
[2, 7]        ✅ (skipped others)
[4, 7, 8]     ✅


❌ [1, 4] → invalid (order changed)

Visual:

Array: [4][2][1][7][8]
Subsequence: [4]   [1]   [8]


✅ Not continuous, but order same → subsequence



| Feature             | Subarray                      | Subsequence              |
| ------------------- | ----------------------------- | ------------------------ |
| Must be continuous? | ✅ Yes                         | ❌ No                     |
| Must keep order?    | ✅ Yes                         | ✅ Yes                    |
| Example             | `[2,1,7]`                     | `[2,7,8]`                |
| Used in             | Sliding Window, Kadane’s Algo | Dynamic Programming, LCS |
| Visual              | `[2][1][7]`                   | `[2]...[7]...[8]`        |



let arr = [1, 2, 3];

// loop through start index
for (let start = 0; start < arr.length; start++) {
  // loop through end index
  for (let end = start; end < arr.length; end++) {
    // slice the array from start to end (inclusive)
    console.log(arr.slice(start, end + 1));
  }
}



const numbers = [1, 2, 3, 4, 5, 6];

// Get subarray from index 1 to 4 (not including 4)
const subarray = numbers.slice(1, 4);

console.log(subarray); // Output: [2, 3, 4]




const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Remove 2 items starting at index 1
const removed = fruits.splice(1, 2);

console.log(removed);  // ['banana', 'cherry']
console.log(fruits);   // ['apple', 'date', 'elderberry']



Example 3: Manual subarray with loop
javascriptconst arr = [10, 20, 30, 40, 50];
const subarray = [];

for (let i = 1; i < 4; i++) {
  subarray.push(arr[i]);
}

console.log(subarray); // [20, 30, 40]




"Mean of a subarray" means the average of the numbers in a portion (subarray) of an array.

Simple Definition:

Mean = Sum of elements in subarray ÷ Number of elements in subarray


JavaScript Example:
javascriptconst arr = [1, 2, 3, 4, 5, 6];

// Let's take subarray from index 1 to 4 → [2, 3, 4, 5]
const subarray = arr.slice(1, 5);

const sum = subarray.reduce((acc, num) => acc + num, 0);
const mean = sum / subarray.length;

console.log("Subarray:", subarray); // [2, 3, 4, 5]
console.log("Mean:", mean);         // 3.5

Step-by-step:

Subarray: [2, 3, 4, 5]
Sum = 2 + 3 + 4 + 5 = 14
Count = 4
Mean = 14 / 4 = 3.5


Function to calculate mean of any subarray:
javascriptfunction meanOfSubarray(arr, start, end) {
  const subarray = arr.slice(start, end);
  const sum = subarray.reduce((a, b) => a + b, 0);
  return sum / subarray.length;
}

// Usage:
console.log(meanOfSubarray([1, 2, 3, 4, 5], 0, 3)); // Mean of [1,2,3] → 2
console.log(meanOfSubarray([10, 20, 30, 40], 1, 4)); // Mean of [20,30,40] → 30

Summary:
Mean of subarray = (sum of elements in subarray) / (length of subarray)
Let me know if you want sliding window mean or all subarrays mean!