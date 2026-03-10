function JiiterClass(base , i , maxnum){
    let jit=Math.min(base+Math.pow(2 , i  ),maxnum )
    let account=Math.floor(Math.random()*jit )
    return account
}



function wrap(fn ,base=1000 , rety=10, maxnum=10000){

return async function (...arys) {

    for(let i=0; i<rety; i++){
    try {
        console.log(i)
        
        let result=fn(...arys)
        return result
    } catch (error) {
        console.error(error.message)
        deplay=JiiterClass(base , i , maxnum)
        await new Promise(res =>setTimeout(res , deplay))
    }
    }
}
}

function Miantest(){

    if(18 ===18) throw new  'error'
}

let test1=wrap(Miantest)
test1()