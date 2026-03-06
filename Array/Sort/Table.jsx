| Algorithm          | Type               | Time Complexity                      | Space    | Stable? | Notes / Use Case                                                                |
| ------------------ | ------------------ | ------------------------------------ | -------- | ------- | ------------------------------------------------------------------------------- |
| **Bubble Sort**    | Comparison         | O(n²) / O(n²) / O(n)                 | O(1)     | Yes     | Simple, easy to explain. Best for teaching or nearly sorted small arrays.       |
| **Selection Sort** | Comparison         | O(n²) / O(n²) / O(n²)                | O(1)     | No      | Fewer swaps than bubble. Good for small arrays, in-place.                       |
| **Insertion Sort** | Comparison         | O(n²) / O(n²) / O(n)                 | O(1)     | Yes     | Adaptive: fast for nearly sorted arrays. Can be used in hybrid sorts (TimSort). |
| **Merge Sort**     | Divide & Conquer   | O(n log n) / O(n log n) / O(n log n) | O(n)     | Yes     | Stable, works well with linked lists or external sorting. Always O(n log n).    |
| **Quick Sort**     | Divide & Conquer   | O(n log n) / O(n²) / O(n log n)      | O(log n) | No      | Fastest practical sort for arrays. Randomized pivot avoids worst case.          |
| **Heap Sort**      | Comparison / Heap  | O(n log n) / O(n log n) / O(n log n) | O(1)     | No      | Good for in-place sorting without recursion stack. Not stable.                  |
| **Counting Sort**  | Non-comparison     | O(n + k) / O(n + k)                  | O(k)     | Yes     | For integers in a limited range 0…k. Stable, linear time.                       |
| **Radix Sort**     | Non-comparison     | O(n * d)                             | O(n + k) | Yes     | Works with integers or strings. Uses counting sort as subroutine.               |
| **Bucket Sort**    | Non-comparison     | O(n + k)                             | O(n)     | Yes     | Best when input is uniformly distributed. Like distributing into buckets.       |
| **Cyclic Sort**    | In-place / Special | O(n)                                 | O(1)     | Yes     | Works for arrays with numbers 1…n (unique). Very fast, linear.                  |
| **Sleep Sort**     | Fun / Async        | O(max(num))                          | O(n)     | N/A     | Uses async timers to “sort” numbers. Not practical, just fun for interviews.    |




Patterns & Tips for Interviews

Know Which to Use When

Small arrays: insertion, selection, bubble

Large arrays / guaranteed speed: merge, quick

Known range integers: counting, radix, bucket

1…n unique numbers: cyclic

Always Mention

Stability: important for duplicates

In-place: saves memory

Worst-case vs average-case complexity

Hybrid Algorithms

TimSort: merges insertion sort + merge sort (used in JS/Java/Python)

QuickSort + insertion sort for small partitions

Explain Thought Process

Step 1: choose algorithm type

Step 2: explain time/space

Step 3: handle edge cases (duplicates, negative numbers, nearly sorted arrays)

💡 Example Question: “Sort an array 1…n in O(n)”

Use Cyclic Sort → instantly linear and interview-worthy

Bonus: mention handling duplicates or missing numbers