
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

 let result data.length=i+1;

 return result

  
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
