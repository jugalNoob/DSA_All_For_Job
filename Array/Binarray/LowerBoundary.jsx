🔽 Insert Position (Lower Bound) — HOW to use it
🧠 What “Lower Bound” really means

First index where value ≥ target

That index is exactly where you should insert the element to keep the array sorted.

🧪 Example
arr = [10, 20, 30, 40]
target = 25


Elements ≥ 25 → [30, 40]
First such element → 30 at index 2

👉 Insert position = 2

🔑 Binary Search Rule

When:

arr[mid] >= target


record mid

move LEFT (try to find earlier position)

✅ Binary Search Code (Lower Bound)
function insertPosition(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length; // default: insert at end

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      ans = mid;        // possible insert position
      high = mid - 1;   // move left
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

🧪 Test it
console.log(insertPosition([10, 20, 30, 40], 25)); // 2
console.log(insertPosition([10, 20, 30, 40], 10)); // 0
console.log(insertPosition([10, 20, 30, 40], 50)); // 4

🧠 Why this works

Array is sorted

Once arr[mid] >= target becomes true, it stays true on the right

That makes it a monotonic condition → perfect for binary search

📌 Real-world uses
1️⃣ Maintaining sorted data

Example: keep leaderboard sorted

let scores = [100, 90, 80, 70];

let pos = insertPosition(scores, 85);
scores.splice(pos, 0, 85);

2️⃣ Scheduling (very common)

Example: insert meeting by start time

let meetings = [9, 11, 14, 16]; // hours

let newMeeting = 13;
let pos = insertPosition(meetings, newMeeting);

meetings.splice(pos, 0, newMeeting);


Keeps schedule ordered ✔️

3️⃣ Frequency counting trick

Lower bound helps find first occurrence

firstIndex = lowerBound(arr, target);


Upper bound (> target) helps find last occurrence.

⏱ Complexity

Search: O(log n)

Insert (array): O(n) (shift elements)

👉 Binary search optimizes finding position, not insertion cost.

🧠 Interview one-liner

“Insert position is just finding the lower bound — the first element ≥ target.”

🔑 Memory Trick
>= target  → go LEFT
<  target  → go RIGHT
