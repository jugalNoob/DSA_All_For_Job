🚀 Optimized Insertion Sort
1️⃣ Optimization #1: Skip shifting if already sorted

If the current element is already greater than the previous, no work needed.

Optimized Code
let arr = [9, 2, 1, 5, 7];

for (let i = 1; i < arr.length; i++) {
  let current = arr[i];

  // 🔥 optimization: already in correct place
  if (arr[i - 1] <= current) continue;

  let j = i - 1;

  while (j >= 0 && arr[j] > current) {
    arr[j + 1] = arr[j];
    j--;
  }

  arr[j + 1] = current;
}

console.log(arr); // [1, 2, 5, 7, 9]

Why this is faster

Best case (already sorted array) → O(n)

Avoids unnecessary shifting