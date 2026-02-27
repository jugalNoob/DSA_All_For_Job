2️⃣ Optimization #2: Binary Insertion Sort (fewer comparisons)

Instead of scanning left one by one, use binary search to find the correct position.

⚠️ Note:

Comparisons reduce to O(log n)

Shifting is still O(n)

Binary Search Helper
function binarySearch(arr, value, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

Binary Insertion Sort
let arr = [9, 2, 1, 5, 7];

for (let i = 1; i < arr.length; i++) {
  let current = arr[i];

  // find index using binary search
  let pos = binarySearch(arr, current, 0, i - 1);

  // shift elements
  for (let j = i - 1; j >= pos; j--) {
    arr[j + 1] = arr[j];
  }

  arr[pos] = current;
}

console.log(arr); // [1, 2, 5, 7, 9]


| Version          | Comparisons | Shifts | Best Use              |
| ---------------- | ----------- | ------ | --------------------- |
| Normal Insertion | O(n²)       | O(n²)  | Small arrays          |
| Optimized Skip   | O(n) best   | O(n²)  | Nearly sorted         |
| Binary Insertion | O(n log n)  | O(n²)  | Expensive comparisons |
