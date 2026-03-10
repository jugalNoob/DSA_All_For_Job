function bubbleSortOptimized(arr) {
    let n = arr.length;
    let swapped;
    
    do {
        swapped = false;
        
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // modern swap
                swapped = true;
            }
        }
        
        n--;  // After each pass, last element is in correct position
    } while (swapped);
    
    return arr;
}



Your code is Optimized Bubble Sort.
The improvement is the swapped flag, which stops the algorithm early if the array is already sorted. 👍

Let’s understand step-by-step simply.

1️⃣ Your Array
let data = [60, 40, 20]


Goal:

[20, 40, 60]

2️⃣ Variables
let n = arr.length

n = 3

let swapped


This checks:

Did we swap anything in this pass?


If no swap happens → array already sorted → stop early.

3️⃣ do...while Loop
do {
   ...
} while(swapped)


Meaning:

Run at least one pass
Continue only if swapping happened

4️⃣ First Pass

Array:

[60, 40, 20]


Set:

swapped = false


Loop:

for (let i = 0; i < n - 1; i++)

i < 2

i = 0

Compare:

60 > 40  ✅


Swap:

[40, 60, 20]

swapped = true

i = 1

Compare:

60 > 20  ✅


Swap:

[40, 20, 60]


After pass:

largest element → 60


Now:

n--

n = 2


Because last element already sorted.

5️⃣ Second Pass

Array:

[40, 20, 60]


Reset:

swapped = false


Loop:

i < 1

i = 0

Compare:

40 > 20 ✅


Swap:

[20, 40, 60]

swapped = true


After pass:

n = 1

6️⃣ Third Pass

Array:

[20, 40, 60]


Reset:

swapped = false


Loop:

i < 0


No comparisons.

Since:

swapped = false


Loop stops.

7️⃣ Final Output
[20, 40, 60]

8️⃣ Why This Version Is Better

Normal Bubble Sort:

Always runs n² comparisons


Optimized Bubble Sort:

Stops early if array already sorted


Example:

[10, 20, 30]


Normal Bubble Sort:

many unnecessary comparisons


Optimized version:

one pass → no swap → stop


Best case:

O(n)

9️⃣ Complexity
Case	Time
Best	O(n)
Average	O(n²)
Worst	O(n²)

Space:

O(1)

🔟 Modern Swap

You used a destructuring swap:

[arr[i], arr[i+1]] = [arr[i+1], arr[i]]


This replaces:

temp variable


Very clean 👍

✅ Your optimized bubble sort implementation is correct and interview-ready.

If you want, I can also show you the 3 sorting algorithms FAANG interviews prefer over Bubble Sort:

1️⃣ Merge Sort (very important)
2️⃣ Quick Sort (most asked)
3️⃣ Heap Sort (advanced interviews)

I can explain them visually like puzzles so they becom