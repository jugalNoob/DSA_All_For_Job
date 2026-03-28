function MergeSort(data) {

  if (data.length < 2) {
    return data
  }

  let mid = Math.floor(data.length / 2)

  let left = data.slice(0, mid)
  let right = data.slice(mid)

  return merge(MergeSort(left), MergeSort(right))
} 

function merge(left, right) {

  let result = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {

    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }

  }

  return result.concat(left.slice(i)).concat(right.slice(j))
}

console.log(MergeSort([30,40,50,60,80,10]))



🧠 STEP 1: DIVIDE (Recursion Tree)
[30,40,50,60,80,10]
        ↓
[30,40,50]        [60,80,10]
   ↓                  ↓
[30] [40,50]      [60] [80,10]
        ↓                ↓
    [40] [50]        [80] [10]



    🔹 Merge [40] & [50]
Compare 40 < 50 → push 40
Remaining → 50

Result: [40,50]



Nice 🔥 — your Merge Sort implementation is correct.
Let’s break it into 🔍 Detailed Iterations (Story Style) so you can explain it clearly in interviews.

✅ Input
[30, 40, 50, 60, 80, 10]

🧠 STEP 1: DIVIDE (Recursion Tree)
[30,40,50,60,80,10]
        ↓
[30,40,50]        [60,80,10]
   ↓                  ↓
[30] [40,50]      [60] [80,10]
        ↓                ↓
    [40] [50]        [80] [10]

🧩 STEP 2: MERGE (Bottom-Up)

Now we start merging sorted arrays 👇

🔹 Merge [40] & [50]
Compare 40 < 50 → push 40
Remaining → 50

Result: [40,50]

🔹 Merge [30] & [40,50]
30 < 40 → push 30
Remaining → [40,50]

Result: [30,40,50]

🔹 Merge [80] & [10]
Compare 80 < 10 ❌ → push 10
Remaining → 80

Result: [10,80]

🔹 Merge [60] & [10,80]
60 < 10 ❌ → push 10
60 < 80 → push 60
Remaining → 80

Result: [10,60,80]

🔥 FINAL MERGE: [30,40,50] & [10,60,80]
Compare 30 < 10 ❌ → push 10
Compare 30 < 60 → push 30
Compare 40 < 60 → push 40
Compare 50 < 60 → push 50
Remaining → [60,80]

✅ Final Sorted Array
[10,30,40,50,60,80]

🔍 FINAL MERGE TABLE (IMPORTANT 🔥)


| Left       | Right      | Action      | Result              |
| ---------- | ---------- | ----------- | ------------------- |
| [30,40,50] | [10,60,80] | 10 smaller  | [10]                |
| [30,40,50] | [60,80]    | 30 smaller  | [10,30]             |
| [40,50]    | [60,80]    | 40 smaller  | [10,30,40]          |
| [50]       | [60,80]    | 50 smaller  | [10,30,40,50]       |
| []         | [60,80]    | append rest | [10,30,40,50,60,80] |



🧠 WHY MERGE SORT WORKS

👉 Divide → Solve → Combine

Divide array → until size 1
Merge → sorted order

⚡ COMPLEXITY (INTERVIEW MUST

  | Case  | Time       |
| ----- | ---------- |
| Best  | O(n log n) |
| Avg   | O(n log n) |
| Worst | O(n log n) |



Space: O(n) (extra array)

🔥 INTERVIEW KILLER LINE

👉 “Merge sort guarantees O(n log n) because it divides the array log n times and merges in linear time.”

🚀 BONUS INSIGHT
Why used in real systems?
Stable sorting ✅
Good for large data
Used in:
External sorting (files)
Distributed systems

If you want next level 🔥


Here is the Merge Sort Recursion Tree (ASCII). This helps a lot in interviews because it clearly shows how Divide → Conquer → Merge works.

1️⃣ Example Array
[38, 27, 43, 10]

2️⃣ Divide Phase (Recursion Tree)
                [38,27,43,10]
                 /        \
          [38,27]        [43,10]
           /    \          /   \
        [38]   [27]     [43]  [10]


Explanation:

First split → two halves

Each half split again

Continue until single elements

Single elements are already sorted.

3️⃣ Merge Phase

Now merging starts from bottom to top.

[38] + [27]  →  [27,38]

[43] + [10]  →  [10,43]


Tree after merge:

        [27,38]      [10,43]
             \        /
           Merge Again


Final merge:

[27,38] + [10,43]

→ [10,27,38,43]

4️⃣ Complete Visualization
Divide Phase
----------------

                [38,27,43,10]
                 /        \
          [38,27]        [43,10]
           /    \          /   \
        [38]   [27]     [43]  [10]


Merge Phase
----------------

[38] + [27] → [27,38]

[43] + [10] → [10,43]

[27,38] + [10,43] → [10,27,38,43]

5️⃣ Why Complexity is O(n log n)

Two things happen:

Height of Tree
log n


Because array keeps splitting.

Example:

8 elements

8
4
2
1


Levels = log₂(n)

Work per Level

Each level processes n elements during merge.

Level 1 → n
Level 2 → n
Level 3 → n

Final Complexity
n × log n

O(n log n)

6️⃣ Interview Trick ⭐

If interviewer asks:

Why merge sort is O(n log n)?

Answer:

The recursion tree has log n levels because the array is divided into halves. At each level we process all n elements during merging. Therefore total time complexity becomes O(n log n).

7️⃣ Real World Usage

Merge sort is used in:

External sorting systems (big files on disk)

Linked list sorting

Parallel processing

Database sorting

✅ Since you are preparing Node.js + system design interviews, the next important thing you should know is:

Why JavaScript .sort() does NOT use merge sort sometimes.

This is a very common FAANG interview question.