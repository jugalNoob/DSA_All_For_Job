4. Reverse a number
function reverseNumber(num) {
    let rev=0;
    while(num>0){
        rev = rev*10 + num%10;
        num = Math.floor(num/10);
    }
    return rev;
}

console.log(reverseNumber(1234)); // 4321