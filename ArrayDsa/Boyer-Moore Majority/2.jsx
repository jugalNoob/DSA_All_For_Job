function ElemntCount(data){

    let count=0

    let candaition=null

    for(let i=0; i<data.length; i++){

        if(count ===0 ){

            candaition=data[i]
            count=1
        }else if(candaition === data[i]){

            count++
        }else{
            count--
        }
    }

    return candaition
}


console.log(ElemntCount([1 , 1 , 2 , 2 , 3 , 3 , 3 ,2 ,3]))


| Step | Element | Candidate | Count | Explanation                 |
| ---- | ------- | --------- | ----- | --------------------------- |
| 1    | 1       | 1         | 1     | count was 0 → new candidate |
| 2    | 1       | 1         | 2     | same as candidate → count++ |
| 3    | 2       | 1         | 1     | different → count--         |
| 4    | 2       | 1         | 0     | different → count--         |
| 5    | 3       | 3         | 1     | count 0 → new candidate     |
| 6    | 3       | 3         | 2     | same → count++              |
| 7    | 3       | 3         | 3     | same → count++              |
| 8    | 2       | 3         | 2     | different → count--         |



Final candidate

3

Important Concept

This algorithm cancels pairs of different elements.

Example idea

1 vs 2  → cancel
2 vs 3  → cancel


Only the dominant element survives if a true majority exists.

Why Result May Be Wrong

In your array:

1 → 2 times
2 → 3 times
3 → 3 times


Majority condition:

> n/2


Array length

8


Requirement

> 4


No element satisfies this.

So the algorithm returns only a candidate, not a guaranteed majority.

Final Interview Pattern

Always do verification pass:

count = 0
for(let num of data){
    if(num === candidate) count++
}

if(count > data.length/2){
    return candidate
}else{
    return "No Majority Element"
}

Complexity

Time

O(n)


Space

O(1)


Very efficient 🚀

✅ Since you're practicing DSA for interviews, the next very important related problems are:

1️⃣ Majority Element II (> n/3)
2️⃣ Kadane’s Algorithm (Maximum Subarray)
3️⃣ Dutch National Flag Algorithm
4️⃣ Sliding Window Pattern