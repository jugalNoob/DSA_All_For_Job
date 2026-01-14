    Usage: use this technique to solve Array
    Problem where the Input data lies within a
    fixed range 

    DS involved Problem :Array 

    Sample Problem :

    Find all Missing Number 
    Find all Duplicated Number 
    Find the First K Missing Postive Number 




    🔁 CYCLIC SORT TECHNIQUE (ARRAY)
✅ When to use this technique?

👉 Use Cyclic Sort when:

Array elements are in a fixed range

Usually 1 to N or 0 to N

You need to find:

Missing numbers

Duplicate numbers

First K missing positives

📌 Key Idea (VERY IMPORTANT)

Each number should be placed at its correct index

For range 1 to N
Correct index of number x = x - 1


Example:

Value → Index
1 → 0
2 → 1
3 → 2

🧠 BASIC CYCLIC SORT LOGIC
Algorithm

Start from index i = 0

While current number is not at correct index

Swap it with the number at its correct index

Move to next index only when correct

🔹 Cyclic Sort Code
function cyclicSort(arr) {
  let i = 0;

  while (i < arr.length) {
    let correctIndex = arr[i] - 1;

    if (arr[i] !== arr[correctIndex]) {
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    } else {
      i++;
    }
  }
  return arr;
}


⏱ Time: O(n)
📦 Space: O(1)

📌 PROBLEM 1: FIND ALL MISSING NUMBERS
Problem
Input: [4,3,2,7,8,2,3,1]
Output: [5,6]

Logic

After cyclic sort

If arr[i] !== i+1 → missing number is i+1

Code
function findMissingNumbers(arr) {
  let i = 0;

  while (i < arr.length) {
    let correctIndex = arr[i] - 1;

    if (arr[i] !== arr[correctIndex]) {
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    } else {
      i++;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      result.push(i + 1);
    }
  }
  return result;
}

📌 PROBLEM 2: FIND ALL DUPLICATE NUMBERS
Problem
Input: [4,3,2,7,8,2,3,1]
Output: [2,3]

Logic

After cyclic sort

If arr[i] !== i+1

Then arr[i] is duplicate

Code
function findDuplicates(arr) {
  let i = 0;

  while (i < arr.length) {
    let correctIndex = arr[i] - 1;

    if (arr[i] !== arr[correctIndex]) {
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    } else {
      i++;
    }
  }

  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      duplicates.push(arr[i]);
    }
  }
  return duplicates;
}

📌 PROBLEM 3: FIRST K MISSING POSITIVE NUMBERS (ADVANCED)
Problem
Input: [3, -1, 4, 5, 5], k = 3
Output: [1,2,6]

Logic

Ignore negative & out-of-range numbers

Apply cyclic sort only for 1 to n

Collect missing numbers

If still need more → continue after n

Code
function firstKMissingPositive(arr, k) {
  let i = 0;

  while (i < arr.length) {
    let correctIndex = arr[i] - 1;

    if (
      arr[i] > 0 &&
      arr[i] <= arr.length &&
      arr[i] !== arr[correctIndex]
    ) {
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    } else {
      i++;
    }
  }

  let missing = [];
  let extra = new Set();

  for (let i = 0; i < arr.length && missing.length < k; i++) {
    if (arr[i] !== i + 1) {
      missing.push(i + 1);
      extra.add(arr[i]);
    }
  }

  let next = arr.length + 1;
  while (missing.length < k) {
    if (!extra.has(next)) {
      missing.push(next);
    }
    next++;
  }

  return missing;
}

🧠 WHY CYCLIC SORT IS POWERFUL?