3️⃣ Examples of “conditions”:
Example 1: Remove adjacent duplicates
let s = "abbaca";
let stack = [];

for (let char of s) {
    if (stack.length && stack[stack.length - 1] === char) {
        stack.pop();  // remove duplicate
    } else {
        stack.push(char);
    }
}

console.log(stack.join('')); // Output: "ca"


Explanation:

Start: stack = []
'a' → push → ['a']
'b' → push → ['a','b']
'b' → top of stack is 'b', same as char → pop → ['a']
'a' → top 'a' == char → pop → []
'c' → push → ['c']
'a' → push → ['c','a']