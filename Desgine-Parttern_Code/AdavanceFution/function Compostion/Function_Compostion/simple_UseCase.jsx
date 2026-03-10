🧠 Real-life example: Making Tea ☕

Steps:
1️⃣ Boil water
2️⃣ Add tea leaves
3️⃣ Add sugar

Each step uses the result of the previous step.

That is function composition.

✅ Code version (super simple)
// Step 1
function boilWater(water) {
    return water + " + boiled water";
}

// Step 2
function addTea(water) {
    return water + " + tea leaves";
}

// Step 3
function addSugar(tea) {
    return tea + " + sugar";
}

🔗 Compose the functions
function compose(f1, f2, f3) {
    return function (value) {
        return f3(f2(f1(value)));
    };
}

▶️ Use it
const makeTea = compose(boilWater, addTea, addSugar);

const result = makeTea("water");
console.log(result);

🖨 Output
water + boiled water + tea leaves + sugar

🧠 What happened step-by-step
water
 → boilWater
 → addTea
 → addSugar
 → final tea

🎯 One-line interview answer

“Function composition is chaining multiple functions where the output of one function becomes the input of the next.”

⭐ Bonus: Modern reusable version
const pipe = (...fns) => value =>
    fns.reduce((acc, fn) => fn(acc), value);

const makeTea = pipe(boilWater, addTea, addSugar);


If you want next:


Got it — very simple, real-life explanation 👌
No code, no jargon.

🧠 Function Composition (Real Life Meaning)

Function composition = doing work step-by-step, where each step uses the result of the previous step.

🍞 Real-life example: Making toast

1️⃣ Bread
2️⃣ Toast the bread
3️⃣ Apply butter
4️⃣ Pack it

Each step:

takes input from previous step

gives output to next step

Bread → Toast → Butter → Pack


👉 That chain is function composition.

🚗 Another example: Car wash
Dirty car
 → Wash
 → Dry
 → Polish
 → Ready car


Each worker does one job only, in order.

📦 Online shopping example (backend)
User order
 → Validate order
 → Calculate price
 → Apply discount
 → Save order


Each step uses the result of the previous one.

🎯 One-line definition (easy to remember)

Function composition means combining small steps so that the output of one step becomes the input of the next.

💡 Why this idea is powerful

Simple steps

Easy to change one step

No confusion

Same idea used in Node.js, Express, middleware, pipelines

If you want:

1-minute interview answer

kid-friendly explanation

diagram-style explanation

quick JS code to match this example