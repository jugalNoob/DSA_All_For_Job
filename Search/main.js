function recursive(x=0){
    if(x >= 5) return

    console.log(x)
    recursive(x+1)
}

recursive()