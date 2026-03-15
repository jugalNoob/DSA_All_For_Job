function longestPrefix(arr){

    let prefix = arr[0]

    for(let i = 1; i < arr.length; i++){

        while(arr[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, prefix.length - 1)
        }

    }

    return prefix
}

console.log(longestPrefix(["flower","flow","flight"]))
