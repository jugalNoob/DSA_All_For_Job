let str = 'jugal';
let result = "";

let count=0

for (let i = 0; i < str.length; i++) {

    console.log(count++)

  if (str.length-2 === i) {
    result += str[i].toUpperCase();
  } else {
    result += str[i].toLowerCase();
  }
}

console.log(result); // juGal

