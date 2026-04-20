
function arth(data){

    let max = -Infinity

    for(let i = 0; i < data.length; i++){
        if(data[i] % 2 === 0 && data[i] > max){
            max = data[i]
        }
    }

    return max === -Infinity ? null : max
}

console.log(arth([1, 3, 2, 4, 6]))  // ✅ 6