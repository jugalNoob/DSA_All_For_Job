function longestPrefix(arr){

    for(let i = 0; i < arr[0].length; i++){

        let char = arr[0][i]

        for(let j = 1; j < arr.length; j++){

            if(arr[j][i] !== char){
                return arr[0].slice(0, i)
            }

        }

    }

    return arr[0]
}

console.log(longestPrefix(["flower","flow","flight"]))
