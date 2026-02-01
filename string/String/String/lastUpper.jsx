let str = 'jugal';
let result = '';

for (let i = 0; i < str.length; i++) {
  
  if (i === str.length - 1) {
    result += str[i].toUpperCase(); // last char
  } else {
    result += str[i].toLowerCase();
  }
}

console.log(result); // jugaL




let str = 'jugal';

let result =
  str.slice(0, -1).toLowerCase() +
  str.slice(-1).toUpperCase();

console.log(result); // jugaL

