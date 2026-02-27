✅ Your Working Code (for...in)
let obj = {
  name: 'jugal'
}

for (let obj1 in obj) {
  console.log(obj1)        // key
  console.log(obj[obj1])  // value
}

🔍 Why this WORKS

for...in is designed to iterate over enumerable property KEYS of an object.

✔ Objects are key–value structures
✔ for...in returns keys (strings)

Output:

name
jugal

❌ Your Non-Working Code (for...of)
for (let obs of obj) {
  console.log(obs)
}

❓ Why this FAILS

Because objects are NOT iterable.

JS engine throws:

TypeError: obj is not iterable

🧠 CORE REASON (Interview Level)
for...of works ONLY on iterables

An object must implement:

Symbol.iterator


Objects ❌ do not have Symbol.iterator.

🧬 Internal Architecture Comparison
🔹 Object
obj
 └─ [[Prototype]] → Object.prototype
                         └─ NO Symbol.iterator ❌

🔹 Array
array
 └─ [[Prototype]] → Array.prototype
                         └─ Symbol.iterator ✅

🧩 What IS iterable in JS?


| Type   | Iterable? | Why                   |
| ------ | --------- | --------------------- |
| Array  | ✅         | Has `Symbol.iterator` |
| String | ✅         | Characters iterable   |
| Map    | ✅         | Key–value pairs       |
| Set    | ✅         | Values iterable       |
| Object | ❌         | No iterator           |




🔥 Proof (Check in console)
obj[Symbol.iterator]      // undefined ❌
[] [Symbol.iterator]     // function ✅

✅ How to USE for...of WITH objects (Correct Way)
✔ Option 1: Object.keys()
for (let key of Object.keys(obj)) {
  console.log(key, obj[key])
}

✔ Option 2: Object.values()
for (let value of Object.values(obj)) {
  console.log(value)
}

✔ Option 3: Object.entries() (BEST)
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value)
}

🧠 Why JS Designed This Way?
Objects:

Dictionary / hash map

No guaranteed order (historically)

Meant for property lookup

Arrays / Map:

Ordered data

Meant for iteration

⚠️ Important Interview Trap
for...in pitfalls
for (let key in obj) {
  // iterates inherited properties also!
}


Safe check:

if (obj.hasOwnProperty(key))

🏁 One-Line Summary (Interview Gold)

for...in works on objects because it iterates over enumerable keys, while for...of fails because plain objects are not iterable and do not implement Symbol.iterator.

🔥 Bonus: Make Object iterable (Advanced)
let obj = {
  name: 'jugal',
  age: 25,
  [Symbol.iterator]: function* () {
    for (let key in this) {
      if (key !== Symbol.iterator) {
        yield [key, this[key]]
      }
    }
  }
}

for (let [k, v] of obj) {
  console.log(k, v)
}
