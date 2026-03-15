function prefix(data1, data2){

    let min = Math.min(data1.length, data2.length)

    let prefix = ''

    for(let i = 0; i < min; i++){

        if(data1[i] === data2[i]){
            prefix += data1[i]
        }else{
            break
        }

    }

    return prefix
}

console.log(prefix('helloworld', 'hellojugal'))
