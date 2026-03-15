function longestPrefix(arr){

    arr.sort()

    let first = arr[0]
    let last = arr[arr.length - 1]

    let result = ''

    for(let i = 0; i < first.length; i++){

        if(first[i] === last[i]){
            result += first[i]
        }else{
            break
        }

    }

    return result
}

console.log(longestPrefix(["flower","flow","flight"]))
