🧠 Step 1: Identify Problem Type
🔹 1. PAIR Problems

👉 Looking for 2 elements
Examples:

Two Sum

Pair with target difference

Pair with given sum

❓ Ask: Is array sorted?
✅ YES → Use Two Pointer

Why?

Sorted array allows left & right movement

Pattern:

let l = 0, r = arr.length - 1;

while (l < r) {
    let sum = arr[l] + arr[r];

    if (sum === target) return true;
    else if (sum < target) l++;
    else r--;
}


💡 Use when:

Sorted array

Find pair sum/difference

❌ NO → Use Hash Map

Why?

Fast lookup (O(1))

Pattern:

let map = new Map();

for (let num of arr) {
    let diff = target - num;

    if (map.has(diff)) return true;

    map.set(num, true);
}


💡 Use when:

Unsorted array

Need fast lookup