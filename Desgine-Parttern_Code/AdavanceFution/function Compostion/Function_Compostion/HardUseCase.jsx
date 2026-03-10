Great follow-up 👍
Function composition isn’t just theory — it’s used everywhere in real projects. Here are clear, real-world use cases, especially relevant for Node.js / backend interviews.

✅ 1️⃣ Request processing (Node.js / Express) ⭐⭐⭐

Use case:
Validate → sanitize → transform → save

const validate = data => {
    if (!data.email) throw new Error("Email required");
    return data;
};

const sanitize = data => ({
    ...data,
    email: data.email.trim().toLowerCase()
});

const addMeta = data => ({
    ...data,
    createdAt: Date.now()
});

const pipe = (...fns) => value =>
    fns.reduce((v, fn) => fn(v), value);

const processRequest = pipe(validate, sanitize, addMeta);

// Express-style usage
processRequest({ email: "  TEST@GMAIL.COM " });


📌 Why composition?

Each step is reusable

Clean pipeline

Easy to test

✅ 2️⃣ Authentication & Authorization

Use case:
Decode token → verify → extract user → check role

const decode = token => ({ id: 1, role: "admin" });
const checkRole = user => {
    if (user.role !== "admin") throw new Error("Forbidden");
    return user;
};

const authFlow = pipe(decode, checkRole);


📌 Used in middleware chains

✅ 3️⃣ Data transformation (DB → API response)

Use case:
Raw DB data → format → remove sensitive fields

const removePassword = user => {
    delete user.password;
    return user;
};

const formatUser = user => ({
    ...user,
    name: user.name.toUpperCase()
});

const transformUser = pipe(removePassword, formatUser);


📌 Very common in MongoDB + Node.js

✅ 4️⃣ Logging & Monitoring

Use case:
Format log → add timestamp → send to logger

const format = msg => `LOG: ${msg}`;
const timestamp = msg => `${Date.now()} - ${msg}`;

const log = pipe(format, timestamp);
log("User logged in");

✅ 5️⃣ Validation pipelines (Interview favorite)
const notEmpty = x => {
    if (!x) throw new Error("Empty");
    return x;
};

const minLength = x => {
    if (x.length < 5) throw new Error("Too short");
    return x;
};

const validateInput = pipe(notEmpty, minLength);
validateInput("hello");

✅ 6️⃣ Async workflows (Node.js services)
const fetchUser = async id => ({ id, name: "Jugal" });
const addRole = async user => ({ ...user, role: "admin" });

const asyncPipe = (...fns) => input =>
    fns.reduce((p, fn) => p.then(fn), Promise.resolve(input));

const getUser = asyncPipe(fetchUser, addRole);

getUser(1).then(console.log);


📌 Used in microservices

🧠 Why companies LOVE composition

| Benefit     | Why it matters                 |
| ----------- | ------------------------------ |
| Reusability | Same functions used everywhere |
| Readability | Linear, clean flow             |
| Testing     | Test functions independently   |
| Scalability | Easy to add/remove steps       |

🎯 Interview one-liner (memorize this)

“Function composition is used to build clean, reusable 
processing pipelines where each function has a single 
responsibility.”