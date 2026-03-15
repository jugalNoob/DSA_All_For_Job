The Count Inversions problem means:

Count the number of pairs (i, j) such that
i < j and arr[i] > arr[j].

This tells how far the array is from being sorted.

Example

Array

[8, 4, 2, 1]


Inversions:

(8,4)
(8,2)
(8,1)
(4,2)
(4,1)
(2,1)


Total:

6 inversions

Method 1️⃣ Brute Force

Check all pairs.

Code
let arr = [8,4,2,1]

let count = 0

for(let i=0;i<arr.length;i++){

    for(let j=i+1;j<arr.length;j++){

        if(arr[i] > arr[j]){
            count++
        }

    }

}

console.log("Inversions:", count)

Output
Inversions: 6

Step Table

Array

[8,4,2,1]

| i | j | Pair  | Inversion |
| - | - | ----- | --------- |
| 0 | 1 | (8,4) | ✅         |
| 0 | 2 | (8,2) | ✅         |
| 0 | 3 | (8,1) | ✅         |
| 1 | 2 | (4,2) | ✅         |
| 1 | 3 | (4,1) | ✅         |
| 2 | 3 | (2,1) | ✅         |



Total

6

Time Complexity
O(n²)


Not efficient for large arrays.

Method 2️⃣ Optimal (Merge Sort)

Time Complexity

O(n log n)

Code
function merge(arr,left,mid,right){
    let temp=[]
    let i=left
    let j=mid+1
    let inv=0

    while(i<=mid && j<=right){

        if(arr[i] <= arr[j]){
            temp.push(arr[i])
            i++
        }else{
            temp.push(arr[j])
            inv += (mid - i + 1)
            j++
        }

    }

    while(i<=mid) temp.push(arr[i++])
    while(j<=right) temp.push(arr[j++])

    for(let k=left;k<=right;k++){
        arr[k] = temp[k-left]
    }

    return inv
}

function mergeSort(arr,left,right){

    if(left>=right) return 0

    let mid = Math.floor((left+right)/2)

    let inv=0

    inv += mergeSort(arr,left,mid)
    inv += mergeSort(arr,mid+1,right)
    inv += merge(arr,left,mid,right)

    return inv
}

let arr=[8,4,2,1]

console.log("Inversions:", mergeSort(arr,0,arr.length-1))

Output
Inversions: 6

Visualization
[8,4,2,1]

Split →
[8,4] [2,1]

Merge →
[4,8] [1,2]

Count cross inversions →
6

Interview Insight

Count inversions is used in:

Merge Sort concept

Measuring array disorder

Sorting analysis

Similar interview problems:

Reverse pairs

Smaller elements after self

Merge intervals