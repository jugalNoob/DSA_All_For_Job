✅ 4. Convert to 1D manually
let res = []

for(let arr1 of data){
    for(let arr2 of arr1){
        res.push(...arr2)
    }
}

console.log(res)
