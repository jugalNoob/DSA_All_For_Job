let data=[5 ,10 , 20 , 30 , 40 , 50 , 60]
let min=data[1]
let uinque=undefined
let count=0

// debugger;

for(let i=0; i<data.length; i++){
    if(data[i] > min){
    count++
        if(count > 1){
            console.log(count)
  uinque=data[i]
        break
       }
  }
}
console.log(uinque)


let data=[5,10,20,30,40,50,60]

let largest=-Infinity
let second=-Infinity

for(let i=0;i<data.length;i++){

if(data[i] > largest){

second = largest
largest = data[i]

}
else if(data[i] > second && data[i] != largest){

second = data[i]

}

}

console.log(second)
