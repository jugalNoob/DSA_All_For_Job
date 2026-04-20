function balanced(data) {
    let stack = [];
    let map = { ')': '(', '}': '{', ']': '[' };




    for (let i = 0; i < data.length; i++) {
        let str = data[i];

        if (map[str]) {                    // Closing bracket found
            // BUG FIX: Check if stack is empty BEFORE popping
            if (stack.length === 0 || stack.pop() !== map[str]) {
                return false;
            }
        } else {                           // Opening bracket
            stack.push(str);
        }
    }

    return stack.length === 0;             // All brackets must be closed
}

// Test cases
console.log(balanced("[]"));      // ✅ true
// console.log(balanced("[}"));      // ✅ false
// console.log(balanced("()"));      // ✅ true
// console.log(balanced("({[]})"));  // ✅ true
// console.log(balanced("([)]"));    // ✅ false  (wrong order)
// console.log(balanced("("));       // ✅ false
// console.log(balanced("]"));       // ✅ false  (starts with closing)
// console.log(balanced(""));        // ✅ true  (empty string)
⚙️ Your Code Logic
let map = { ')': '(', '}': '{', ']': '[' };


👉 This means:

) should match (
} should match {
] should match [


    Example 1: balanced("[]")
Step-by-step execution:


| Step | Char | Stack             | Action    |
| ---- | ---- | ----------------- | --------- |
| 1    | `[`  | `[`               | push      |
| 2    | `]`  | `[]` → `[]` (pop) | match `[` |



Explanation:
[ → pushed
] → check:
pop → [
map[]] = [
✅ match → OK
Final:


stack.length === 0 → true
✔️ Output: true




❌ Example 2: balanced("[}")
Step-by-step:

| Step | Char | Stack     | Action      |
| ---- | ---- | --------- | ----------- |
| 1    | `[`  | `[`       | push        |
| 2    | `}`  | `[` → pop | compare `{` |



Explanation:
[ → pushed
} → check:
pop → [
map[}] = {
❌ { !== [ → mismatch

👉 Immediately returns false




🧠 Important Insight
This line is the key:
if(stack.pop() !== map[str])


👉 Meaning:

Take last opening bracket
Compare with expected opening bracket
If mismatch → ❌ invalid
⚠️ Edge Case
balanced("]")

stack is empty
stack.pop() → undefined
map[]] → [

👉 undefined !== '[' → ❌ false ✔️ correct behavior

🧩 Real Interview Explanation (Short Answer)

👉 You can say:

"I use a stack to track opening brackets. When I encounter a closing bracket, I check if it matches the most recent opening bracket using a map. If it doesn't match or stack is empty, I return false. At the end, if the stack is empty, the string is balanced."

🔥 Time & Space Complexity
Time: O(n)
Space: O(n) (stack)
🚀 Small Optimization (Optional)
if (!stack.length || stack.pop() !== map[str]) {
    return false;
}


👉 Prevents popping from empty stack