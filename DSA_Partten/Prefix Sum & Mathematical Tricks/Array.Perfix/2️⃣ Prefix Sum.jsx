function prefixMax(arr){

    let prefix = []
    prefix[0] = arr[0]

    for(let i=1;i<arr.length;i++){
        prefix[i] =prefix[i-1]+ arr[i]
    }

    return prefix
}

console.log(prefixMax([3 , 1 , 5 ]))
console.log(prefixMax([3,1,4,2,5]))

| i | arr[i] | prefix[i-1] | prefix[i] calculation | prefix[i] |
| - | ------ | ----------- | --------------------- | --------- |
| 0 | 3      | —           | prefix[0] = arr[0]    | 3         |
| 1 | 1      | 3           | 3 + 1                 | 4         |
| 2 | 5      | 4           | 4 + 5                 | 9         |





| i | arr[i] | prefix[i-1] | prefix[i] calculation | prefix[i] |
| - | ------ | ----------- | --------------------- | --------- |
| 0 | 3      | —           | prefix[0] = arr[0]    | 3         |
| 1 | 1      | 3           | 3 + 1                 | 4         |
| 2 | 4      | 4           | 4 + 4                 | 8         |
| 3 | 2      | 8           | 8 + 2                 | 10        |
| 4 | 5      | 10          | 10 + 5                | 15        |



🔹 Why Prefix Sum Is Powerful

It allows range queries in O(1).

Example:

Find sum between index L and R

sum(L,R) = prefix[R] - prefix[L-1]


Example:

arr = [3,1,4,2,5]
prefix = [3,4,8,10,15]


Find sum index 1 → 3

10 - 3 = 7


Elements:

1 + 4 + 2 = 7

🔥 Real Backend Use

Prefix sum is used in:

analytics dashboards

event counting

cumulative metrics

time-series queries

Companies like:

Google analytics

Meta Platforms metrics systems

use similar cumulative calculations.


Step-by-Step Execution

Input

arr = [3,1,5,2,7]

Step 1
prefix[0] = arr[0]


prefix

[3]


Console prints

[3]

Step 2 (i = 1)
prefix[1] = prefix[0] + arr[1]

3 + 1 = 4


prefix

[3,4]

Step 3 (i = 2)
prefix[2] = prefix[1] + arr[2]

4 + 5 = 9


prefix

[3,4,9]

Step 4 (i = 3)
prefix[3] = prefix[2] + arr[3]

9 + 2 = 11


prefix

[3,4,9,11]

Step 5 (i = 4)
prefix[4] = prefix[3] + arr[4]

11 + 7 = 18


prefix

[3,4,9,11,18]

Final Output
[3,4,9,11,18]

Correct Comments Version
function prefixSum(arr){

   let prefix = [arr[0]]

   for(let i = 1; i < arr.length; i++){

        // prefix[i] = previous prefix sum + current element
        // Example: prefix[1] = prefix[0] + arr[1]

        prefix[i] = prefix[i-1] + arr[i]
   }

   return prefix
}

Visual Idea
arr        : 3   1   5   2   7
prefixSum  : 3   4   9   11  18


Each index = sum of all previous numbers including itself.

Important Formula (Remember)
prefix[i] = prefix[i-1] + arr[i]

Where Used

Range sum queries

Subarray sum problems

Analytics dashboards

Financial calculations