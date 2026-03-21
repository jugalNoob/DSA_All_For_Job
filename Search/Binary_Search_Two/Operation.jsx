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


| Index `i` | arr[i] | Condition arr[i] === target | `first` | `last` | Explanation                                  |
| --------- | ------ | --------------------------- | ------- | ------ | -------------------------------------------- |
| 0         | 4      | false                       | -1      | -1     | skip                                         |
| 1         | 1      | false                       | -1      | -1     | skip                                         |
| 2         | 2      | false                       | -1      | -1     | skip                                         |
| 3         | 3      | true                        | 3       | 3      | first = 3 because first === -1, last updated |
| 4         | 3      | true                        | 3       | 4      | last updated to 4                            |
| 5         | 3      | true                        | 3       | 5      | last updated to 5                            |
| 6         | 4      | false                       | 3       | 5      | skip                                         |
| 7         | 5      | false                       | 3       | 5      | skip                                         |
| 8         | 7      | false                       | 3       | 5      | skip                                         |



First occurrence of 3 is at index 3

Last occurrence of 3 is at index 5

How It Works

Initialize first and last to -1 (meaning "not found yet").

Loop through the array:

If current element matches target:

If first is still -1, set it → captures the first occurrence.

Always update last → captures the latest occurrence.

After loop ends, first and last have the correct indices.

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