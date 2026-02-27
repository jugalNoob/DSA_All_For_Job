

//Upper to lower case 
function  LowerCase(data){
     let result=''
    for(let i=0; i<data.length; i++){
        let charc=data.charCodeAt(i)
        if(charc >=65  && charc <= 90){
            result+=data[i].toLowerCase()
        }
    }
    return result
}


let data='JUGAL'
console.log(LowerCase(data))



