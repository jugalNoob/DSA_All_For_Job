Good 👍 you’re asking:

How to append a value at the end of an array using a loop?

Let’s explain clearly.

✅ Best Way (No Loop Needed)


let data = [10, 20, 30, 40];
let append = 50;

data.push(append);

console.log(data);


Output:

[10, 20, 30, 40, 50]


👉 This is the correct and simplest way.

🔁 If Interviewer Says: “Don’t use push()”

Then use loop logic manually.

✅ Method 1: Using length (Manual Append)
let data = [10, 20, 30, 40];
let append = 50;

data[data.length] = append;

console.log(data);


Output:

[10, 20, 30, 40, 50]


Because:

data.length = 4
data[4] = 50

✅ Method 2: Using loop (not practical but possible)
let data = [10, 20, 30, 40];
let append = 50;

let newArray = [];

for (let i = 0; i < data.length; i++) {
  newArray[i] = data[i];
}

newArray[newArray.length] = append;

console.log(newArray);

🎯 Interview Concept

Appending means:

Insert element at index = array.length

Time Complexity:

O(1)  (Amortized for push)

⚠️ Important

Don’t do this:

for (let i = 0; i < data.length; i++) {
  data[i] = append; ❌
}


That replaces all values.

🚀 Real-World Note (Node.js)

In production:

push() is optimized

Manual loop copying is inefficient

For immutability (React / Redux style):

let newArr = [...data, append];
