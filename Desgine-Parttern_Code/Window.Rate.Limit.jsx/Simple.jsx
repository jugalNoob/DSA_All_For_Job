let count = 1

function MainClick(){

    if(count > 5){
        console.log("Rate limit exceeded")

        setTimeout(()=>{
            count = 1
        },2000)

        return
    }

    console.log(count)
    count++
}
