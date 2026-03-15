let arr = [4,1,2,3,3,3,4,5 ,7]
let target = 3

let first = -1
let last = -1

for(let i=0;i<arr.length;i++){

    if(arr[i] === target){

        if(first === -1){
            first = i
        }

        last = i
    }

}

console.log("First:", first)
console.log("Last:", last)



Output
First: 2
Last: 4

Step Table

Array

[1,2,3,3,3,4,5]


| Index | Value | First | Last |
| ----- | ----- | ----- | ---- |
| 0     | 1     | -     | -    |
| 1     | 2     | -     | -    |
| 2     | 3     | 2     | 2    |
| 3     | 3     | 2     | 3    |
| 4     | 3     | 2     | 4    |
| 5     | 4     | 2     | 4    |






Method 2️⃣ Binary Search (Best for Sorted Array)

Time Complexity

O(log n)

Code
let arr = [1,2,3,3,3,4,5]
let target = 3

let first = arr.indexOf(target)
let last = arr.lastIndexOf(target)

console.log("First:", first)
console.log("Last:", last)

Output
First: 2
Last: 4

Visualization
Array

1 2 3 3 3 4 5
    ↑     ↑
  First   Last

Edge Case

If element not present

target = 8


Output

First: -1
Last: -1

Interview Insight

This problem teaches searching pattern.

Similar problems:

Count occurrences in sorted array

Binary search variations

Search range problem