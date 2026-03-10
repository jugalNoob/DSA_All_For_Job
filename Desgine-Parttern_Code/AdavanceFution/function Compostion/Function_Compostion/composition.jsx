✅ Meaning of Function Composition (plain English)

Function composition means combining small functions so that the output of one function becomes the input of another.

👉 Like an assembly line.

🍔 Real-life example

Making a burger:

cook → addCheese → pack


Each step does one thing.

🧠 Mathematical idea
f(g(x))


First g(x) runs

Then f() runs on its result

✅ Simple JavaScript example
function add2(x) {
    return x + 2;
}

function multiply3(x) {
    return x * 3;
}

const result = multiply3(add2(5));
console.log(result); // 21


➡️ 5 → add2 → 7 → multiply3 → 21

🔥 Function Composition Helper
const compose = (...fns) => value =>
    fns.reduceRight((acc, fn) => fn(acc), value);

const add2 = x => x + 2;
const multiply3 = x => x * 3;

console.log(compose(multiply3, add2)(5)); // 21

Execution order
add2(5) → multiply3(7)

🔄 Pipe (left → right, more readable)
const pipe = (...fns) => value =>
    fns.reduce((acc, fn) => fn(acc), value);

console.log(pipe(add2, multiply3)(5)); // 21

🧠 Why we use function composition


| Reason                 | Why                     |
| ---------------------- | ----------------------- |
| Readability            | Small, clear functions  |
| Reusability            | Functions can be reused |
| Testing                | Easy to test            |
| Functional programming | Core concept            |


🎯 Interview one-liner

“Function composition is the process of combining 
multiple functions so that the output of one function
 becomes the input of the next.”