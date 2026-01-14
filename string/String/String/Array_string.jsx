

let str = "jugal";

// 1. Check the type of 'str'
console.log(typeof(str) === "string" ? "string" : "number");

// 2. Check if 'str' is a string and also NaN
console.log(typeof(str) === "string" && isNaN(str));

// 3. Check if 'str' contains only alphabetic characters
const isAlpha = /^[a-zA-Z]+$/.test(str);
console.log(isAlpha ? "Only alphabets" : "Contains non-alphabet characters");

// 4. Convert the string to uppercase
console.log("Uppercase:", str.toUpperCase());

// 5. Reverse the string
const reversedStr = str.split('').reverse().join('');
console.log("Reversed:", reversedStr);

// 6. Check if the string is a palindrome
const isPalindrome = str === reversedStr;
console.log(isPalindrome ? "Palindrome" : "Not a palindrome");

// 7. Count the number of vowels in the string
const vowelsCount = (str.match(/[aeiou]/gi) || []).length;
console.log("Number of vowels:", vowelsCount);

// 8. Replace all vowels with '*'
const replacedVowels = str.replace(/[aeiou]/gi, '*');
console.log("Replaced vowels:", replacedVowels);

// 9. Check if the string starts with 'ju'
console.log(str.startsWith('ju') ? "Starts with 'ju'" : "Does not start with 'ju'");

// 10. Check if the string includes 'gal'
console.log(str.includes('gal') ? "Includes 'gal'" : "Does not include 'gal'");

// 11. Find the ASCII value of each character in the string
const asciiValues = str.split('').map(char => char.charCodeAt(0));
console.log("ASCII values:", asciiValues);