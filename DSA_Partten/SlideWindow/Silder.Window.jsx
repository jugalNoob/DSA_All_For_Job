let arr = [1,4,20,3,10,5]
let target = 33

for(let i=0;i<arr.length;i++){

    let sum = 0

    for(let j=i;j<arr.length;j++){

        sum += arr[j]

        if(sum === target){
            console.log("Indexes:", i , j)
            break
        }

    }
}


| i | j | Subarray  | Sum  |
| - | - | --------- | ---- |
| 0 | 0 | [1]       | 1    |
| 0 | 1 | [1,4]     | 5    |
| 0 | 2 | [1,4,20]  | 25   |
| 1 | 2 | [4,20]    | 24   |
| 2 | 2 | [20]      | 20   |
| 2 | 3 | [20,3]    | 23   |
| 2 | 4 | [20,3,10] | 33 ✅ |



let arr = [1,4,20,3,10,5]
let target = 33

let start = 0
let sum = 0

for(let end=0; end<arr.length; end++){

    sum += arr[end]

    while(sum > target){
        sum -= arr[start]
        start++
    }

    if(sum === target){
        console.log("Indexes:", start , end)
        break
    }

}


Sliding Window Visualization

Array

[1,4,20,3,10,5]


Window grows:

1
1+4
1+4+20
4+20
20+3
20+3+10 = 33 ✅


Indexes

2 → 4

Time Complexity


| Method         | Complexity |
| -------------- | ---------- |
| Brute Force    | O(n²)      |
| Sliding Window | O(n)       |


| i | j | Subarray  | Sum  |
| - | - | --------- | ---- |
| 0 | 0 | [1]       | 1    |
| 0 | 1 | [1,4]     | 5    |
| 0 | 2 | [1,4,20]  | 25   |
| 1 | 2 | [4,20]    | 24   |
| 2 | 2 | [20]      | 20   |
| 2 | 3 | [20,3]    | 23   |
| 2 | 4 | [20,3,10] | 33 ✅ |
