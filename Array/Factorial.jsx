function factorial(n) {
    if (n === 0) return 1        // Base case
    return n * factorial(n - 1)  // Recursive step
}

console.log(factorial(5))  // Output: 120


// 🧠 How It Works (Step by Step)
// factorial(5)
// = 5 * factorial(4)
// = 5 * (4 * factorial(3))
// = 5 * (4 * (3 * factorial(2)))
// = 5 * (4 * (3 * (2 * factorial(1))))
// = 5 * (4 * (3 * (2 * (1 * factorial(0)))))
// = 5 * 4 * 3 * 2 * 1 * 1
// = 120


function factorial(n){

    let result = 1

    for(let i = 1; i <= n; i++){
        result = result * i
    }

    return result
}

console.log(factorial(5))



1️⃣ Permutations

Permutation = arrangement matters

Example:
You have 3 numbers

[1,2,3]


How many ways can we arrange them?

123
132
213
231
312
321


Total

6


Formula

P(n,r) = n! / (n-r)!


Example

n = 5
r = 2

P(5,2) = 5! / (5-2)!
       = 120 / 6
       = 20


Meaning:

20 ways to arrange 2 items from 5.

2️⃣ Combinations

Combination = order does NOT matter

Example:

Choose 2 students from 3

Students

A B C


Possible groups

AB
AC
BC


Not counted

BA
CA
CB


Total

3


Formula

C(n,r) = n! / (r! (n-r)!)


Example

C(5,2)

= 5! / (2! × 3!)
= 120 / (2 × 6)
= 10

3️⃣ JavaScript Code
Factorial
function factorial(n){
    let res = 1
    for(let i=1;i<=n;i++){
        res *= i
    }
    return res
}

Permutation
function permutation(n,r){
    return factorial(n) / factorial(n-r)
}

console.log(permutation(5,2)) // 20

Combination
function combination(n,r){
    return factorial(n) / (factorial(r) * factorial(n-r))
}

console.log(combination(5,2)) // 10

4️⃣ Simple Difference
Type	Order Matters	Example
Permutation	Yes	Passwords
Combination	No	Team selection
5️⃣ Real World Examples

Permutation

PIN codes
passwords
seating arrangements


Combination

lottery
team selection
survey groups

6️⃣ Quick Trick

If order matters

Permutation


If order doesn't matter

Combination


✅ In DSA interviews, permutations and combinations appear in:

recursion problems

backtracking

probability questions

subset generation

Example problems:

Generate all permutations of an array

Generate all subsets

N-Queens problem