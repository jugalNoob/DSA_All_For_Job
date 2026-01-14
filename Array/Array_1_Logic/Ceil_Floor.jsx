🔍 What the function does

This function finds the floor and ceil of a given number x inside a sorted array.

➕ Definitions:

Floor: The largest number ≤ x in the array.

Ceil: The smallest number ≥ x in the array.

Example:
const arr = [-6, -2, 4, 8, 20];
const x = 5;

floor → 4   (largest value ≤ 5)
ceil  → 8   (smallest value ≥ 5)


The function efficiently finds these using binary search instead of
 checking all elements — so it runs in O(log n) time (very fast).

🧠 Step-by-Step Working

Let’s trace for x = 5 in [-6, -2, 4, 8, 20]:]#


| Step | low | high | mid | arr[mid] | Condition         | floor | ceil |
| ---- | --- | ---- | --- | -------- | ----------------- | ----- | ---- |
| 1    | 0   | 4    | 2   | 4        | 4 < 5 → floor = 4 | 4     | null |
| 2    | 3   | 4    | 3   | 8        | 8 > 5 → ceil = 8  | 4     | 8    |
| 3    | 3   | 2    | —   | —        | loop ends         | ✅     | ✅    |



⚙️ Real-World Use Cases

Here’s where you’d actually use this in real applications:

1. Search Autocomplete / Range Suggestions

When a user types “₹500”, and you want to suggest:

the closest lower price available (floor)

the closest higher price available (ceil)

Example:

const prices = [100, 300, 400, 800, 1200];
floorAndCeilSorted(prices, 500); // { floor: 400, ceil: 800 }

2. Numeric Interpolation / Graphs

In charting or interpolation, when you need to find two nearest points around a given value to estimate or interpolate between them.

3. Scheduling or Calendar Systems

If someone requests a meeting at 10:30, but available slots are [9:00, 10:00, 11:00, 12:00]:

floor → previous slot (10:00)

ceil → next slot (11:00)

4. Gaming / Leaderboard Rankings

Find which player is just below and just above a given score.

5. Dynamic Range Queries

For sensor data, temperature readings, or thresholds — find the nearest known range boundaries for a new reading.

🧩 Summary

| Term      | Meaning            | Example in `[-6, -2, 4, 8, 20]` (x = 5) |
| --------- | ------------------ | --------------------------------------- |
| **Floor** | Largest value ≤ x  | 4                                       |
| **Ceil**  | Smallest value ≥ x | 8                                       |



////// --------------->> Binary and Floor search 

💡 In short:

Binary Search → Only tells you: “found or not?”
Floor/Ceil Search → Also tells you: “if not found, what’s nearest?”


| Feature              | **Binary Search**      | **Floor & Ceil Search**                  |
| -------------------- | ---------------------- | ---------------------------------------- |
| Goal                 | Find **exact element** | Find **closest lower & higher** elements |
| If element not found | Returns `-1`           | Returns `{ floor, ceil }`                |
| When `arr[mid] < x`  | `low = mid + 1`        | same, but also `floor = arr[mid]`        |
| When `arr[mid] > x`  | `high = mid - 1`       | same, but also `ceil = arr[mid]`         |
| Example (x = 5)      | ❌ -1                   | ✅ `{ floor: 4, ceil: 8 }`                |
| Time complexity      | O(log n)               | O(log n)                                 |
| Use cases            | Searching exact        | Ranges, predictions, thresholds          |




function floorAndCeilSorted(arr, x) {
  let low = 0, high = arr.length - 1;
  let floor = null, ceil = null;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      return { floor: x, ceil: x }; // exact match
    }
    if (arr[mid] < x) {
      floor = arr[mid];
      low = mid + 1;
    } else {
      ceil = arr[mid];
      high = mid - 1;
    }
  }
  return { floor, ceil };
}

// Example
// const sortedArr = [-6, -2, 4, 8, 20];
const sortedArr =[-2,4,  , 6,7 ]
console.log(floorAndCeilSorted(sortedArr, 5));
// { floor: 4, ceil: 8 }