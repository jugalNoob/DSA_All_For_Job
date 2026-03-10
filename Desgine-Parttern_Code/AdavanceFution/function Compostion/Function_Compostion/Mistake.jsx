Great question 👌
These are very common beginner mistakes with function composition, especially in JS / Node.js. Interviewers LOVE these.

❌ 1️⃣ Passing function instead of calling it
Test2(Test1) ❌
Test2(Test1()) ✅


Why wrong?
You passed the function reference, not its result.

❌ 2️⃣ Functions not returning a value
function add(x) {
    x + 2;   // ❌ no return
}

add(5); // undefined


✔ Composition needs return values.

❌ 3️⃣ Modifying global data
let data = {};

function step1() {
    data.a = 1; // ❌ side effect
}


✔ Prefer returning new data.

❌ 4️⃣ Mixing sync & async without handling Promise
pipe(fetchUser, formatUser); // ❌ fetchUser is async


✔ Use async/await or Promise pipeline.

❌ 5️⃣ Wrong execution order
compose(add2, multiply3)(5);


Beginners think:

add2 → multiply3 ❌


Actual order:

multiply3(add2(5)) ✅


👉 Use pipe() if confused.

❌ 6️⃣ Overusing composition for simple tasks
pipe(add, multiply, divide, mod, log)


✔ Sometimes simple code is better.

❌ 7️⃣ Using this inside composed functions
function step() {
    return this.value; ❌
}


✔ Composition works best with pure functions.

❌ 8️⃣ Not handling errors
pipe(validate, save)(data); ❌


✔ Wrap with try/catch or safe pipeline.

❌ 9️⃣ Mutating the same object
function sanitize(obj) {
    obj.name = obj.name.trim(); ❌
    return obj;
}


✔ Better:

return { ...obj, name: obj.name.trim() };

❌ 🔟 Thinking composition = callbacks
setTimeout(() => {
   setTimeout(() => {
      ...
   });
});


❌ That’s callback hell, not composition.

🎯 Interview-ready summary

“Beginners often forget to return values, confuse function references with execution, mix async and sync functions, and misunderstand execution order.”