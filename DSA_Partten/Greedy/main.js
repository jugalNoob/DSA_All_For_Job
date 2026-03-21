let coins = [25,10,5,1]

let amount = 36
let count = 0

for(let i=0; i<coins.length; i++){

 while(amount >= coins[i]){
   amount -= coins[i]
   count++
 }

}

console.log(count)
