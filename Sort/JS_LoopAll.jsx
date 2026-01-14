8. Looping with Dynamic Conditions :::::::::::::::::::::::::
Loops can be dynamically controlled using changing conditions, based on values in 
other data structures or states. This is useful in AI, simulations, or event-driven systems.

Example: Dynamic Condition

let isRunning = true;
let i = 0;

while (isRunning) {
    console.log(i);
    i++;
    if (i >= 5) {
        isRunning = false; // Dynamically stop the loop based on logic
    }
}


7. Looping with Labeled Blocks ::::::::::::::::::::::::::::::::::::::
You can use labels with loops to break or continue a specific loop when working with nested loops.
Labels provide more control over complex loop structures.

outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Breaks out of the outer loop
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}


5. Loop Optimization Techniques :::::::::::::::::::::::::

let arr = [1, 2, 3, 4, 5];
for (let i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]); // Caching `arr.length` in `len` for performance
}



5.2 Avoid Modifying Arrays Inside Loops ::::::::::::::::::::::::::

Avoid operations like splice() or push() inside loops because they modify the array length, causing the loop to behave unpredictably.

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1); // Modifies array length during iteration
}



2. Looping with Steps (Skips) ::::::::::::::::::::

for (let i = 0; i < 10; i += 2) {
  console.log(i);  // Outputs: 0, 2, 4, 6, 8
}


3. Nested Loops Optimization :::::::::::::::::::::::::

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    console.log('Found 3, exiting...');
    break;  // Stops the loop as soon as 3 is found
  }
}


4. Infinite Loops with Break Conditions ::::::::::::::::::::::

let count = 0;
while (true) {
  count++;
  if (count === 5) {
    console.log('Stopping at 5');
    break;  // Exits the loop when count reaches 5
  }
}


b) Unrolling Loops  :::::::::::::::::::::::::::::

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < arr.length; i += 2) {
  console.log(arr[i]);
  console.log(arr[i + 1]);  // Manually unrolling the loop for performance
}


10. Looping with Generators  :::::::::::::::::::::::::::

function* infiniteLoop(start = 0) {
  let i = start;
  while (true) {
    yield i++;
  }
}

let generator = infiniteLoop();
console.log(generator.next().value);  // Outputs: 0
console.log(generator.next().value);  // Outputs: 1
console.log(generator.next().value);  // Outputs: 2




:::::::::::: ---- Loop In javascript -------------

let one=['jugal' , 'karan' , 'anku' , 'kanika']
::Reverse Looping
let one = [1 , 2  , 3 , 4];

for(let i=one.length-1; i>=0; i--){
   console.log(one[i])
}

::Loop
for(let i=0; i<one.length; i++){
   console.log(one[i])
}
::: While
let i = 0;
while (i < one.length) {
    console.log(one[i]);
    i++;
}

 :::Do while
let ii = 0;
do {
    console.log(one[ii]);
    ii++;
} while (ii < one.length);


:::setInterval and  clearInterval
let i=0
let one =setInterval(()=>{
   console.log(i)
   i++
   if(i >3){
      clearInterval(i)
   }
},3000)


:::



function fat(x) {
    if (x > 3) return;   // stop when x > 3
    console.log(x);      // print current value
    fat(x + 1);          // recursive call with next value

  }


  let x=0
fat(x);


Recursive Approach
   function fat(x){
    if(x  < 3){
        fat(x+1)
   }
   console.log(x)
}
let data=0
fat(data)
:::::::::::::::::::
function XX(data) {
    console.log(data);
    if (data.length ===0) {
        XX(data); // Recursively call XX with the updated data
    }
}
let data = ['jugal', 'kanika', 'ridhima', 'anki'];
XX(data);


let one = ['jugal', 'karan', 'anku', 'kanika'];
function iterateArray(index) {
    if (index >= one.length) {
        return;
    }
    console.log(one[index]);
    iterateArray(index + 1);
}
iterateArray(0);

::: for in or of

let one = ['jugal', 'karan', 'anku', 'kanika'];

for(let two in one){
console.log(two)
}

for(let three of one){
   console.log(three)
}

let one = [[[1 , 2 , 3] , [4 , 5 , 6]]];

for (let innerArray of one) {
    let [two, three] = innerArray;
    console.log(two);
    console.log(three)
}

::::: Object LoopIng
let obj = {
   'name': 'jugal',
   'email': 'jugal@example.com'
};

for (let key in obj) {
   console.log(obj[key]);
}


Recursive Approach: ------------------------------------------- ~~~ ::::::::::::::::::::::::
   function fat(x){
    if(x  < 3){
        fat(x+1)
   }
   console.log(x)
}
let data=0
fat(data)

let count=0
function All(){
    if(count > 3){
        return 'done'
    }
    count++
    console.log(count)
  All()
}
All()


---------------- Array ::::::::::::::::::::::::::::: -------------------------------- 
unction XX(data) {
    console.log(data);
    if (data.length ===0) {
        XX(data); // Recursively call XX with the updated data
    }
}
let data = ['jugal', 'kanika', 'ridhima', 'anki'];
XX(data);


function recursiveLoop(array, index = 0) {
    if (index === array.length) {
        return;
    }
    console.log(array[index]);
    recursiveLoop(array, index + 1);
}
// Example usage
let data = ['jugal', 'kanika', 'ridhima', 'anki'];
recursiveLoop(data);



----------------------------------facterical function 5 *4 *3 * 2 * 1  :::::::::::::::::::::::::::::::::::::::: 
function facterical(x){ 
    if(x ===2 ){
        return 2
    }
    return  x*facterical(x-1)
    // 5*facterical(5-1) * facterical(4-1)
}
//Maximum call stack size exceeded meing is infinaty looping
let dat=5
console.log(factorial(dat))


function All(number){
    let ans=1
    for(let i=number; i>0; i--){
        ans=ans*i
    }
    console.log(ans)
}
All(5)



factorial-recursive.js :::::::::::::::::::::::::::::::::::::::

function recursiveFactorial(n) {
  if (n === 0) {
    return 1
  }
  return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(0)) // 1
console.log(recursiveFactorial(1)) // 1
console.log(recursiveFactorial(5)) // 120



factorial.js simple with Loop :::::::::::::::::::::::::::::

function factorial(n) {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result = result * i
  }
  return result
}

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(5)) // 120


::::::::::::::: RecuriveFib:::::::::::::::::::::::

function recursiveFibonacci(n) {
  if (n < 2) {
    return n
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(7)) // 8


fibonacci.j ::::::::::::::::::::::::::::::::::::::::::::::

function fibonacci(n) {
  const fib = [0, 1]
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}

console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1,1]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]


::::::::::::::::::IsPowerTwo :::::::::::::::::::::::::
function isPowerOfTwo(n) {
  if (n < 1) {
    return false
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }
  return true
}

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false
  }
  return (n & (n - 1)) === 0
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(5)) // false


::::::::::::: ISPrime ::::::::::::::::::::::::
function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // if n is divisible by any number then it is not prime
    if (n % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false