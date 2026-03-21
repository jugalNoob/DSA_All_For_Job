function jitter(base ,i , max){
    let ji=Math.min(base + Math.pow(2,i) , max)
    let ren=Math.floor(Math.random()*ji)
    return ren
}


function wrap(fn ,base=1000, rety=10,max=10000){
    return async function (){
        for(let i=0; i<rety; i++){
            try {
             console.log("Try:", i + 1)
                let result=await fn(...args)
            return result
            } catch (error) {
                console.error(error)
                let mainji=jitter(base , i ,max)
                    console.log("Waiting:", mainji)
                await new Promise(res=>setTimeout(res ,mainji))
            }
        }
    }
}


function test(){
    if(18 === 18)throw new ('check error now')
}

let copy=wrap(test)
copy()




call function
      │
      ▼
try request
      │
 ┌────┴─────┐
 │ success  │ → return result
 │ failure  │
 └────┬─────┘
      ▼
calculate jitter delay
      ▼
wait
      ▼
retry
