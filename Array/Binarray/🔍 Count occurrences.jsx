Let’s walk it step by step, no jumps.

🔍 Count occurrences using Binary Search (Boundaries)
When to use

✅ Array is sorted
✅ You want frequency of a value faster than O(n)

🧠 Core idea (very important)

Binary search cannot count directly.
So we do this:

1️⃣ Find first index of X
2️⃣ Find last index of X
3️⃣ Apply formula

count = lastIndex - firstIndex + 1

🧪 Example
let arr = [10, 20, 50, 50, 50, 60, 70];
let X = 50;


Indexes of 50 → 3, 4, 5

✅ Step 1: First Occurrence (left boundary)
function firstOccurrence(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      ans = mid;
      high = mid - 1; // move LEFT
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

✅ Step 2: Last Occurrence (right boundary)
function lastOccurrence(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      ans = mid;
      low = mid + 1; // move RIGHT
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

✅ Step 3: Apply the formula
function countOccurrences(arr, target) {
  let first = firstOccurrence(arr, target);

  if (first === -1) return 0; // element not found

  let last = lastOccurrence(arr, target);
  return last - first + 1;
}

🧪 Run it
console.log(countOccurrences(
  [10, 20, 50, 50, 50, 60, 70], 50
));

✅ Output
3

🧠 Dry-run intuition (interview explanation)

“I first find the left-most index of X using binary search.
Then I find the right-most index using binary search.
Since the array is sorted, all X values lie contiguously.
The difference of indexes gives me the count.”

🔥 That explanation scores points.

⏱ Complexity
| Metric | Value      |
| ------ | ---------- |
| Time   | `O(log n)` |
| Space  | `O(1)`     |


⚠️ Important

❌ This will NOT work on unsorted arrays
❌ Do not loop and count if interviewer asked for O(log n)

🔑 One-line memory trick

Count = Right boundary − Left boundary + 1