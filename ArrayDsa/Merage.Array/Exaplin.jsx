
// // | Question                   | Answer                                                                                 |
// // | -------------------------- | -------------------------------------------------------------------------------------- |
// // | Does it run right to left? | ❌ No                                                                                   |
// // | Does it run left to right? | ✅ Yes                                                                                  |
// // | Why?                       | Because `for (let i = 0; i < data.length; i++)` starts from index 0 and increments i++ |

let data1=[3 , 7 , 12,90 ]
let data2=[4 , 10 , 11]
let data3=[]

let d1=0; let d2=0; let d3=0;
while(d1<data1.length && d2<data2.length){
    if(data1[d1] < data2[d2]){
        data3[d3]=data1[d1]
        d1++
        console.warn(data3[d3])
    }else{
        data3[d3]=data2[d2]
        d2++
console.warn(data3[d3])
    }    
    d3++;
}
console.log(data3)




while(d1<data1.length){
    data3[d3]=data1[d1]
    d1++
    d3++
}

console.log(data3)




// Visual diagrams to understand it deeper
1️⃣ Using ES6 Spread Operator / concat()
let data=[10, 20, 30, 40, 50]
let data1=[60 , 70 , 80 , 90]

let data3=[...data , ...data1]

let data4=data.concat(data1)
console.log(data4)
console.log(data3)
✅ Both do the same thing: merge arrays without manually looping.





let count=0
let data1=[1 , 2  , 2 , 3]
let data2=[7 , 8 , 9 , 10]
let data3=[]
for(let i=0; i<data1.length; i++){
    count ++
  //  console.log(data3 ,'data3') --> perfect way to understand how work
    // --->> 
    data3[i]=data1[i]   // d
    // ata3[0]=data[0]
    // data[1]=data[1]
    //data[2]=data[2]
    //data[3]=data[2]
}
// console.log(count , 'count')
// console.log(data3)

for(let i=0; i<data2.length; i++){
 
    
console.log(data1.length + i);  

    | i (loop counter) | data1.length | Expression `data1.length + i` | Output printed |
| ---------------- | ------------ | ----------------------------- | -------------- |
| 0                | 4            | 4 + 0 = 4                     | 4              |
| 1                | 4            | 4 + 1 = 5                     | 5              |
| 2                | 4            | 4 + 2 = 6                     | 6              |
| 3                | 4            | 4 + 3 = 7                     | 7              |


    

    data3[data1.length+i]=data2[i]


    data3[data1.length + i] = data2[i];
At i = 0 → we write into index 4

At i = 1 → index 5

At i = 2 → index 6

At i = 3 → index 7
    
We’ll track variables (i, data1.length + i, data2[i], data3 after update):


| i | data1.length + i | data2\[i] | Action          | data3 after step            |
| - | ---------------- | --------- | --------------- | --------------------------- |
| 0 | 4                | 7         | `data3[4] = 7`  | `[1, 2, 2, 3, 7]`           |
| 1 | 5                | 8         | `data3[5] = 8`  | `[1, 2, 2, 3, 7, 8]`        |
| 2 | 6                | 9         | `data3[6] = 9`  | `[1, 2, 2, 3, 7, 8, 9]`     |
| 3 | 7                | 10        | `data3[7] = 10` | `[1, 2, 2, 3, 7, 8, 9, 10]` |



| i | data1.length + i | data2\[i] | Action          | data3 after step            |
| - | ---------------- | --------- | --------------- | --------------------------- |
| 0 | 4                | 7         | `data3[4] = 7`  | `[1, 2, 2, 3, 7]`           |
| 1 | 5                | 8         | `data3[5] = 8`  | `[1, 2, 2, 3, 7, 8]`        |
| 2 | 6                | 9         | `data3[6] = 9`  | `[1, 2, 2, 3, 7, 8, 9]`     |
| 3 | 7                | 10        | `data3[7] = 10` | `[1, 2, 2, 3, 7, 8, 9, 10]` |


    // data3[i]=data2[i]
}
console.log(data3)

// 🧠 Why data1.length + i?
// You already filled the first 4 indexes (0 to 3) of data3 with data1.
// So, to start adding data2 after the last index of data3, you must start from index


🔁 Let's Walk Through the Loop:

| i | data2\[i] | data1.length + i | Assignment      | data3 after step           |
| - | --------- | ---------------- | --------------- | -------------------------- |
| 0 | 7         | 4                | `data3[4] = 7`  | \[1, 2, 2, 3, 7]           |
| 1 | 8         | 5                | `data3[5] = 8`  | \[1, 2, 2, 3, 7, 8]        |
| 2 | 9         | 6                | `data3[6] = 9`  | \[1, 2, 2, 3, 7, 8, 9]     |
| 3 | 10        | 7                | `data3[7] = 10` | \[1, 2, 2, 3, 7, 8, 9, 10] |




3️⃣ Merge Arrays In-Place (No Extra Space)

Problem: Merge two sorted arrays into one without extra space.

Example: arr1 = [1,3,5,0,0,0], arr2 = [2,4,6] → merge into arr1.

Approach: Start filling from the end:

let i = 2, j = 2, k = 5; // last indices
while(i>=0 && j>=0){
    if(arr1[i] > arr2[j]) arr1[k--] = arr1[i--];
    else arr1[k--] = arr2[j--];
}
while(j>=0) arr1[k--] = arr2[j--];
console.log(arr1); // [1,2,3,4,5,6]


Time Complexity: O(n + m)

Space Complexity: O(1)

4️⃣ Merge k Sorted Arrays

Problem: Merge k sorted arrays into one sorted array.

Approach:

Method 1: Compare one by one → O(k*n)

Method 2: Use Min-Heap / Priority Queue → O(n log k)

Method 3: Divide & Conquer (merge pairs recursively)

Example:

let arrays = [[1,4,7],[2,5,8],[3,6,9]];
// Merge → [1,2,3,4,5,6,7,8,9]




| # | Problem                                          | Input                                | Output              | Approach / Algorithm                                                                                                                   | Time Complexity          | Space Complexity |
| - | ------------------------------------------------ | ------------------------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------- |
| 1 | Merge two unsorted arrays                        | arr1 = [3,1,5], arr2 = [2,4,6]       | [3,1,5,2,4,6]       | Use `concat()` or spread operator (`[...arr1,...arr2]`) or manual loop                                                                 | O(n+m)                   | O(n+m)           |
| 2 | Merge two sorted arrays                          | arr1 = [1,3,5], arr2 = [2,4,6]       | [1,2,3,4,5,6]       | Two pointers: compare elements from start of both arrays and insert smaller one                                                        | O(n+m)                   | O(n+m)           |
| 3 | Merge sorted arrays in-place                     | arr1 = [1,3,5,0,0,0], arr2 = [2,4,6] | [1,2,3,4,5,6]       | Start filling arr1 from the end, compare last elements of both arrays                                                                  | O(n+m)                   | O(1)             |
| 4 | Merge k sorted arrays                            | arrays = [[1,4,7],[2,5,8],[3,6,9]]   | [1,2,3,4,5,6,7,8,9] | Method 1: Compare one by one (O(k*n))<br>Method 2: Min-heap / priority queue (O(n log k))<br>Method 3: Divide & conquer pairwise merge | O(n log k) (heap/divide) | O(n)             |
| 5 | Merge arrays alternating elements                | arr1 = [1,3,5], arr2 = [2,4,6]       | [1,2,3,4,5,6]       | Use a loop and pick elements alternately from both arrays                                                                              | O(n+m)                   | O(n+m)           |
| 6 | Merge arrays with unique elements                | arr1 = [1,2,2,3], arr2 = [2,3,4]     | [1,2,3,4]           | Use a Set or hashmap to track duplicates while merging                                                                                 | O(n+m)                   | O(n+m)           |
| 7 | Merge overlapping intervals (array of intervals) | intervals = [[1,3],[2,6],[8,10]]     | [[1,6],[8,10]]      | Sort intervals by start time, iterate and merge overlapping intervals                                                                  | O(n log n)               | O(n)             |
| 8 | Merge arrays by sum or custom rule               | arr1 = [1,2,3], arr2 = [4,5,6]       | [5,7,9]             | Loop through arrays and combine elements according to rule (sum, multiply, etc.)                                                       | O(n)                     | O(n)             |
