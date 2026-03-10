Perfect 👍 let’s do a real, simple Node.js example of function composition, the kind interviewers love.

🧩 Real Node.js Use Case
👉 Request processing pipeline

In Node.js APIs, we often:

validate input

sanitize data

add metadata

send response

Instead of one big function → we compose small functions.

✅ Step-by-step simple example
1️⃣ Small reusable functions
// validate input
const validateUser = (req) => {
    if (!req.name) throw new Error("Name is required");
    return req;
};

// sanitize input
const sanitizeUser = (req) => {
    req.name = req.name.trim().toLowerCase();
    return req;
};

// add server data
const addTimestamp = (req) => {
    req.createdAt = Date.now();
    return req;
};


Each function:

does one job

returns modified data

2️⃣ Compose them
const pipe = (...fns) => value =>
    fns.reduce((acc, fn) => fn(acc), value);

3️⃣ Use in Node.js route
const processUser = pipe(
    validateUser,
    sanitizeUser,
    addTimestamp
);

// Simulating Express req.body
try {
    const user = processUser({ name: "  Jugal  " });
    console.log(user);
} catch (err) {
    console.error(err.message);
}

🖨 Output
{
  name: "jugal",
  createdAt: 1700000000000
}

🧠 What just happened?
request →
validate →
sanitize →
add timestamp →
final object


✔ clean
✔ readable
✔ production pattern

🚀 Why this is REAL in Node.js

Express middlewares work like this

Logging, auth, validation pipelines

Functional services & utilities

🎯 Interview one-liner

“In Node.js, function composition is commonly used to build request-processing pipelines where each function handles a single responsibility.”

If you want next:

Express middleware version

async/await composition

error-safe composition

Redis / Kafka pipeline example (your favorite 😉)