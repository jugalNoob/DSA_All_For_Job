
function pipe(...fns) {
  return fns.reduce(
    (prev, next) =>
      (...args) => next(prev(...args))
  )
}


:::::::::::::::::

✅ Reusable pipe (same logic as your compose)
const pip = (...fns) => 
  fns.reduceRight(
    (prev, next) => (...args) => next(prev(...args))
  )




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

“pipe builds a left-to-right function pipeline using reduce,
 where only the first function can accept multiple
  arguments and each subsequent function must be unary.”

🧠 Mental trick to remember

compose → reduceRight

pipe → reduce


::::::::::::::: explian all fucntion Infomration  =================>>


How Piping working :::::::::::::::::


1️⃣ What it does in plain words

00:: ...fns

1:: This means pipe can take any number of functions.
Example: pipe(f1, f2, f3)

00::: reduce

Combines the functions from left to right.

Each function becomes the input of the next.

3::: (...args) => next(prev(...args))

prev = the previous pipeline function

next = the current function in the chain

Returns a new function that:

1.. Calls prev(...args) → gets a value

2.. Passes that value to next(...)



2️⃣ Think of it as a factory conveyor belt

Imagine you’re making a sandwich:

Bread (input)
  ↓
Add cheese (f1)
  ↓
Add veggies (f2)
  ↓
Add sauce (f3)
  ↓
Final sandwich (output)


Each function does one thing.

The output of one function becomes the input of the next.

3️⃣ Example with numbers
function add(a, b) { return a + b }
function double(x) { return x * 2 }
function square(x) { return x * x }

const task = pipe(add, double, square)
console.log(task(2, 3)) // 100

Step-by-step:

add(2,3) → 5

double(5) → 10

square(10) → 100

4️⃣ Key points to remember

Pipe = left → right execution

Only the first function can take multiple arguments

All other functions must take one argument

Creates a reusable, clean function pipeline

🔹 One-line explanation

“pipe chains multiple functions so the output of one function becomes the input of the next, reading left to right.”