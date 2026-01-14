Below is a complete Nested Loop guide — from BASIC to ADVANCED, explained clearly, step-by-step, with real DSA use-cases, patterns, time-complexity thinking, and JavaScript code.

This is exactly how interviewers expect you to understand nested loops.

🔁 NESTED LOOPS (BASIC ➜ ADVANCED)
✅ What is a Nested Loop?

A loop inside another loop.

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // inner loop
  }
}


👉 Inner loop runs completely for each outer loop iteration.

📌 BASIC LEVEL
1️⃣ Print All Pairs
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}


⏱ Time: O(n²)

2️⃣ Multiplication Table
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

3️⃣ Pattern Printing
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

📌 INTERMEDIATE LEVEL (DSA USE-CASES)
4️⃣ Find Duplicate Elements
function findDuplicates(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i]);
        break;
      }
    }
  }
  return duplicates;
}


⏱ O(n²)
⚠ Can be optimized using HashMap

5️⃣ Bubble Sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

6️⃣ Matrix Traversal
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
}

📌 ADVANCED LEVEL
7️⃣ Two Sum (Brute Force)
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]; // break both loops
      }
    }
  }
  return null;
}


🧠 Interview:

Explain how to optimize using Two Pointer / HashMap

8️⃣ Subarray Generation
function generateSubarrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    let subarray = [];
    for (let j = i; j < arr.length; j++) {
      subarray.push(arr[j]);
      console.log(subarray);
    }
  }
}


⏱ O(n²)
📦 Space: O(n)

9️⃣ Matrix Search (Break Early)
function searchMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return true; // breaks all loops
      }
    }
  }
  return false;
}

📌 OPTIMIZATION THINKING (IMPORTANT)
❌ When NOT to use Nested Loops

Large input

Time-limit issues

When problem can be solved using:

HashMap

Two Pointer

Sliding Window

10️⃣ Convert Nested Loop → Optimized

Duplicate Check

❌ Nested loop:

O(n²)


✅ Optimized:

function hasDuplicate(arr) {
  let set = new Set();

  for (let num of arr) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}


⏱ O(n)

📌 VERY ADVANCED CONCEPTS
11️⃣ 3 Nested Loops (3 Sum Brute)
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (arr[i] + arr[j] + arr[k] === 0) {
        // found
      }
    }
  }
}


⏱ O(n³) ❌
✔ Optimized to O(n²) using Two Pointer

12️⃣ Triangle Pattern Logic
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process();
  }
}


🧠 Time complexity:

n + (n-1) + (n-2) = O(n²)

🧠 INTERVIEW GOLD RULES

✔ Inner loop work × outer loop count
✔ Early break saves time
✔ return breaks all loops
✔ Nested loops ≠ bad (small n ok)
✔ Always mention optimized approach

📊 TIME COMPLEXITY CHEAT SHEET


| Loops     | Complexity      |
| --------- | --------------- |
| Single    | O(n)            |
| Double    | O(n²)           |
| Triple    | O(n³)           |
| Dependent | O(n²/2) → O(n²) |


🎯 FINAL TAKEAWAY

🔥 Nested loops are foundation of DSA
🔥 Used in brute-force → optimized approach explanation
🔥 Interviewers love when you explain why you avoided nested loops