function dutchNationalFlag(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[high], arr[mid]] = [arr[mid], arr[high]];
            high--;
        }
    }
    return arr;
}

console.log(dutchNationalFlag([2, 0, 1, 2, 1, 0])); // [0, 0, 1, 1, 2, 2]



✅ Let’s break it down and show how the array is sorted step by step using the Dutch National Flag algorithm (also called the 0-1-2 sorting algorithm).

Your code is already correct 👌 — here’s what happens internally for the array:

[2, 0, 1, 2, 1, 0]

🧠 Initial Pointers

low = 0

mid = 0

high = 5 (last index)

📌 Step 1

arr[mid] = 2 → swap arr[mid] with arr[high], high--

Swap arr[0] and arr[5]
[0, 0, 1, 2, 1, 2]
low=0, mid=0, high=4

📌 Step 2

arr[mid] = 0 → swap with arr[low], increment both low, mid

Swap arr[0] and arr[0]  (no actual change)
[0, 0, 1, 2, 1, 2]
low=1, mid=1, high=4

📌 Step 3

arr[mid] = 0 → swap with arr[low] again

Swap arr[1] and arr[1]
[0, 0, 1, 2, 1, 2]
low=2, mid=2, high=4

📌 Step 4

arr[mid] = 1 → just mid++

[0, 0, 1, 2, 1, 2]
low=2, mid=3, high=4

📌 Step 5

arr[mid] = 2 → swap with arr[high], high--

Swap arr[3] and arr[4]
[0, 0, 1, 1, 2, 2]
low=2, mid=3, high=3

📌 Step 6

arr[mid] = 1 → mid++

[0, 0, 1, 1, 2, 2]
low=2, mid=4, high=3


Loop ends because mid > high.

✅ Final Sorted Array
[0, 0, 1, 1, 2, 2]

📌 Output:
[0, 0, 1, 1, 2, 2]

📝 Algorithm Summary

0 → left (swap with low)

1 → middle (just move on)

2 → right (swap with high)

⏱ Time Complexity: O(n)
💾 Space Complexity: O(1) — in-place

📝 Real-World Analogy

Finding your lost key in the house:

Brute Force → You open every drawer, cupboard, box one by one until you find it.

Optimized → You remember where you last used it and search there first 😄
✅ Summary

| Feature    | Brute Force                 | Optimized                      |
| ---------- | --------------------------- | ------------------------------ |
| Approach   | Try everything              | Use patterns / data structures |
| Speed      | Slow (O(n²) or worse)       | Faster (O(n) or better)        |
| Difficulty | Easy to write               | Needs more thinking            |
| Use Cases  | Small input, prototype code | Large input, final solution    |
