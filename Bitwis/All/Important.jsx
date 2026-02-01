
console.log(toString(2).padStart(5,'0'))

Get Bit ------------------->

let n = 5;
let bits = 5;

for (let i = bits - 1; i >= 0; i--) { // start from leftmost
    let bit = (n >> i) & 1;
   console.log(bit.toString());
}
console.log();


Get Bit Important ------------------------>>
// let ns = 5;
// let binarys = ns.toString(2); // Convert to binary string
// console.log(binarys); // "101"


// let n = 3;
// let binary = n.toString(2); // Convert to binary string
// console.log(binary); // "11"


// console.log(ns & n) //check last 1 






----------------------------------->>


let n = 13; // 1101 in binary
let i = 2;

if (n & (1 << i)) {
  console.log("Bit is 1");
} else {
  console.log("Bit is 0");
}


function isBitSet(n, i) {
  return (n & (1 << i)) !== 0;
}

console.log(isBitSet(13, 0)); // true  → 1st bit
console.log(isBitSet(13, 1)); // false → 2nd bit
console.log(isBitSet(13, 2)); // true
console.log(isBitSet(13, 3)); // true
