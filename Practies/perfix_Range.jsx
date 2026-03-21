function prefixArray(arr){
    let prefix = []
    prefix[0] = arr[0]

    for(let i = 1; i < arr.length; i++){
        prefix[i] = prefix[i-1] + arr[i]
    }

    return prefix
}

// console.log(prefixArray([2,4,6,8]))


function rangequary(array , l , r){
    if (L === 0) return prefix[R];
    // if(l === array) return array

  return  array[r] - array[l-1]
}


// Example
let arr = [1, 2, 3, 4, 5];
let prefix =prefixArray(arr);
console.log(prefix)

console.log(rangequary(prefix , 1, 3)); // 2+3+4 = 9


👉 Query (1,3)
prefix[3] - prefix[0]
= 10 - 1 = 9 ✅

🧠 Key Formula (VERY IMPORTANT)
sum(L → R) = prefix[R] - prefix[L-1]

⚡ Why This is Powerful



| Approach    | Time per Query |
| ----------- | -------------- |
| Brute Force | O(n) ❌         |
| Prefix Sum  | O(1) ✅         |
