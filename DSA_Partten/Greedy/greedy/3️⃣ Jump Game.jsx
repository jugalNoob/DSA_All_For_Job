The Jump Game problem checks if we can reach the last index of the array using jumps. It uses a Greedy Algorithm.

Your code idea:

Track the farthest position we can reach.


Variable:

maxReach → farthest index we can reach so far



function jumpgame(data){
    let maxreach = 0 

    for(let i=0; i<data.length; i++){
        if(i > maxreach) return false // can't reach this index
        maxreach = Math.max(maxreach, i + data[i])
    }

    return true
}

console.log(jumpgame([2,3,1,1,4])) // true
console.log(canJump([3,2,1,0,4])); // false


function jumpgame(data){

        // debugger;
    let maxreach = 0 


    for(let i=0; i<data.length; i++){
        if(i > maxreach) return false // can't reach this index
        maxreach = Math.max(maxreach, i + data[i])
    }

    return true
}

console.log(jumpgame([2,3,1,1,4])) // true


| i | data[i] | maxreach before | Condition i>maxreach? | maxreach after | Can reach? |
| - | ------- | --------------- | --------------------- | -------------- | ---------- |
| 0 | 2       | 0               | 0>0? ❌ No             | max(0,0+2)=2   | yes        |
| 1 | 3       | 2               | 1>2? ❌ No             | max(2,1+3)=4   | yes        |
| 2 | 1       | 4               | 2>4? ❌ No             | max(4,2+1)=4   | yes        |
| 3 | 1       | 4               | 3>4? ❌ No             | max(4,3+1)=4   | yes        |
| 4 | 4       | 4               | 4>4? ❌ No             | max(4,4+4)=8   | yes        |


Meaning:

Index 0 → jump max 2
Index 1 → jump max 3
Index 2 → jump max 1
Index 3 → jump max 1
Index 4 → jump max 4

Step-by-Step Table

| i (index) | nums[i] | i + nums[i] | maxReach before | maxReach after | Explanation                       |
| --------- | ------- | ----------- | --------------- | -------------- | --------------------------------- |
| 0         | 2       | 2           | 0               | 2              | From index 0 we can reach index 2 |
| 1         | 3       | 4           | 2               | 4              | From index 1 we can reach index 4 |
| 2         | 1       | 3           | 4               | 4              | maxReach stays 4                  |
| 3         | 1       | 4           | 4               | 4              | still 4                           |
| 4         | 4       | 8           | 4               | 8              | last index reachable              |


Final result:

true


Because:

maxReach >= last index

Visual Explanation

Array:

index : 0  1  2  3  4
nums  : 2  3  1  1  4


Jump possibilities:

0 → can jump to 1 or 2
1 → can jump to 4


So we reach the end.

Important Condition
if(i > maxReach)


Meaning:

We reached an index that we cannot access.


Example:

nums = [3,2,1,0,4]


Table:

| i | nums[i] | maxReach       |
| - | ------- | -------------- |
| 0 | 3       | 3              |
| 1 | 2       | 3              |
| 2 | 1       | 3              |
| 3 | 0       | 3              |
| 4 | 4       | ❌ cannot reach |


At:

i = 4


Condition:

4 > 3


So:

return false

Greedy Idea

At every step:

keep track of the farthest reachable index


We don't simulate every jump — we only track maximum reach.

Time Complexity
O(n)


Space:

O(1)

Pattern You Learn

This problem teaches a very powerful greedy pattern:

Track the maximum reachable boundary


This pattern is used in:

Jump Game II
Minimum platforms
Gas station problem
Interval scheduling