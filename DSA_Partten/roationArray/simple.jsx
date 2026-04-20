function roation(data,step){

    for(let i=0; i<step; i++){
        data.push(data.shift())
    }

    return data

}

console.log(roation([10 , 20 , 30 , 40 , 50],2))
