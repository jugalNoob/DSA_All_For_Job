Merge Sort is a very important Divide and Conquer sorting algorithm.

Idea:

1️⃣ Divide array into two halves
2️⃣ Sort each half
3️⃣ Merge the sorted halves


Time Complexity:

O(n log n)


Much faster than Bubble / Selection / Insertion (O(n²)).

1️⃣ Example Array
[8, 3, 5, 2]

2️⃣ Step 1 — Divide

Split array until single elements remain.

[8,3,5,2]

      split

[8,3]     [5,2]

 split     split

[8] [3]   [5] [2]


Single elements are already sorted.

3️⃣ Step 2 — Merge Sorted Arrays

Now merge them.

Merge [8] and [3]
compare 8 and 3

3 is smaller


Result:

[3,8]

Merge [5] and [2]
compare 5 and 2


Result:

[2,5]

Final Merge

Merge:

[3,8]  and  [2,5]


Compare step-by-step:

2 → smallest
3 → next
5 → next
8 → last


Final result:

[2,3,5,8]

4️⃣ Visual Tree
        [8,3,5,2]
        /      \
     [8,3]    [5,2]
     /  \      /  \
   [8] [3]  [5]  [2]

Merge

   [3,8]    [2,5]

Final Merge

     [2,3,5,8]

5️⃣ JavaScript Implementation
Merge Function
function merge(left, right){

 let result=[]
 let i=0
 let j=0

 while(i < left.length && j < right.length){

   if(left[i] < right[j]){
      result.push(left[i])
      i++
   }else{
      result.push(right[j])
      j++
   }
 }

 return result.concat(left.slice(i)).concat(right.slice(j))
}

Merge Sort Function
function mergeSort(arr){

 if(arr.length <= 1){
   return arr
 }

 let mid = Math.floor(arr.length/2)

 let left = mergeSort(arr.slice(0,mid))
 let right = mergeSort(arr.slice(mid))

 return merge(left,right)
}

Run
let data=[8,3,5,2]

console.log(mergeSort(data))


Output:

[2,3,5,8]

6️⃣ Time Complexity

Merge Sort splits array log n times.

Each level processes n elements.

So:

O(n log n)

Case	Time
Best	O(n log n)
Average	O(n log n)
Worst	O(n log n)
7️⃣ Space Complexity
O(n)


Because it creates new arrays during merge.

8️⃣ Why Companies Like Merge Sort

Advantages:

✔ Stable sort
✔ Guaranteed performance
✔ Works well for large datasets

Used in:

• Database sorting
• External sorting
• Big data systems