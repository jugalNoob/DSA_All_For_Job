Good choice 🔥
Valid Parentheses is a VERY common interview question (Stack based problem).

💼 Problem

Given a string containing only:

( )  { }  [ ]


Return true if:

Every opening bracket has a matching closing bracket

Order is correct

✅ Examples
"()"        → true
"()[]{}"    → true
"(]"        → false
"([)]"      → false
"{[]}"      → true

🧠 Why Stack Is Needed?

Because:

Last opened bracket must close first

This is LIFO (Last In First Out)

Stack follows LIFO

🔥 Interview Solution (Stack Method)
function isValid(str) {
    let stack = [];

    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {

        // If opening bracket → push
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        // If closing bracket
        else {
            let top = stack.pop();

            if (top !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"));        // true
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true

🔎 Step-by-Step Example

Input:

"([)]"


Process:

( → push → stack = ['(']

[ → push → stack = ['(', '[']

) → pop → '['
But ) should match (
❌ Mismatch → return false

🎯 Important Line
return stack.length === 0;


Why?

If stack not empty → means some opening brackets were never closed.

Example:

"((("


Stack still has items → invalid.

⏱ Complexity

Time → O(n)
Space → O(n)

🚀 More Professional Cleaner Version
function isValid(str) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (!pairs[char]) {
            stack.push(char);
        } else if (stack.pop() !== pairs[char]) {
            return false;
        }
    }

    return stack.length === 0;
}

🔥 Interview Follow-Up Questions

They may ask:

What if string contains other characters?

What if input size is very large?

Can you do without stack? (No proper way)

Extend for < > brackets also