function wrap(fn){
    let cache = {}

    return function(...args){
        let key = JSON.stringify(args)

        if(key in cache){
            console.log("Cache hit");
            return cache[key]
        }

        let result = fn(...args)
        cache[key] = result

        return result
    }
}


function test(data){
   console.log(data)
}

let main=wrap(test )

main(10)
main(10)
main(11)