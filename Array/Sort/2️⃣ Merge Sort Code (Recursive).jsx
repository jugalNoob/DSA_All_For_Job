2️⃣ Merge Sort Code (Recursive)
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case: 1 element is sorted

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);   // left half
  const right = arr.slice(mid);     // right half

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  // Merge in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}

// Example:
const data = [6, 5, 4, 1, 3, 2];
console.log(mergeSort(data)); // [1, 2, 3, 4, 5, 6]

3️⃣ Step-by-Step Example

Array: [6, 5, 4, 1]

Split → [6, 5] & [4, 1]

Split again → [6], [5], [4], [1]

Merge [6] + [5] → [5, 6]

Merge [4] + [1] → [1, 4]

Merge [5, 6] + [1, 4] → [1, 4, 5, 6]

4️⃣ Interview Tips for Merge Sort

Always mention Divide & Conquer

Explain recursion base case

Show merging step clearly

Mention stability → preserves duplicates

Time complexity explanation:

log n splits

n comparisons at each level → O(n log n)