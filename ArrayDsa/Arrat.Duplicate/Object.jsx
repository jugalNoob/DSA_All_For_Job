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
