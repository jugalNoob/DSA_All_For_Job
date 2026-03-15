function firstUnique(str){

    let count = {}

    for(let ch of str){
        count[ch] = (count[ch] || 0) + 1
    }

    for(let ch of str){
        if(count[ch] === 1){
            return ch
        }
    }

}

console.log(firstUnique("aabbcdde"))
