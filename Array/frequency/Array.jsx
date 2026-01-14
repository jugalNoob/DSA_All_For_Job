let data = [1, 2, 1 , 2 , 1]
let obj = {}

for(let i=0; i<data.length; i++){
    let value=data[i]
    if(obj[value]){
        obj[value]++
    }else{
        obj[value]=1
    }
}
console.log(obj)
