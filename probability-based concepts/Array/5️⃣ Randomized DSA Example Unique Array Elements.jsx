5️⃣ Randomized DSA Example: Unique Array Elements

Problem: Randomly generate an array of size 5 with numbers 1–5. Probability all elements unique.

const n = 5;
const totalOutcomes = Math.pow(5, 5); // 5^5

// Favorable outcomes = 5! = 120
const favorable = factorial(5);

const probability = favorable / totalOutcomes;
console.log(`Probability all elements unique: ${probability}`);
// Output: 0.0384


Explanation:

Total outcomes = each element can be any of 5 → 5^5

Favorable = all numbers unique → 5!

Divide → probability

✅ Key Takeaways in Code

Count favorable outcomes → .filter(), factorial(), combinations

Count total outcomes → Math.pow() for multiple picks

Divide favorable by total → probability

Use complement rule for “at least one”

Expected value → sum(value * probability)

Randomized algorithm math translates directly to code