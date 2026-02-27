//Upper 
function  LowerCase(data){
     let result=''
    for(let i=0; i<data.length; i++){
        let charc=data.charCodeAt(i)
        if(charc >=97  && charc <= 122){
            result+=data[i].toUpperCase()
        }
    }
    return result
}


let data='jugal'
console.log(LowerCase(data))

