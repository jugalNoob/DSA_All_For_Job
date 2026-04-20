✅ Examples of Prime Numbers
2 ✅
3 ✅
5 ✅
7 ✅
11 ✅

👉 Example:

7 → factors: 1, 7 ✔️ (only 2 factors → prime)
❌ Not Prime (Composite Numbers)
4 ❌ (1, 2, 4 → 3 factors)
6 ❌ (1, 2, 3, 6)
9 ❌ (1, 3, 9)
⚠️ Important Rules
0 and 1 are NOT prime
2 is the ONLY even prime number

function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
