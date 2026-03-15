7. Armstrong number
function isArmstrong(num){
    let sum=0, n=num;
    let digits = num.toString().length;
    while(n>0){
        let d = n%10;
        sum += Math.pow(d,digits);
        n = Math.floor(n/10);
    }
    return sum===num;
}

console.log(isArmstrong(153)); // true