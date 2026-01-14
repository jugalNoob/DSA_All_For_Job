🟢 1️⃣ Object (Hash Map) Approach
Your logic (slightly cleaned)
let data = [10, 20, 10, 20, 30];

let seen = {};
let unique = [];
let duplicate = [];

for (let i = 0; i < data.length; i++) {
  let value = data[i];

  if (!seen[value]) {
    seen[value] = true;
    unique.push(value);
  } else {
    duplicate.push(value);
  }
}

console.log(unique);     // [10, 20, 30]
console.log(duplicate);  // [10, 20]

✅ Pros

✔ Works on unsorted arrays
✔ Easy to understand
✔ Can track unique + duplicate
✔ Flexible (counts, flags, etc.)

❌ Cons

❌ Extra memory used
❌ Not in-place

⏱ Complexity

Time: O(n)

Space: O(n)

🔵 2️⃣ Fast / Slow Pointer (Two Pointer)

⚠️ ONLY works on sorted arrays

Your function (correct)
function Duplicar(data) {
  let i = 0;

  for (let j = 1; j < data.length; j++) {
    if (data[i] !== data[j]) {
      i++;
      data[i] = data[j];
    }
  }

  return i + 1;
}

let data = [0, 1, 1, 2, 2, 3, 3, 4, 5];
console.log(Duplicar(data)); // 6

Result in array
data.slice(0, 6); // [0,1,2,3,4,5]

✅ Pros

✔ No extra space
✔ Very fast
✔ In-place modification
✔ Common FAANG interview pattern

❌ Cons

❌ Requires sorted array
❌ Can’t easily list duplicates
❌ Modifies original array

⏱ Complexity

Time: O(n)

Space: O(1) ⭐

🟡 FINAL ANSWER: Which is Better?
🔥 Interview Answer

“It depends on the use case.”

| Scenario             | Best Approach           |
| -------------------- | ----------------------- |
| Unsorted array       | **Object / Map** ✅      |
| Need duplicates list | **Object / Map** ✅      |
| Memory critical      | **Fast–Slow Pointer** ✅ |
| Sorted array         | **Fast–Slow Pointer** ✅ |
| FAANG interviews     | **Fast–Slow Pointer** ⭐ |
| Real-world APIs      | **Object / Map** ⭐      |
