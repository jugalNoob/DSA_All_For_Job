function isvalid(data) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < data.length; i++) {
        let str = data[i];

        if (map[str]) {
            stack.push(map[str]); // push expected closing
        } else {
            if (stack.length === 0 || stack.pop() !== str) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isvalid('[]')); // true




Let’s break your code in a very simple way.

This is a Stack + Expected Closing Bracket approach.

🧠 Key idea of your code

Instead of storing opening brackets, you store the expected closing bracket.

'(' → push ')'
'[' → push ']'
'{' → push '}'


So stack always contains what SHOULD come next.

🔍 Example 1: isValid("[]")
Step by step:
1. [ encountered
stack.push(']')
stack = [']']

2. ] encountered
stack.pop() → ']'
compare: ']' === ']' ✔
stack = []

Final check:
stack.length === 0 → true

✅ Output:
true

🔍 Example 2: isValid("[}")
Step 1: [
stack = [']']

Step 2: }

Now we check:

stack.pop() → ']'
compare: ']' !== '}'

❌ Mismatch happens here

So:

return false

⚡ Why this approach is powerful

Instead of checking pairs manually like:

( with )
[ with ]
{ with }

👉 You convert problem into:

“What should come next?”

That makes comparison O(1) per character.

🧠 Stack state intuition
Input: [ }


    | Step | Char | Stack                   |
| ---- | ---- | ----------------------- |
| 1    | `[`  | `]`                     |
| 2    | `}`  | mismatch → return false |


🚀 Why this is interview favorite

Because it tests:

Stack understanding (LIFO)
Mapping logic
Early failure detection (optimization)
💡 Important insight

Your code is already optimal O(n) and clean.

Only rule:

If stack is empty or mismatch happens → return false immediately
Final answer depends on stack being empty

🔥 One-line mental model

“Push what you expect next, and compare when actual input comes.”



Yes — you’ve got the core idea, just need to phrase it correctly.

🧠 Correct flow (very important)

In your approach:

👉 Step 1: Decide what to do with current character
👉 Step 2: Either push OR check

So the logic is:

✅ 1. If opening bracket → PUSH
( [ {  → push expected closing

✅ 2. If closing bracket → CHECK
) ] }  → compare with stack top

⚡ So correct mental model:

First push (for opening), otherwise check (for closing)

NOT “push first then check always”

🧠 Simple flow diagram
Character
   ↓
Is opening? → YES → push expected closing
   ↓ NO
Check with stack top
   ↓
Mismatch → false

🔍 Example: "[()]"


| Char | Action   | Stack |
| ---- | -------- | ----- |
| `[`  | push `]` | `]`   |
| `(`  | push `)` | `] )` |
| `)`  | check    | `]`   |
| `]`  | check    | empty |

✔ valid

❌ Example: "[} "


| Char | Action          | Stack   |
| ---- | --------------- | ------- |
| `[`  | push `]`        | `]`     |
| `}`  | check `] !== }` | ❌ false |



💡 Final correct mindset

👉 Not “push first then check”
👉 But:

“Opening → push expected
Closing → compare with stack top”