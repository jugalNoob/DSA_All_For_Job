function duplicated(arr) {
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            arr[++i] = arr[j];
        }
    }

    arr.length = i + 1; // shrink array
    return arr;
}


console.log(duplicated([0 , 1 , 2 , 2 , 3 , 4 , 5]))


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
