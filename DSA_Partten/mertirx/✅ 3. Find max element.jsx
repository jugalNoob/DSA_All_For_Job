✅ 3. Find max element
let max = -Infinity

for(let arr1 of data){
    for(let arr2 of arr1){
        for(let num of arr2){
            max = Math.max(max, num)
        }
    }
}

console.log(max) // 60