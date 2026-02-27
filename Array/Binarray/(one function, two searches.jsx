e 😄 this is a classic LeetCode / interview question

“Find First and Last Position of Element in Sorted Array”

Let’s do it clean + interview-ready.

🎯 Goal

Given a sorted array and a target, return:

[firstIndex, lastIndex]


If not found:

[-1, -1]

🧠 Idea (one function, two searches)

We still use binary search twice, but wrap it in ONE function.

Why twice?

One search → first occurrence

One search → last occurrence

⚠️ This is still O(log n) (interviewers love this)

✅ One Function Solution



function findRange(arr, target) {

  function binarySearch(isFirst) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === target) {
        result = mid;

        if (isFirst) {
          end = mid - 1;   // 👈 search LEFT
        } else {
          start = mid + 1; // 👉 search RIGHT
        }

      } else if (target > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return result;
  }

  let first = binarySearch(true);
  let last = binarySearch(false);

  return [first, last];
}

🧪 Example
let data = [10, 20, 30, 50, 50, 50, 60, 70];

console.log(findRange(data, 50));
console.log(findRange(data, 40));

✅ Output
[3, 5]
[-1, -1]

🔑 How to explain in interview (simple words)

“I used binary search twice.
First time I bias the search to the left to find the first occurrence.
Second time I bias the search to the right to find the last occurrence.
Time complexity is O(log n).”

🔥 That answer scores points.

⏱ Complexity

Time: O(log n)

Space: O(1)

🧠 Memory Trick
First index  → keep going LEFT
Last index   → keep going RIGHT


If you want next: