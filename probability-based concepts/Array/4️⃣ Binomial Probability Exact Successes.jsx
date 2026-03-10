4️⃣ Binomial Probability: Exact Successes

Problem: 3 coin flips. Probability of exactly 2 heads.

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

const n = 3; // trials
const k = 2; // successes
const p = 0.5; // probability of head

const probability = nCr(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
console.log(`Probability of exactly 2 heads: ${probability}`);
// Output: 0.375


Explanation:

Use combinations formula nCr

Multiply by p^k * (1-p)^(n-k) → Binomial probability