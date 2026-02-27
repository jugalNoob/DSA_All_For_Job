let obj = {
  10: 10
};

console.log(Object.keys(obj));      // ["10"]
console.log(typeof Object.keys(obj)[0]); // "string"



let news = new Map();

news.set(10, 10);

console.log(news.keys());           // MapIterator
console.log(typeof [...news.keys()][0]); // "number"
console.log(typeof [...news.values()][0]); // "number"1


WHY this happens (IMPORTANT)
Object

Designed before ES6

Originally meant for JSON-like data

Property names are strings internally

📌 Spec rule:

Object property keys are String | Symbol

Map

Introduced in ES6

Built specifically for key-value storage

Keys are not coerced

📌 Spec rule:

Map keys use SameValueZero comparison (like ===)


00000000000000000000000000000000000000000000000000000000000---------------->>
️⃣ Object: why keys behave like strings
let obj = { name: 'jugal', 10: 10 };

for (let key in obj) {
  console.log(typeof key);       // "string"
  console.log(typeof obj[key]);  // value type
}

🧠 What’s happening

In objects:

ALL keys are strings (or symbols)

Even 10 becomes "10"

obj[10]   === obj["10"]  // true


📌 Rule:

Objects auto-convert keys to strings.

2️⃣ Map: keys keep their original type
let maps = new Map();

maps.set(10, 10);
maps.set(10, 'jugal');

🧠 What happens here

Map allows any data type as key

Keys are compared by reference / strict equality

Second set(10, 'jugal') overwrites first value

maps.get(10); // "jugal"


✔ 10 stays a number
✔ No string conversion

3️⃣ Your question: typeof maps.values()
console.log(typeof maps.values());

Output
"object"

🧠 Why?

maps.values() returns a MapIterator

Iterators are objects

maps.values() instanceof Object // true


✔ Iterable
✔ Works with for...of

for (let v of maps.values()) {
  console.log(v);
}

4️⃣ KEY DIFFERENCE — Map vs Object (IMPORTANT)

| Feature     | Object                    | Map                 |
| ----------- | ------------------------- | ------------------- |
| Key type    | String / Symbol           | Any type            |
| `10` as key | `"10"`                    | `10`                |
| Iteration   | `for...in`                | `for...of`          |
| Order       | Not guaranteed (old spec) | Insertion order     |
| Size        | Manual                    | `map.size`          |
| Performance | Slower for frequent ops   | Faster              |
| Default use | Simple data               | Heavy key-value ops |



5️⃣ Key equality difference (VERY IMPORTANT)
Object
let obj = {};
obj[{a:1}] = "test";

console.log(obj); // "[object Object]"


❌ Object key collision

Map
let map = new Map();
let a = { x: 1 };
let b = { x: 1 };

map.set(a, 'first');
map.set(b, 'second');

console.log(map.size); // 2


✔ Different object references
✔ No collision

6️⃣ When to use WHAT (Interview Rule)
✅ Use Object when

Fixed structure

JSON data

Known string keys

Lightweight data

✅ Use Map when

Dynamic keys

Non-string keys

Frequent add/remove

Ordered iteration

🎯 Interview GOLD LINE

Objects convert keys to strings, Maps preserve key types.

🧠 One-line memory trick
Object → string keys
Map    → real keys


If you want next:

Map vs Object performance demo

WeakMap explanation

DSA problems using Map

Convert Object ↔ Map


