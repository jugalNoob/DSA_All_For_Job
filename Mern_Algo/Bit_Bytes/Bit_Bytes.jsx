1:: What are Bits and Bytes?
At the core of all digital systems, including programming languages, are bits and bytes. They are the fundamental building blocks of all data storage, processing, and transmission.

1. Bit (Binary Digit)
A bit is the smallest unit of data in computing.

It can have only two possible values:

0 (off/false)

1 (on/true)

Everything in computers—numbers, text, images, and videos—is represented using bits.

2:: Byte
A byte is a group of 8 bits.

It is the smallest addressable unit of memory in most computer architectures.

Each byte can represent 256 different values (from 00000000 to 11111111 in binary, or 0 to 255 in decimal).


3..Why Are Bits and Bytes Important in Programming Languages?
Data Representation

All data in programming (numbers, characters, images) is stored in memory as bits and bytes.

Example:
let x = 65;  // Stored as binary: 01000001 (1 byte)
let y = "A"; // 'A' in ASCII is 65 → Binary: 01000001 (1 byte)

Memory Efficiency

Understanding bits and bytes helps optimize memory usage.

Example:

int (integer) in C++ can take 4 bytes (32 bits).

char (character) usually takes 1 byte (8 bits).

boolean (true/false) ideally needs only 1 bit but often takes 1 byte for convenience.



4..Networking & Data Transmission

Data is sent over networks in packets of bytes.

Example: Internet speeds (Mbps) measure megabits per second.

5..toFixed.File Storage

File sizes are measured in bytes:

1 KB (Kilobyte) = 1024 Bytes

1 MB (Megabyte) = 1024 KB

1 GB (Gigabyte) = 1024 MB

5.. Bitwise Operations

Programming languages like JavaScript, C, and Python support bitwise operations for low-level optimization.

let a = 5;   // 101 in binary
let b = 3;   // 011 in binary
console.log(a & b);  // Bitwise AND → 001 (1)
console.log(a | b);  // Bitwise OR  → 111 (7)
console.log(a ^ b);  // Bitwise XOR → 110 (6)

Example: Bits & Bytes in JavaScript

let text = "A"; 
console.log(new TextEncoder().encode(text)); // Uint8Array(1) [65] → 1 byte
console.log((65).toString(2)); // "1000001" → Binary representation of 65



// Would you like more details on bitwise operations or memory efficiency in JavaScript? 🚀


// let num = 5; // 5 in binary is 101
// console.log(num.toString(2)); // "101" (binary representation)
// console.log(num & 1); // Bitwise AND operation
// console.log(num << 1); // Left shift (multiply by 2)



// function getByteSize(str) {
//     return new TextEncoder().encode(str).length;
//   }
//   console.log(getByteSize("Hello")); // 5 bytes
//   console.log(getByteSize("😊")); // 4 bytes (emoji takes more space)
  


// get bytes size 

let data = ["jugal", "karan", "anku", "kanika"];

console.log(data.toString()); // Converts array to a string
console.log(new TextEncoder().encode(data.toString()).length); // Gets byte size
console.log(data.length)

