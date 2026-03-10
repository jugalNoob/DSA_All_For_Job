Perfect choice 😄 — this is classic interview gold.
Let’s build compose like Ramda, step by step, from simple → production-ready.

1️⃣ Simplest compose (single argument)

👉 Right → Left execution

const compose = (...fns) => (value) =>
  fns.reduceRight((acc, fn) => fn(acc), value)

// usage
const add2 = x => x + 2
const mul3 = x => x * 3
const sub1 = x => x - 1

const fn = compose(sub1, mul3, add2)

console.log(fn(5)) // 20
// sub1(mul3(add2(5)))

2️⃣ Ramda-style (supports multiple arguments)

Ramda allows first function to accept many arguments.

const compose = (...fns) =>
  fns.reduceRight(
    (prevFn, nextFn) =>
      (...args) => nextFn(prevFn(...args))
  )

// usage
const sum = (a, b) => a + b
const double = x => x * 2
const square = x => x * x

const fn = compose(square, double, sum)

console.log(fn(2, 3)) // 100
// square(double(sum(2,3)))

3️⃣ Safe compose (handles no functions)
const compose = (...fns) => {
  if (fns.length === 0) {
    return x => x
  }

  if (fns.length === 1) {
    return fns[0]
  }

  return fns.reduceRight(
    (prev, next) =>
      (...args) => next(prev(...args))
  )
}

4️⃣ Production-ready (validation + errors)
const compose = (...fns) => {
  if (!fns.every(fn => typeof fn === 'function')) {
    throw new TypeError('compose expects only functions')
  }

  return fns.reduceRight(
    (prev, next) =>
      (...args) => next(prev(...args))
  )
}

5️⃣ Async compose (🔥 advanced, very impressive)
const composeAsync = (...fns) => (value) =>
  fns.reduceRight(
    (acc, fn) => Promise.resolve(acc).then(fn),
    value
  )

// usage
const fetchUser = id => Promise.resolve({ id, name: 'Jugal' })
const getName = user => user.name
const toUpper = name => name.toUpperCase()

composeAsync(toUpper, getName, fetchUser)(1)
  .then(console.log) // JUGAL

6️⃣ Compare with Ramda internally 🧠

Ramda’s idea (simplified):

compose(f, g, h)(x)
// f(g(h(x)))


Your implementation does the same, using:

reduceRight

closures

function chaining

7️⃣ Interview explanation (say this confidently)

“Compose takes functions and returns a new function.
Using reduceRight, we wrap each function so the output of one
becomes the input of the next, executing from right to left.”

8️⃣ Bonus: build pipe too (left → right)
const pipe = (...fns) =>
  fns.reduce(
    (prev, next) =>
      (...args) => next(prev(...args))
  )


If you want next 🔥:

Implement Ramda curry

Compose with middleware (Express-style)

Performance edge cases

Build mini FP utility library