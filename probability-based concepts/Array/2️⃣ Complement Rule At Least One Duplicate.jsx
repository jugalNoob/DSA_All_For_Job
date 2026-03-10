2️⃣ Complement Rule: At Least One Duplicate

Problem: Randomly pick 3 numbers from [1,2,3] with replacement. Probability at least one duplicate.

const n = 3; // array size
const totalOutcomes = Math.pow(3, 3); // 3^3 = total possibilities

// Favorable for no duplicates = 3! = 6
const favorableNoDuplicate = 6;

const probabilityNoDuplicate = favorableNoDuplicate / totalOutcomes;
const probabilityAtLeastOneDuplicate = 1 - probabilityNoDuplicate;

console.log(`Probability at least one duplicate: ${probabilityAtLeastOneDuplicate}`);
// Output: 0.777777...


Explanation:

Total outcomes = 
3
3
3
3
 (3 choices for each pick)

Favorable outcomes (all unique) = 3! = 6

Use complement rule: 1 - P(all unique)