Great—this one looks tricky at first, but once you see the pattern, it’s actually simple 🔥

🧠 Problem: Count and Say

You generate a sequence where each term describes the previous one

Example:
n = 1 → "1"
n = 2 → "11"      (one 1)
n = 3 → "21"      (two 1s)
n = 4 → "1211"    (one 2, one 1)
n = 5 → "111221"  (one 1, one 2, two 1s)

🔥 Core Idea

👉 You read the previous string and build the next one
👉 Count same consecutive characters

🧠 Step-by-Step Thinking

Let’s build up to n = 5:

Step 1:
"1"

Step 2:
"1" → one 1 → "11"

Step 3:
"11" → two 1s → "21"

Step 4:
"21" → one 2, one 1 → "1211"

Step 5:
"1211" →
one 1 → 11  
one 2 → 12  
two 1 → 21  

Result: "111221"

🧠 Pattern Recognition

👉 This is:

String traversal
Counting consecutive characters
Similar to run-length encoding
✅ Approach
Start with "1"
Loop from 2 → n
For each step:
Read previous string
Count consecutive characters
Build new string
💻 Code (Interview Ready)
function countAndSay(n) {
    let result = "1";

    for (let i = 2; i <= n; i++) {
        let temp = "";
        let count = 1;

        for (let j = 1; j < result.length; j++) {
            if (result[j] === result[j - 1]) {
                count++;
            } else {
                temp += count + result[j - 1];
                count = 1;
            }
        }

        // last group
        temp += count + result[result.length - 1];

        result = temp;
    }

    return result;
}

console.log(countAndSay(5)); // "111221"

🔍 Dry Run (Important Part)

For "1211":

j=1 → 2 ≠ 1 → add "11"
j=2 → 1 ≠ 2 → add "12"
j=3 → 1 == 1 → count++
end → add "21"

⏱️ Complexity
Time: O(n * m)
(m = length of string, grows each step)
Space: O(m)