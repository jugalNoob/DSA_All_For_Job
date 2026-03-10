function test1(a,b){
    return a+b
}

function test2(x){
    return x*2
}


function test3(x){
    return x -4
}

 const result=test3(test2(test1(2 , 2)))
 console.log(result)

 test1(2,2)+
 test2(2*4)*
 test3(8-4)-

 Anser 4

Execution order (inside → outside)

1️⃣ test1()

test1() → 2


2️⃣ test2(test1())

test2(2) → 2*2


Even though x is passed, test2 ignores it and always returns 2.

3️⃣ test3(test2(...))

test3(2) → 4 * 2 = 4


::::::::::::::::::::::::::::::::::::: =================>>


const add = a => b => a + b;
const multiply = a => b => a * b;

const add5 = add(5);
const mul2 = multiply(2);

console.log(mul2(add5(10))); // 30



::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
🌱 Plain English meaning

When you use compose:

👉 Only ONE function gets the original inputs (like a, b)
👉 After that, only ONE value flows forward

So:

First function: can take many inputs

Every next function: must take ONE input

Why?
Because a function can return only one value.

🧠 Think of it like a machine line
(2, 3)   ← many inputs
   ↓
add      → 5   ← only ONE value
   ↓
multi    → 10
   ↓
square   → 100


Once add finishes, there is no (a, b) anymore — only 5.

🔎 Code breakdown (your example)
task(2,3)

Step 1️⃣ First function (multi-argument)
add(2,3)  // OK → 5

Step 2️⃣ Next function (ONE argument only)
multi(5)  // OK → 10

Step 3️⃣ Next function (ONE argument)
square(10) // OK → 100

❌ What happens if next function expects 2 arguments?
function multi(a,b) {
  return a * b
}

multi(5)   // a = 5, b = undefined
           // 5 * undefined = NaN ❌


Because:

Only one value is passed forward

JS fills missing arguments with undefined

🎯 Simple rule (remember this)

Compose rule:
many → one → one → one

🍳 Real-life analogy (very important)
Making tea ☕
Water + Tea leaves  → Tea water
Tea water + Milk    → Milk tea
Milk tea + Sugar    → Final tea


❌ You can’t suddenly ask for Water + Milk again — water is gone.


function add(a,b){
    return a+b
}

function multi(a,b){

    return a*2

}

function squar(value){
    return value * value
}


const compose = (fn1, fn2, fn3) =>
  (a,b) => fn1(fn2(fn3(a,b)))

const task = compose(squar, multi, add)
console.log(task(2,3)) // 225
console.log(task(2,3)) // 225



// what is differnetn bettwen 

const compose = (fn1, fn2, fn3) =>
  (a,b) => fn1(fn2(fn3(a,b)))
const task = compose(test3 , test2 , test1 )
console.log(task(2,2)) // 225



// ----------->>> best for compoing
const composes = (...fns) =>
  fns.reduceRight(
    (prev, next) =>
      (...args) => next(prev(...args))
  )

const taska = composes(
  test3,
  test2,
  test1
)

console.log(taska(2,2)) // 4


 const result=test3(test2(test1(2 , 2)))
 console.log(result)



 :::::::::::::::::: With Comploition :::::::::::::::


 function test1(a,b){
    return a+b
}

function test2(x){
    return x*2
}


function test3(x){
    return x -4
}



function reusable(...fns) {
  return fns.reduceRight(
    (prev, next) =>
      (...args) => next(prev(...args))
  )
}


const taska = reusable(
  test3,
  test2,
  test1
)

console.log(taska(2,2)) // 4


// (2,2)
//   ↓
// test1 → 4
//   ↓
// test2 → 8
//   ↓
// test3 → 4


🎯 Why your idea was GOOD 💡

✔ You used ...fns → unlimited functions
✔ You used ...value → unlimited inputs
✔ You used reduceRight → correct FP direction

Only missing piece was how arguments flow and returning the result.

🧠 Interview one-liner

“A reusable compose uses reduceRight to create a function 
pipeline where the last function consumes all arguments 
and each previous function consumes a single value.”


// ✅ Core rule of compose

// 👉 Only the FIRST function may accept multiple arguments
// 👉 Every NEXT function must accept exactly ONE argument


:::::::::::::: Why Piping ::::::::::::::::::::::::::


🔹 What is pipe?

pipe does the same thing as compose, just in the reading order:

pipe(f, g, h)(x)
= h(g(f(x)))


Think: data flows left → right

✅ Reusable pipe (same logic as your compose)
function pipe(...fns) {
  return fns.reduce(
    (prev, next) =>
      (...args) => next(prev(...args))
  )
}

🧪 Use your same functions
function test1(a,b){
    return a + b
}

function test2(x){
    return x * 2
}

function test3(x){
    return x - 4
}

const task = pipe(
  test1,  // first: can take many args
  test2,  // next: one arg
  test3   // next: one arg
)

console.log(task(2,2)) // 4

🧠 Step-by-step execution
Step 1️⃣ Call the piped function
task(2,2)

Step 2️⃣ First function runs
test1(2,2) → 4

Step 3️⃣ Result flows forward
test2(4) → 8

Step 4️⃣ Result flows forward
test3(8) → 4

🔁 Visual pipeline
(2,2)
  ↓
test1
  ↓
test2
  ↓
test3


🔍 Difference between pipe and compose


| pipe              | compose           |
| ----------------- | ----------------- |
| Left → Right      | Right → Left      |
| Reads naturally   | Math-style        |
| Debug friendly    | Compact           |
| Common in Node.js | Common in FP libs |


🎯 Interview one-liner

“pipe builds a left-to-right function pipeline using reduce, where only the first function can accept multiple arguments and each subsequent function must be unary.”

🧠 Mental trick to remember

compose → reduceRight

pipe → reduce