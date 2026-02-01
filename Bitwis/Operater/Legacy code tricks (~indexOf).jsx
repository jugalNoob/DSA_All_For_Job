Ah yes 😄 — the ~indexOf trick is a classic JavaScript hack you’ll see in older codebases. Let me explain step by step in simple terms.

1️⃣ How indexOf works

arr.indexOf(value) or str.indexOf(value) returns:


| Value Found? | indexOf Returns   |
| ------------ | ----------------- |
| Yes          | position (0,1,2…) |
| No           | -1                |



Example:

let fruits = ['apple', 'banana', 'mango'];

fruits.indexOf('banana'); // 1 ✅
fruits.indexOf('pear');   // -1 ❌

2️⃣ The Problem

You often write:

if (fruits.indexOf('banana') !== -1) {
    console.log('Found!');
}


Works fine, but verbose, especially in older JS code.

3️⃣ Enter ~ (Bitwise NOT)

~x = -(x + 1)

So:

fruits.indexOf('banana') // 1
~1 → -(1+1) → -2 → truthy ✅

fruits.indexOf('pear')   // -1
~-1 → -(-1 + 1) → 0 → falsy ❌


💡 Key:

If element exists, ~index → truthy

If element doesn’t exist, ~index → falsy

4️⃣ Using it in if
if (~fruits.indexOf('banana')) {
    console.log('Found!');
}


Same result as !== -1, but shorter.

5️⃣ Why it was popular

Shorter code before ES6 introduced includes()

Works in any boolean context (if, while, etc.)

People loved “clever hacks” in legacy JS libraries.

6️⃣ Modern Alternative
if (fruits.includes('banana')) {
    console.log('Found!');
}


Much clearer and readable

No need for ~ hack

🧠 TL;DR

~indexOf converts -1 → 0 (falsy), other numbers → truthy

Used in legacy JS to check “exists” in one line

Replaced now by includes(), but you still see it in old code