Nice one 👌
Peak Element → Neighbor Compare is another classic binary-search pattern and very interview-friendly.

Let’s go step by step and show how to actually use it.

⛰️ Peak Element (Neighbor Compare)
🧠 What is a Peak Element?

An element is a peak if:

arr[i] ≥ arr[i-1] AND arr[i] ≥ arr[i+1]


Edges:

First element is peak if arr[0] ≥ arr[1]

Last element is peak if arr[n-1] ≥ arr[n-2]

👉 There can be multiple peaks.
Binary search finds any one.

🧪 Example
arr = [1, 3, 20, 4, 1]


20 is a peak because:

20 > 3

20 > 4

Index = 2

🔑 Core Idea (Neighbor Compare)

Instead of checking the whole array:

Compare mid with mid + 1

Logic
if arr[mid] > arr[mid+1]
    peak is on LEFT (including mid)
else
    peak is on RIGHT


Why?
Because the slope tells you where a peak must exist.

✅ Binary Search Code (Peak Element)
function findPeakElement(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > arr[mid + 1]) {
      high = mid;        // move LEFT
    } else {
      low = mid + 1;     // move RIGHT
    }
  }

  return low; // or high (both same)
}

🧪 Test it
let arr = [1, 3, 20, 4, 1];

let peakIndex = findPeakElement(arr);
console.log("Peak index:", peakIndex);
console.log("Peak value:", arr[peakIndex]);

✅ Output
Peak index: 2
Peak value: 20

🧠 Why this works (simple explanation)

If the array is going down, a peak is on the left

If the array is going up, a peak is on the right

Binary search keeps cutting the search space

⏱ Complexity


| Metric | Value      |
| ------ | ---------- |
| Time   | `O(log n)` |
| Space  | `O(1)`     |


📌 When to use this pattern

✔ Peak element
✔ Mountain array peak
✔ Bitonic array maximum
✔ Any “greater than neighbors” problem

🧠 Interview one-liner

“I compare mid with its neighbor to decide which side must contain a peak.”

🔑 Memory Trick
mid > mid+1 → go LEFT
mid < mid+1 → go RIGHT


If you want next:

🔥 peak in mountain array

🧠 why peak always exists

🧪 dry-run table step by step

⚡ convert peak logic into universal template

Just say 🚀