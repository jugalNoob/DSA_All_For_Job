🔹 What is function composition?

Compose = combine multiple functions into one

👉 Output of one function becomes input of the next.

f(g(h(x)))

🔹 Using an ARRAY to compose functions
✅ Basic example
const add2 = x => x + 2
const multiply3 = x => x * 3
const subtract1 = x => x - 1

const functions = [add2, multiply3, subtract1]

🔹 1️⃣ Compose (Right → Left)

Like math: subtract1(multiply3(add2(x)))

const compose = (fns) => (value) =>
  fns.reduceRight((acc, fn) => fn(acc), value)

const result = compose(functions)(5)
console.log(result)

Execution
5 → add2 → 7
7 → multiply3 → 21
21 → subtract1 → 20


✅ Output: 20

🔹 2️⃣ Pipe (Left → Right) ⭐ (Most used in real projects)
const pipe = (fns) => (value) =>
  fns.reduce((acc, fn) => fn(acc), value)

const result = pipe(functions)(5)
console.log(result)

Execution
5 → add2 → multiply3 → subtract1

🔹 3️⃣ Real interview-style array example
const ops = [
  x => x + 10,
  x => x * 2,
  x => x / 5
]

const composed = ops.reduce(
  (accFn, currentFn) =>
    (value) => currentFn(accFn(value))
)

console.log(composed(5)) // 6

🔹 4️⃣ Compose array of functions dynamically (clean)
const compose = (...fns) =>
  fns.reduceRight(
    (prev, next) => (...args) => next(prev(...args))
  )

const fn = compose(
  x => x + 1,
  x => x * 2,
  x => x - 3
)

console.log(fn(5)) // 5

🔹 5️⃣ Real-world use case (Node.js / Middleware style)
const sanitize = x => x.trim()
const toLower = x => x.toLowerCase()
const validate = x => x.length > 3 ? x : null

const processInput = pipe([sanitize, toLower, validate])

console.log(processInput("  HELLO  ")) // "hello"

🧠 Key concepts interviewers look for

✔ reduce vs reduceRight
✔ Pure functions
✔ Order of execution
✔ Pipe vs Compose difference