const arr = [1, 2, 3, 4, 5, 6];

// Count favorable outcomes
const evenCount = arr.filter(num => num % 2 === 0).length;

// Total outcomes
const total = arr.length;

// Probability
const probability = evenCount / total;

console.log(`Probability of picking an even number: ${probability}`);
// Output: 0.5


Explanation:

filter counts favorable outcomes.

Divide by total elements → gives probability.