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

function BinaryFloor(data, find) {
    let start = 0;
    let end = data.length - 1;
    let floor = null;
    let ceil = null;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (data[mid] === find) {
            return { floor: data[mid], ceil: data[mid] };
        } else if (data[mid] < find) {
            floor = data[mid];
            start = mid + 1;
        } else {
            ceil = data[mid];
            end = mid - 1;
        }
    }

    return { floor, ceil };
}

const sortedArr = [-6, -2, 4, 8, 20];
console.log(BinaryFloor(sortedArr, 5)); 
// Output: { floor: 4, ceil: 8 }
