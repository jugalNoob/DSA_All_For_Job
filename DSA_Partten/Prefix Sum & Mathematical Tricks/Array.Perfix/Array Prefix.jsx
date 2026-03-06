function prefixArray(arr){
    let prefix = []
    prefix[0] = arr[0]

    for(let i = 1; i < arr.length; i++){
        prefix[i] = prefix[i-1] + arr[i]
    }

    return prefix
}

console.log(prefixArray([2,4,6,8]))
