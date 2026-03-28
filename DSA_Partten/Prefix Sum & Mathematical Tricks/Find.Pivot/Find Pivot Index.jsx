
function pivotIndex(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        if (left * 2 === total - nums[i]) {
            return i;
        }
        left += nums[i];
    }

    return -1;
}


function pountfix(data){
    let total=data.reduce((sum,e)=>sum+e,0)
    let left=0

    for(let i=0; i<data.length; i++){

        if(left === total -data[i]-left){

            return i
        }

        left+=data[i]
    }

    return -1
}

console.log(pountfix([1,7,3,6,5,6]))



Got it! The “Find Pivot Index” problem is a neat prefix-sum / 
cumulative sum problem. Let’s go step by step.

1️⃣ Problem Statement

Given an array nums, find an index i such that:

sum of nums[0..i-1]=sum of nums[i+1..n-1]



Return the leftmost pivot index if multiple exist.

Return -1 if no pivot exists.

Example:

nums = [1, 7, 3, 6, 5, 6]
Output: 3


Explanation:

Left sum: 1 + 7 + 3 = 11

Right sum: 5 + 6 = 11

Index 3 → pivot


| i | nums[i] | leftSum | totalSum - leftSum - nums[i] | Pivot? |
| - | ------- | ------- | ---------------------------- | ------ |
| 0 | 1       | 0       | 28-0-1=27                    | ❌      |
| 1 | 7       | 1       | 28-1-7=20                      | ❌      |
| 2 | 3       | 8       | 28-8-3=17                    | ❌      |
| 3 | 6       | 11      | 28-11-6=11                   | ✅      |






2️⃣ Naive Approach (Brute Force)

For each index, calculate left sum and right sum → O(n²)

❌ Too slow for large arrays

3️⃣ Optimal Approach (Single Pass)

Idea:

Keep track of total sum of the array.

Maintain left sum as you iterate.

For index i:


right sum=total sum−left sum−nums[i]

If left sum === right sum, pivot found.

Step-by-Step Example

Array: [1, 7, 3, 6, 5, 6]

totalSum = 1+7+3+6+5+6 = 28

leftSum = 0 initially





1️⃣ What is Pivot Index?

A pivot index is an index where:

sum of left side = sum of right side


Formula used in your code:

leftsum === totalSum - leftsum - data[i]


Meaning:

left side sum = right side sum

2️⃣ Input Array
[1, 7, 3, 6, 5, 6]


First your code calculates total sum.

1 + 7 + 3 + 6 + 5 + 6 = 28

sumtotal = 28

3️⃣ Check Each Index
Index 0
value = 1
leftsum = 0


Right side:

28 - 0 - 1 = 27

0 ≠ 27


Not pivot.

Index 1
value = 7
leftsum = 1


Right side:

28 - 1 - 7 = 20

1 ≠ 20


Not pivot.

Index 2
value = 3
leftsum = 8


Right side:

28 - 8 - 3 = 17

8 ≠ 17


Not pivot.

Index 3 ⭐
value = 6
leftsum = 11


Right side:

28 - 11 - 6 = 11


Now:

leftsum = 11
rightsum = 11


✅ Both equal.

So pivot index = 3

4️⃣ Visual Explanation

Array:

[1, 7, 3, 6, 5, 6]
        ↑
      index 3


Left side:

1 + 7 + 3 = 11


Right side:

5 + 6 = 11


Both equal.

11 = 11


So index 3 is pivot.

5️⃣ Why Return 3

Because pivot index is the position, not the value.

index:  0 1 2 3 4 5
array: [1,7,3,6,5,6]


Pivot position:

index = 3
value = 6

6️⃣ Complexity
Time  : O(n)
Space : O(1)


Very efficient solution.

7️⃣ Small Improvement to Your Code

You should declare variables properly.

function pivot(data){

let sumtotal = data.reduce((sum,e)=>sum+e,0)

let leftsum = 0

for(let i=0;i<data.length;i++){

if(leftsum === sumtotal - leftsum - data[i]){
return i
}

leftsum += data[i]

}

return -1
}

console.log(pivot([1,7,3,6,5,6]))


✅ This problem is very common in interviews at companies like
Amazon, Microsoft, and Google.