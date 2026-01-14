let data='jugal'
// console.log(str.charAt(1))
// console.log(str.charCodeAt(3))


let str=''

for(let i=0; i<data.length; i++){
    let result=data[i].charCodeAt()

    if(97 == result){
        console.log(data[i] , result)
    }else{
               console.log(data[i])
    }
}


:::::::::::::::::::: -------------------------->>>


let data='Juptue'
console.log(data.charCodeAt(0))
let datas='juptue'
console.log(datas.charCodeAt(0))


function Toggle(str){
    let result=''
    for(let i=0; i<str.length; i++){
        const ch=str.charAt(i);
        const chcode=str.charCodeAt(i);

     if(chcode >= 65 && chcode <= 90){
  result+=ch.toLowerCase()
                }
    else{
        result+=ch.toUpperCase() 
        }
    }
    return result
}

console.log(Toggle('JavaSct'))
console.log(Toggle('YouTube'))