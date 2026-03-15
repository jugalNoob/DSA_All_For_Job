let data=[12,9 , 5 , 2 , 3 , 7 , 5 , 6]

let max=1
let unique

for(let i=0; i<data.length; i++){

    if(data[i] > max){

        unique=data[i]

        if(unique % 6 === 0){
            console.log(true)
        }else{
            console.log(false)
        }

        break
    }
}

console.log(unique)
console.log(unique % 6)

