let num = 1234

let sum = 0

let str = num.toString()

for(let i=0;i<str.length;i++){
sum += Number(str[i])
}

console.log(sum)



let num = 1234

let sum = 0

while(num > 0){

    let digit = num % 10
    sum = sum + digit

    num = Math.floor(num / 10)
}

console.log(sum)

