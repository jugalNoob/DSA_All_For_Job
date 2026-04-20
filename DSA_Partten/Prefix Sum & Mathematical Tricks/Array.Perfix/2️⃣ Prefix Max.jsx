👉 Use:

// ✅ O(1) space
let maxSoFar = arr[0]


function prefixMax(arr){

    let prefix = []
    prefix[0] = arr[0]

    for(let i=1;i<arr.length;i++){
        prefix[i] = Math.max(prefix[i-1], arr[i])
    }

    return prefix
}

console.log(prefixMax([3 , 1 , 5 ]))
console.log(prefixMax([3,1,4,2,5]))
arr = [3, 1, 4, 2]

| i | arr[i] | prefix[i-1] | prefix[i] = max(...) |
| - | ------ | ----------- | -------------------- |
| 0 | 3      | —           | 3                    |
| 1 | 1      | 3           | max(3,1) = 3         |
| 2 | 4      | 3           | max(3,4) = 4         |
| 3 | 2      | 4           | max(4,2) = 4         |




Index (i),arr[i],prefix[i-1],Math.max(...),prefix becomes,Meaning (up to this point)
0,3,—,—,[3],max in [0..0] = 3
1,1,3,"max(3, 1) → 3","[3, 3]",max in [0..1] = 3
2,4,3,"max(3, 4) → 4","[3, 3, 4]",max in [0..2] = 4
3,2,4,"max(4, 2) → 4","[3, 3, 4, 4]",max in [0..3] = 4
4,5,4,"max(4, 5) → 5","[3, 3, 4, 4, 5]",max in [0..4] = 5
Where Used

Stock price analysis

Maximum profit problems

Leader elements

Rainwater trapping problems





function prefixMax(arr){

    let     prefix=[0]
      prefix[0]=arr[0]

for(let i=1;i<arr.length;i++){
    console.log({
        i,
        prevMax: prefix[i-1],
        current: arr[i],
    })

    prefix[i] = Math.max(prefix[i-1], arr[i])
}

return prefix
}

console.log(prefixMax([3,1,4, 5 ]))
