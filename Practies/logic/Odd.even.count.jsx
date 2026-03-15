let data=[9 , 5 , 2 , 3 , 7 , 5 , 6]

let evenCount=0
let oddCount=0

for(let i=0; i<data.length; i++){

    if(data[i] % 2 === 0){
        console.log("Even:", data[i])
        evenCount++
    } 
    else{
        console.log("Odd:", data[i])
        oddCount++
    }

}

console.log("Total Even:", evenCount)
console.log("Total Odd:", oddCount)