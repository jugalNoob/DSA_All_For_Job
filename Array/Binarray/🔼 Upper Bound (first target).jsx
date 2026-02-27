Perfect 🔥 — Upper Bound is the twin of Lower Bound, and together they solve count / range / insert-after problems.

🔼 Upper Bound (First element > target)
🧠 What Upper Bound means

First index where value is strictly greater than target

🧪 Example
arr = [10, 20, 30, 30, 30, 40]
target = 30


Elements > 30 → [40]
First such element → index 5

👉 Upper Bound = 5

🔑 Binary Search Rule

When:

arr[mid] > target


record mid

move LEFT

Else:

move RIGHT

✅ Binary Search Code (Upper Bound)
function upperBound(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length; // default: end position

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > target) {
      ans = mid;       // possible upper bound
      high = mid - 1;  // move left
    } else {
      low = mid + 1;   // move right
    }
  }

  return ans;
}

🧪 Test it
let arr = [10, 20, 30, 30, 30, 40];

console.log(upperBound(arr, 30)); // 5
console.log(upperBound(arr, 25)); // 2
console.log(upperBound(arr, 50)); // 6

🔥 Why Upper Bound matters
1️⃣ Find last occurrence
lastIndex = upperBound(arr, target) - 1;

2️⃣ Count occurrences
count = upperBound(arr, target) - lowerBound(arr, target);


🔥 Most efficient way

3️⃣ Insert AFTER duplicates
let pos = upperBound(arr, target);
arr.splice(pos, 0, target);

🔽 Lower vs 🔼 Upper Bound (Quick table)


| Bound       | Condition   | Meaning                 |
| ----------- | ----------- | ----------------------- |
| Lower Bound | `>= target` | First possible position |
| Upper Bound | `> target`  | After last occurrence   |



🧠 Interview one-liner

“Upper bound finds the first element strictly greater than the target.”

🔑 Memory Trick
>= target → Lower Bound
>  target → Upper Bound

⏱ Complexity

Time: O(log n)

Space: O(1)

If you want next: