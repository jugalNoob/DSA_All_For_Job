let tokens = 50
const capacity = 50
const rate = 10
let last = Date.now()

function CountClick(){

    const now = Date.now()

    tokens = Math.min(
        capacity,
        tokens + (now - last) / 1000 * rate
    )

    last = now

    if(tokens >= 1){
        tokens -= 1
        console.log("Request allowed | tokens left:", tokens.toFixed(2))
    }else{
        console.log("Rate limit exceeded")
    }
}
