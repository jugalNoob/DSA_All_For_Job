function subsetBitmask(data){
    let result = [];
    let n = data.length;

    let total = 1 << n;   // 2^n

    for(let mask = 0; mask < total; mask++){
        let subset = [];

        for(let i = 0; i < n; i++){
            if(mask & (1 << i)){   // check ith bit
                subset.push(data[i]);
            }
        }

        result.push(subset);
    }

    return result;
}

console.log(subsetBitmask([1,2,3]));