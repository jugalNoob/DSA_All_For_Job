✅ If you want, I can also show the internal V8 sorting strategy (why JavaScript sometimes uses QuickSort + TimSort).
That is a very strong FAANG interview topic and most developers don’t know it.



TimSort is the algorithm used internally by languages like Python and modern JavaScript engines (V8 used by Google products such as Chrome and Node.js). It is a hybrid algorithm combining Merge Sort + Insertion Sort and optimized for real-world partially sorted data.

I’ll show:

1️⃣ Idea of TimSort
2️⃣ Simplified JavaScript code
3️⃣ Step-by-step explanation
4️⃣ Why companies use it

1️⃣ Core Idea of TimSort

TimSort works in 3 phases:

1. Find small sorted chunks (called runs)

Example array:

[5,7,9,1,2,3,8,10]


Runs detected:

[5,7,9]
[1,2,3]
[8,10]

2. Sort small runs using Insertion Sort

Insertion sort is very fast for small arrays.

3. Merge runs using Merge Sort

Runs are merged until one sorted array remains.

2️⃣ Simplified TimSort Code (JavaScript)

This is a learning version (real implementation is more complex).

const RUN = 32

function insertionSort(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    let temp = arr[i]
    let j = i - 1

    while (j >= left && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = temp
  }
}

function merge(arr, l, m, r) {
  let left = arr.slice(l, m + 1)
  let right = arr.slice(m + 1, r + 1)

  let i = 0
  let j = 0
  let k = l

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i]
      i++
    } else {
      arr[k] = right[j]
      j++
    }
    k++
  }

  while (i < left.length) {
    arr[k++] = left[i++]
  }

  while (j < right.length) {
    arr[k++] = right[j++]
  }
}

function timSort(arr) {
  let n = arr.length

  // Step 1: sort small runs
  for (let i = 0; i < n; i += RUN) {
    insertionSort(arr, i, Math.min(i + RUN - 1, n - 1))
  }

  // Step 2: merge runs
  for (let size = RUN; size < n; size = 2 * size) {

    for (let left = 0; left < n; left += 2 * size) {

      let mid = left + size - 1
      let right = Math.min(left + 2 * size - 1, n - 1)

      if (mid < right) {
        merge(arr, left, mid, right)
      }

    }

  }

  return arr
}

console.log(timSort([5,21,7,23,19]))


Output

[5,7,19,21,23]

3️⃣ How TimSort Works (Simple)

Example:

[8,3,7,4,9,2,6,5]

Step 1 – Divide into runs
[8,3,7,4]
[9,2,6,5]

Step 2 – Insertion sort
[3,4,7,8]
[2,5,6,9]

Step 3 – Merge
[2,3,4,5,6,7,8,9]

4️⃣ Time Complexity
Case	Complexity
Best	O(n)
Average	O(n log n)
Worst	O(n log n)

Best case is very fast when data is already partially sorted.

5️⃣ Why Big Companies Use TimSort

Real datasets often look like this:

[1,2,3,4,5,100,101,102]


Already mostly sorted.

TimSort detects this and avoids unnecessary work.

That’s why it is used in:

Python sorting

V8 JavaScript Engine

applications built by Netflix and Uber when using JS/Python environments

6️⃣ Interview One-Line Answer

You can say:

TimSort is a hybrid sorting algorithm combining merge sort and insertion sort. It detects naturally sorted sequences called runs and merges them efficiently, making it very fast for real-world partially sorted data.