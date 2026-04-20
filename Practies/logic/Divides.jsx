//first check and then divide by 6 


let data=[12 , 3 , 7 , 6 , 2 ,  1]

let count=0

for(let i=0; i<data.length; i++){

    if(data[i] %2 ===0 ){ // check even number 

    count++
        if(data[i] % 6===0){ //and then  divides
   console.log(data[i])


        }

     
    }
}
   console.log(count , 'i am counr')





let evens = data.filter(x => x % 2 === 0);
let divisibleBy6 = data.filter(x => x % 6 === 0);

console.log(evens.length, 'even count');
console.log(divisibleBy6);
