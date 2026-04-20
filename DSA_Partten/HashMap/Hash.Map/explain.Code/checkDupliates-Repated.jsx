let data = [10, 20, 10, 20, 30, 40]
let result = []
let obj = {}
for(let i = 0; i < data.length; i++){
    let val = data[i]
    if(obj[val] === undefined){
        obj[val]=1
    }else{
        if(  obj[val] ===1){
  result.push(val)
        }
  obj[val]++

    }
    

}

console.log(obj)
console.log(result)
