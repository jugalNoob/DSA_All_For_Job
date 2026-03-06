Your code logic is correct, but the comments inside the loop are incorrect. Let’s fix and explain the actual steps.

Your Code (Correct)
function prefixSum(arr){

   let prefix = [arr[0]]

   console.log(prefix)

   for(let i = 1; i < arr.length; i++){
        prefix[i] = prefix[i-1] + arr[i]
   }

   return prefix
}

console.log(prefixSum([3,1,5,2,7]))

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