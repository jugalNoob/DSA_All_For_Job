

||||||||qucik sort ||||||||||||||||| --------------------------------------------
function quickSort(arr) {
  if (arr.length < 2) return arr
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
const arr = [8, 20, -2, 4, -6]
console.log(quickSort(arr)) // [-6, -2, 4, 8, 20]



Ah! You want how Quick Sort works in a “step-by-step inverted view” — basically like looking at the recursion from top to bottom or tree-style visualization. Let’s do it for your array [20, 30, 40, 10].

Step 0: Original Array
Array: [20, 30, 40, 10]
Pivot = 10
Left (< pivot)  = []
Right (>= pivot) = [20, 30, 40]

Step 1: Sort Right [20, 30, 40]
Array: [20, 30, 40]
Pivot = 40
Left = [20, 30]
Right = []

Step 2: Sort Left [20, 30]
Array: [20, 30]
Pivot = 30
Left = [20]
Right = []

Step 3: Base Cases
Left = [20] → already sorted
Right = [] → already sorted
Combine → [20, 30]

Step 4: Combine with Step 1 Pivot
Left = [20, 30]
Pivot = 40
Right = []
Combine → [20, 30, 40]

Step 5: Combine with Original Pivot
Left = [] 
Pivot = 10
Right = [20, 30, 40]
Combine → [10, 20, 30, 40] ✅ Sorted

🔑 Visualization as a “Recursion Tree”
[20,30,40,10]  pivot=10
   /      \
 []        [20,30,40] pivot=40
           /       \
       [20,30]      []
       pivot=30
       /     \
     [20]     []


Leaves → base case arrays [20] or []

Combine upwards → [20,30] → [20,30,40] → [10,20,30,40]

This top-down view shows exactly how the recursion splits the array, and then the bottom-up combination produces the final sorted array.


🔹 Quick Sort Concept

Pick a pivot (you chose the last element).

Partition the remaining elements into two arrays:

left → elements less than pivot

right → elements greater than or equal to pivot

Recursively quicksort the left and right arrays.

Combine results: sortedLeft + pivot + sortedRight.

Step-by-step Execution
Call 1: quickSort([8, 20, -2, 4, -6])

Pivot = -6

Loop over [8, 20, -2, 4]:

8 > -6 → goes to right

20 > -6 → goes to right

-2 > -6 → goes to right

4 > -6 → goes to right

Left = [], Right = [8, 20, -2, 4]

Return: quickSort([]) + [-6] + quickSort([8, 20, -2, 4])

Call 2: quickSort([]) → returns [] (base case)
Call 3: quickSort([8, 20, -2, 4])

Pivot = 4

Loop over [8, 20, -2]:

8 > 4 → right

20 > 4 → right

-2 < 4 → left

Left = [-2], Right = [8, 20]

Return: quickSort([-2]) + [4] + quickSort([8, 20])

Call 4: quickSort([-2]) → returns [-2] (base case)
Call 5: quickSort([8, 20])

Pivot = 20

Loop over [8]:

8 < 20 → left

Left = [8], Right = []

Return: quickSort([8]) + [20] + quickSort([])

Call 6: quickSort([8]) → returns [8] (base case)
Call 7: quickSort([]) → returns []
Putting it all together:

From Call 5: [8] + [20] + [] → [8, 20]

From Call 3: [-2] + [4] + [8, 20] → [-2, 4, 8, 20]

From Call 1: [] + [-6] + [-2, 4, 8, 20] → [-6, -2, 4, 8, 20]





[8, 20, -2, 4, -6]
pivot = -6
left:  []
right: [8, 20, -2, 4]
   |
   ├── quickSort([]) → []
   └── quickSort([8, 20, -2, 4])
         pivot = 4
         left:  [-2]
         right: [8, 20]
             |
             ├── quickSort([-2]) → [-2]
             └── quickSort([8, 20])
                   pivot = 20
                   left:  [8]
                   right: []
                       ├── quickSort([8]) → [8]
                       └── quickSort([])  → []




function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = partition(arr, left, right)
    quickSort(arr, left, pivot - 1)
    quickSort(arr, pivot + 1, right)
  }
  return arr
}

function partition(arr, left, right) {
  const pivot = arr[right]
  let i = left
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, right)
  return i
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const arr = [8, 20, -2, 4, -6]
quickSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]