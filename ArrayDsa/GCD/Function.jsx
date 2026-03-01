Excellent 🔥
You just implemented the Euclidean Algorithm for GCD (Greatest Common Divisor).

Let’s understand clearly how it works.

📌 Your Code
function gcd(a, b){

 while(b !== 0){

    let temp = b
    b = a % b
    a = temp
 }
 return a
}

console.log(gcd(12, 18)); // 6

🧠 Core Idea (Very Important)

👉 The GCD of two numbers does NOT change if we replace:

(a, b)


with

(b, a % b)


So we keep replacing until remainder becomes 0.

When b becomes 0 → a is the GCD.

🔍 Dry Run: gcd(12, 18)
Initial:
a = 12
b = 18

🔁 Iteration 1

temp = 18

b = 12 % 18 = 12

a = 18


Now:

a = 18
b = 12

🔁 Iteration 2
temp = 12
b = 18 % 12 = 6
a = 12


Now:

a = 12
b = 6

🔁 Iteration 3
temp = 6
b = 12 % 6 = 0
a = 6


Now:

a = 6
b = 0


Loop stops because:

b === 0


Return:

a = 6


✅ Final Answer = 6

🎯 Why This Works

Mathematical rule:

gcd(a, b) = gcd(b, a % b)


Example:

gcd(18, 12)
= gcd(12, 6)
= gcd(6, 0)
= 6


When remainder becomes 0, the divisor at that step is the GCD.

⚡ Why Is This Efficient?

Time Complexity:

O(log(min(a,b)))


Very fast even for huge numbers.

🧠 Visual Understanding

Think like this:

We are repeatedly asking:

How many times does b fit inside a?

The remainder keeps shrinking until it becomes 0.

🏆 Interview Explanation (Simple)

If interviewer asks:

Why does this algorithm work?

Answer:

Because the greatest common divisor of two numbers is unchanged if the larger number is replaced by its remainder when divided by the smaller number.

Clean. Mathematical. Professional.