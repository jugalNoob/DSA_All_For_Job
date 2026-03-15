let arr = [2,3,1,1,4]

let jumps = 0
let farthest = 0
let currentEnd = 0

for(let i=0;i<arr.length-1;i++){

    farthest = Math.max(farthest , i + arr[i])

    if(i === currentEnd){
        jumps++
        currentEnd = farthest
    }

}

console.log(jumps)



The Minimum Jumps problem means:

Given an array where each element represents the maximum jump length from that position, find the minimum number of jumps needed to reach the last index.

Example

Array

[2, 3, 1, 1, 4]


Explanation

Index: 0 → jump 2 steps → index 1
Index: 1 → jump 3 steps → index 4


Minimum jumps:

2

Greedy Approach (Best Solution)

Time Complexity → O(n)

Code
let arr = [2,3,1,1,4]

let jumps = 0
let farthest = 0
let currentEnd = 0

for(let i=0;i<arr.length-1;i++){

    farthest = Math.max(farthest , i + arr[i])

    if(i === currentEnd){
        jumps++
        currentEnd = farthest
    }

}

console.log(jumps)

Step Table

Array

[2,3,1,1,4]

| i | arr[i] | farthest | currentEnd | jumps |
| - | ------ | -------- | ---------- | ----- |
| 0 | 2      | 2        | 2          | 1     |
| 1 | 3      | 4        | 2          | 1     |
| 2 | 1      | 4        | 4          | 2     |



Result

Minimum Jumps = 2

Visualization
[2,3,1,1,4]

0 → can reach index 1 or 2

choose best path

0 → 1 → 4

Another Example

Array

[1,3,5,8,9,2,6,7,6,8,9]


Output

3 jumps


Path

0 → 1 → 4 → 10

Key Idea (Greedy)

Track:

1️⃣ farthest reachable index
2️⃣ current jump boundary
3️⃣ increment jumps when boundary reached

Time Complexity
O(n)


Space

O(1)

Interview Tip

This problem teaches Greedy + Range expansion logic.

Similar interview problems:

Jump Game

Jump Game II

Minimum Platforms

Gas Station Problem