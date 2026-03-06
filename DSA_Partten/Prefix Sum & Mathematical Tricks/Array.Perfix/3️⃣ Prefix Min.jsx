function prefixMin(arr){
    let prefix = [0]

    prefix[0] = arr[0]

    console.log(prefix)

    for(let i = 1; i < arr.length; i++){
        prefix[i] = Math.min(prefix[i-1], arr[i])

        // first step  2 = 1 , 2
        //second step 1 = 4-1 , 4
    }

    return prefix
}

console.log(prefixMin([2,4,6,8]))




Step-by-Step Execution

Input

arr = [2,4,6,8]

Step 1
prefix[0] = arr[0]


prefix

[2]


Console prints

[2]

Step 2 (i = 1)
prefix[1] = Math.min(prefix[0], arr[1])

Math.min(2 , 4) = 2


prefix

[2,2]

Step 3 (i = 2)
prefix[2] = Math.min(prefix[1], arr[2])

Math.min(2 , 6) = 2


prefix

[2,2,2]

Step 4 (i = 3)
prefix[3] = Math.min(prefix[2], arr[3])

Math.min(2 , 8) = 2


prefix

[2,2,2,2]

Final Output
[2,2,2,2]


Meaning:

Index	Minimum from start
0	2
1	2
2	2
3	2
Cleaner Version (Best Practice)


// Where Used

// Minimum cost calculations

// Stock buy price

// Dynamic programming problems

