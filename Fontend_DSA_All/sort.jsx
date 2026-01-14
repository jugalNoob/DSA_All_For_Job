📌 Sorting Algorithms for Frontend DSA
🔹 Basic Sorting

Bubble Sort → Compare adjacent elements and swap until sorted. (Easy, but not efficient — O(n²)).

Selection Sort → Repeatedly pick the smallest element and move to front. (Also O(n²)).

Insertion Sort → Insert each element into its correct place. (Good for small or nearly sorted arrays).

🔹 Efficient Sorting

Merge Sort → Divide array into halves, sort them, then merge. (O(n log n), stable).

Quick Sort → Pick a pivot, partition, then recursively sort. (O(n log n) average, O(n²) worst).

Heap Sort → Build a heap, extract max/min repeatedly. (O(n log n)).

🔹 Special/Useful for Frontend

Counting Sort / Bucket Sort → For limited integer ranges (like ratings, votes).

Sort by Custom Key → Example: Sort by name length, or by date in UI.

Stable vs Unstable Sort → Important when sorting UI lists where order of equal items matters.

🔹 Real-World Frontend Uses

E-commerce: Sort products by price, rating, relevance.

Chat Apps: Sort messages by timestamp.

UI Tables: Click column header → sort rows.

Autocomplete: Sort suggestions by frequency/popularity.