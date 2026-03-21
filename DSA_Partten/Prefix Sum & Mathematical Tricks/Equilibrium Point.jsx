The Equilibrium Point in an array is:

An index where the sum of elements on the left is equal to the sum of elements on the right.

Example

Array

[1, 3, 5, 2, 2]


Check index 2 (value = 5)

Left side

1 + 3 = 4


Right side

2 + 2 = 4


Since both sides are equal:

Equilibrium Index = 2




Method 2️⃣ Optimal (Prefix Sum)
Idea

1️⃣ Calculate total sum
2️⃣ Track left sum
3️⃣ Right sum = total − left − current element

Code
let arr = [1,3,5,2,2]

let totalSum = arr.reduce((a,b)=>a+b,0)

let leftSum = 0

for(let i=0;i<arr.length;i++){

    totalSum -= arr[i]

    if(leftSum === totalSum){
        console.log("Equilibrium Index:", i)
        break
    }

    leftSum += arr[i]

}

let arr = [1,3,5,2,2]
let totalSum = arr.reduce((a,b)=>a+b,0)
let leftSum = 0

for(let i=0;i<arr.length;i++){
    totalSum -= arr[i]    // subtract current element
    if(leftSum === totalSum){
        console.log("Equilibrium Index:", i)
        break
    }
    leftSum += arr[i]
}



Step Table

Array

[1,3,5,2,2]


Total Sum

13


| Index | Value | Left Sum | Right Sum | Result |
| ----- | ----- | -------- | --------- | ------ |
| 0     | 1     | 0        | 12        | ❌      |
| 1     | 3     | 1        | 9         | ❌      |
| 2     | 5     | 4        | 4         | ✅      |


Output
Equilibrium Index: 2

Time Complexity
O(n)


Space

O(1)

Visualization
[1,3,5,2,2]

      ↑
     5

Left  → 1+3 = 4
Right → 2+2 = 4

Interview Insight

This problem uses the Prefix Sum pattern.

Similar problems:

Prefix sum array

Subarray sum equals K

Partition equal subset