1️⃣ Number-Based Problems
1. Check if a number is Palindrome
function isPalindrome(num) {
    let original = num, reverse = 0;
    while(num > 0) {
        reverse = reverse*10 + num%10;
        num = Math.floor(num/10);
    }
    return original === reverse;
}

console.log(isPalindrome(121)); // true