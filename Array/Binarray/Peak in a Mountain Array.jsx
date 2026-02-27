🔥 Perfect — Peak in a Mountain Array is a textbook binary search problem and very popular in interviews.

Let’s go from intuition → code → explanation.

🏔️ Peak in a Mountain Array
🧠 What is a Mountain Array?

An array that:
1️⃣ Strictly increases
2️⃣ Reaches one peak
3️⃣ Strictly decreases

arr[0] < arr[1] < ... < arr[peak] > ... > arr[n-1]

🧪 Example
arr = [1, 3, 7, 12, 9, 4, 2]


Peak = 12
Peak index = 3

🔑 Core Idea (Slope / Neighbor Compare)

At any index:

If you are on the uphill

Or on the downhill

Decision rule
if arr[mid] < arr[mid + 1]
    you are climbing → peak is RIGHT
else
    you are descending → peak is LEFT (or mid)

✅ Binary Search Code (Mountain Peak)
function peakInMountainArray(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] < arr[mid + 1]) {
      low = mid + 1;    // climb up
    } else {
      high = mid;       // go down / peak side
    }
  }

  return low; // peak index
}

🧪 Test it
let arr = [1, 3, 7, 12, 9, 4, 2];

let peakIndex = peakInMountainArray(arr);

console.log("Peak index:", peakIndex);
console.log("Peak value:", arr[peakIndex]);

✅ Output
Peak index: 3
Peak value: 12

🧠 Why this ALWAYS works

Mountain array has exactly one peak

Left side → strictly increasing

Right side → strictly decreasing

Comparing mid and mid+1 tells you which side of the peak you’re on

⏱ Complexity


| Metric | Value      |
| ------ | ---------- |
| Time   | `O(log n)` |
| Space  | `O(1)`     |



📌 Important Interview Notes

No need to check both neighbors

One comparison is enough

Guaranteed to find the peak

🔑 Memory Trick
Going up  → move right
Going down → move left

🧠 Interview one-liner

“I compare mid with mid+1 to determine the slope and discard half the array.”
