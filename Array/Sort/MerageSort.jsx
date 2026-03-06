1️⃣ Concept (Iterative Merge Sort)

Instead of splitting recursively, we start with subarrays of size 1 and merge them progressively:

Merge pairs of size 1 → size 2

Merge pairs of size 2 → size 4

Repeat until the whole array is merged

Time Complexity: O(n log n)

Space Complexity: O(n) (for temporary array)

Stable: ✅

2️⃣ Iterative Merge Sort Code (JavaScript)
function mergeSortIterative(arr) {
  const n = arr.length;
  let temp = Array(n);

  // Start with size 1, double each iteration
  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
      const mid = Math.min(leftStart + size - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);

      merge(arr, temp, leftStart, mid, rightEnd);
    }
  }

  return arr;
}

function merge(arr, temp, leftStart, mid, rightEnd) {
  let i = leftStart, j = mid + 1, k = leftStart;

  while (i <= mid && j <= rightEnd) {
    if (arr[i] <= arr[j]) temp[k++] = arr[i++];
    else temp[k++] = arr[j++];
  }

  while (i <= mid) temp[k++] = arr[i++];
  while (j <= rightEnd) temp[k++] = arr[j++];

  // Copy back to original array
  for (let x = leftStart; x <= rightEnd; x++) {
    arr[x] = temp[x];
  }
}

// Example:
let data = [6, 5, 4, 1, 3, 2];
console.log(mergeSortIterative(data)); // [1, 2, 3, 4, 5, 6]

3️⃣ How It Works Step-by-Step

Array: [6, 5, 4, 1]

Step 1: size = 1 → merge [6] & [5], [4] & [1] → [5,6,1,4]
Step 2: size = 2 → merge [5,6] & [1,4] → [1,4,5,6]
Done!

Each pass doubles the size of subarrays

No recursion used

4️⃣ Interview Tips

Mention bottom-up approach

Explain loop for sizes and merge

Highlight stable & O(n log n)

Show a small array example on paper for clarity

Compare with recursive merge sort → same complexity, no stack recursion

💡 Extra Edge Tip:

If you’re asked for in-place iterative merge sort, that’s advanced but rare. Most interviewers accept this version.