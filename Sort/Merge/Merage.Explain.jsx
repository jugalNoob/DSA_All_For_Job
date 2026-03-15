function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;                  // base case: 0 या 1 element → पहले से sorted
    }

    // Divide
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));    // बायां हिस्सा
    const right = mergeSort(arr.slice(mid));      // दायां हिस्सा

    // Conquer + Merge
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0;   // left array का pointer
    let j = 0;   // right array का pointer

    // दोनों arrays से छोटा element लेते जाओ
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // बचे हुए elements जोड़ दो (क्योंकि एक array खत्म हो गया)
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Test
let data = [38, 27, 43, 10, 34];
console.log(mergeSort(data));  
// Output: [10, 27, 34, 38, 43]



1️⃣ What is Merge Sort (Simple English)

Merge Sort is a Divide and Conquer sorting algorithm.

It works in three steps:

Divide – Split the array into two halves

Conquer – Recursively sort each half

Merge – Merge the two sorted halves into one sorted array

2️⃣ Example

Array:

[30, 40, 50, 60, 80, 10]


Split:

[30,40,50]   [60,80,10]


Split again:

[30] [40,50]    [60] [80,10]


Now merge sorted:

[30] + [40] → [30,40]

[30,40] + [50] → [30,40,50]

[60] + [10] → [10,60]

[10,60] + [80] → [10,60,80]

Final merge:

[30,40,50] + [10,60,80]
↓
[10,30,40,50,60,80]

3️⃣ Time Complexity (Very Important)


| Case    | Complexity     |
| ------- | -------------- |
| Best    | **O(n log n)** |
| Average | **O(n log n)** |
| Worst   | **O(n log n)** |



Merge sort is very consistent.

4️⃣ Space Complexity
O(n)


Because we create temporary arrays during merge.




5️⃣ Why Companies Use Merge Sort

Merge sort is useful when:

✔ Large datasets
✔ External sorting (disk files)
✔ Linked list sorting
✔ Stable sorting needed

6️⃣ Stability

Merge sort is a stable sorting algorithm.

Example:

(John, 90)
(Aman, 90)


After sorting by marks:

(John, 90)
(Aman, 90)


Order remains the same.

7️⃣ When NOT to Use Merge Sort

Merge sort is not ideal when:

Memory is limited

In-place sorting is required

Because it uses extra memory.

8️⃣ Interview 1-Line Answer

You can say:

"Merge sort is a divide and conquer algorithm that recursively splits the array into halves, sorts them, and merges the sorted halves. It guarantees O(n log n) time complexity and is a stable sorting algorithm."