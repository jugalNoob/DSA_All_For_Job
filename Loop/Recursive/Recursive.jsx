
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

