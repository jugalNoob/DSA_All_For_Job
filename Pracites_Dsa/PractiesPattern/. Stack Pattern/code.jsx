🧠 5. Stack Pattern

👉 Use when:

matching pairs
remove duplicates
expression evaluation
Keywords:
valid parentheses
remove adjacent
nested structure
Template:
let stack = [];

for (let char of s) {
    if (/* condition */) {
        stack.pop();
    } else {
        stack.push(char);
    }
}

🔥 Problems:
Valid parentheses
Remove duplicates
Decode String




function Stackuser(data) {
    let stack = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        // Example condition: remove if top of stack equals current item
        if (stack.length > 0 && stack[stack.length - 1] === item) {
            stack.pop();
        } else {
            stack.push(item);
        }
    }

    return stack;
}

console.log(Stackuser([1, 1, 2, 3, 4])); // Output: [2, 3, 4]


let stack=[]

// Push
stack.push('(');   // stack = ['(']
stack.push('{');   // stack = ['(', '{']
stack.push('[');   // stack = ['(', '{', '[']



console.log(stack)

console.log(stack[stack.length - 1]);  // '['
console.log(stack.length)


let tops=stack.pop()

console.log(tops);        // '['

// Check empty
console.log(stack.length === 0);  // false