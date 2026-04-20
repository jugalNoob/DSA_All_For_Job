let data=[10 ,  20 , 10 , 10 , 10 , 10]


let obj={}

let result=[]


for(let i=0; i<data.length; i++){

    let str=data[i]

    if(!obj[str]){

        obj[str]=1
    }else if(obj[str] ===1 ){
        result.push(str)
             obj[str]++
    }
}

console.log(obj)
console.log(result)





// let data = [10, 20, 10, 10, 10, 10]

// let obj = {}
// let result = []

// for (let val of data) {

//     obj[val] = (obj[val] || 0) + 1

//     if (obj[val] === 2) {
//         result.push(val) // push only once
//     }
// }

// console.log(obj)
// console.log(result)
