✅ 2. Sum of all elements
let sum = 0

for(let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].length; j++){
        for(let k = 0; k < data[i][j].length; k++){
            sum += data[i][j][k]
        }
    }
}

console.log(sum) // 210