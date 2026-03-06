✅ Method 1 — In-Place (Sort + Two Pointer)
function removeDuplicate(arr) {
    if (arr.length === 0) return [];

    // Step 1: sort in-place
    arr.sort((a, b) => a - b);

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            arr[++i] = arr[j];
        }
    }

    arr.length = i + 1;  // shrink array
    return arr;
}

console.log(removeDuplicate([3, 1, 2, 2, 4, 3]));

✅ Output:
[1, 2, 3, 4]

⏱ Complexity

Sorting → O(n log n)

Two pointer → O(n)

Space → O(1)

Interview answer:

"Without extra space, best approach is sorting + two pointers."