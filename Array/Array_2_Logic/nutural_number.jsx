
1:::Sum of natural number:::::::::::::::::::::::::::::
function sumofnatural(num){
    // let sum=0;
    // for(let i=0; i<=num; i++){
    //     sum=sum+i
    // }
    // return sum
console.log(sumofnatural(5)) will output 15 (sum of natural numbers up to 5: 1 + 2 + 3 + 4 + 5 = 15).
    return  num*(num+1)/2
}
console.log(sumofnatural(5))
console.log(sumofnatural(10))
console.log(sumofnatural(8))



function sumOfNatural(num) {
    console.log("📥 Input number:", num);

    // 🧠 Using formula: n * (n + 1) / 2
    let sum = (num * (num + 1)) / 2;

    console.log(`📊 Sum of first ${num} natural numbers = ${sum}`);
    return sum;
}

// 🚀 Example usages
sumOfNatural(5);   // 1 + 2 + 3 + 4 + 5 = 15
sumOfNatural(10);  // 1 + 2 + ... + 10 = 55
sumOfNatural(8);   // 1 + 2 + ... + 8 = 36





1️⃣ Problem: Sum of Natural Numbers

Definition: Calculate the sum of first n natural numbers: 1 + 2 + 3 + … + n.

Input: n = 5

Output: 15

2️⃣ Approach 1: Looping (Iterative)
function sumOfNaturalIterative(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

console.log(sumOfNaturalIterative(5));  // 15


Time Complexity: O(n) → loops from 1 to n

Space Complexity: O(1) → single variable

3️⃣ Approach 2: Mathematical Formula

Formula:

Sum of first n natural numbers
=
𝑛
⋅
(
𝑛
+
1
)
2
Sum of first n natural numbers=
2
n⋅(n+1)
	​

function sumOfNaturalFormula(num){
    return num * (num + 1) / 2;
}

console.log(sumOfNaturalFormula(5));  // 15
console.log(sumOfNaturalFormula(10)); // 55
console.log(sumOfNaturalFormula(8));  // 36


Time Complexity: O(1) → no loop

Space Complexity: O(1)

4️⃣ Step-by-Step Example

Input: n = 5

Using formula: 5 * (5+1)/2 = 30/2 = 15

Using loop: 1+2+3+4+5 = 15

5️⃣ Interview Variants

Sum of natural numbers in a range [a, b]

function sumRange(a,b){
    return (b*(b+1)/2) - ((a-1)*a/2);
}
console.log(sumRange(3,7)); // 3+4+5+6+7 = 25


Sum of even/odd numbers only

Even numbers: n*(n+1) for first n even numbers

Odd numbers: n*n for first n odd numbers

Recursive approach

function sumRecursive(n){
    if(n===0) return 0;
    return n + sumRecursive(n-1);
}


Time Complexity: O(n), Space Complexity: O(n) due to recursion stack

6️⃣ Key Tips for Interviews

Always ask if n can be large → prefer formula (O(1)) over loop (O(n)).

Consider range sums, even/odd sums, or custom increments.

Be ready to trace small examples (n=5, n=10) to explain the logic.