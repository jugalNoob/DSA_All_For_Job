function wrap(fn){

    console.log('before')

    return function (...args){

        let result=fn(...args)
console.log('after')
        return result
    }
}


function Main(){

    console.log('test function')
}

let test=wrap(Main)

test()