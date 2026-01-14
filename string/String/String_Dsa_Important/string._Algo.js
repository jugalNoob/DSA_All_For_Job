1::Search 

2::Delete 





::::::::::::::::: Char Code in string ::::::::::::::::::



let str = "Jugal Sharma";

console.log(str.charCodeAt(0));  // Output: 74 (ASCII code of 'J')
console.log(str.charCodeAt(6));  // Output: 32 (ASCII code of space ' ')
console.log(str.charCodeAt(str.length - 1));  // Output: 97 (ASCII code of 'a')

for (let i = 0; i < str.length; i++) {
    console.log(`Character: ${str[i]}, ASCII: ${str.charCodeAt(i)}`);
}
let str = "Jugal Sharma 🚀🔥😀";
let maxCode = 0;
let maxChar = '';

for (let char of str) {
    let code = char.charCodeAt(0); // Get the code of the character
    if (code > maxCode) {
        maxCode = code;
        maxChar = char;
    }
}

console.log(`Max Char: '${maxChar}', Code: ${maxCode}`);
// Output: Max Char: '🚀', Code: 128640



// The maximum character code depends on the encoding system:

// ASCII: Maximum is 127 (~ has charCodeAt 126).

// Extended ASCII: Maximum is 255.

// Unicode: JavaScript uses UTF-16, so the max value is 65535 (for BMP characters).

// Surrogate pairs: Some Unicode characters (like emojis) have codes above 65535 but are represented as two UTF-16 code units.



00:: Search  ....................

let data="jugal sharma"


let search="a"

let opstion=undefined


for(let i=0; i<data.length; i++){

    if(data[i] == search){

        opstion=data[i]
        co
    }
}

console.log(opstion)



00:: Delete 


let data = "jugal sharma";
let del = 2; // Index to delete
let newData = "";

for (let i = 0; i < data.length; i++) {
    if (i !== del) {
        newData += data[i]; // Append all characters except the one at `del`
    }
}

console.log(newData); // Output: "ugal sharma"



000:::::string merg 

let data = "jugal sharma";
let data1 = "karan";
let data2 = []; // Empty array to store characters

// Copy `data` characters into `data2`
for (let i = 0; i < data.length; i++) {
    data2[i] = data[i];
}
console.log(data2); // Output: ['j', 'u', 'g', 'a', 'l', ' ', 's', 'h', 'a', 'r', 'm', 'a']

// Append `data1` characters into `data2`
for (let i = 0; i < data1.length; i++) {
    data2[data.length + i] = data1[i];
}

console.log(data2); // Output as an array
console.log(data2.join("")); // Output as a string: "jugal sharmakaran"



// Using `concat()`
// let data2 = data.concat(data1);

// // Using spread operator correctly inside a template literal
// let data3 = [...data, ...data1].join("");

// console.log(data2); // Output: "jugal sharmakaran"
// console.log(data3); // Output: "jugal sharmakaran"





//count the Number of vowels in a string 

function countVowels(str){
    const vowels="aeiouAEIOU"
    let count=0
    for(let char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}

console.log(countVowels("hello world"))


// find the longest word in a string 

function Findlongestword(str){

    let words=str.split(' ')
    let longest=0
    for(let word of words){
        if(word.length > longest ){
            longest=word.length

        }
    }
    return longest
}

console.log(Findlongestword("the qucik brown fox jumps overy the lazy dog"))



/// Capitalize the first letter of each word

function Capitalizeword(str){
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join('')
}


console.log(Capitalizeword("jugal sharma"))



// -- > Repeat a string a given Number of Time 


function repeatString(str  , num){
    if(num <0)return '';
    return str.repeat(num)
}
console.log(repeatString("abc" , 3))



// --- > Remove Duplicate Characters from a string 

function removeDuplicates(str){
    return [...new Set(str)].join('');
}

console.log(removeDuplicates("aabbbcc"))



// --- > > String Revers -----------:>?>>>

function reversString(str){

    return str.split('').reverse().join('')
}

console.log(reversString("jugal sharma"))



/// ----- >>> string is a palindrome 

function isPalindrome(str){

    const reversed=str.split('').reverse().join('')

    return str === reversed
}

console.log(isPalindrome("level"))
console.log(isPalindrome("hello"))
