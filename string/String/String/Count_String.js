let data='jugaljs'

let obj={}
for(let i=0; i<data.length; i++){

    let str=data[i]

    if(obj[str]){
        obj[str]++
    }else{
        obj[str]=1
    }
}

console.log(obj)



