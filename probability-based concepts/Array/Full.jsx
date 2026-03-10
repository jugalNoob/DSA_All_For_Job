// ==============================
// DSA Probability Examples in JS
// ==============================

// 1️⃣ Basic Probability: Pick even number
const arr1 = [1, 2, 3, 4, 5, 6];
const evenCount = arr1.filter(n => n % 2 === 0).length;
console.log("1️⃣ Probability of even number:", evenCount / arr1.length); // 0.5

// 2️⃣ Complement Rule: At least one duplicate
const n2 = 3;
const totalOutcomes2 = Math.pow(3, 3); // 3^3
const favorableNoDuplicate = 6; // 3!
console.log("2️⃣ Probability at least one duplicate:", 1 - favorableNoDuplicate / totalOutcomes2); // 0.7777

// 3️⃣ Expected Value: Random pick from array
const arr3 = [1, 2, 3];
const prob3 = 1 / arr3.length;
let expectedValue = arr3.reduce((acc, val) => acc + val * prob3, 0);
console.log("3️⃣ Expected value:", expectedValue); // 2

// 4️⃣ Binomial Probability: Exactly 2 heads in 3 coin flips
function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }
function nCr(n, r) { return factorial(n) / (factorial(r) * factorial(n - r)); }
const n4 = 3, k4 = 2, p4 = 0.5;
console.log("4️⃣ Probability exactly 2 heads:", nCr(n4, k4) * Math.pow(p4, k4) * Math.pow(1 - p4, n4 - k4)); // 0.375

// 5️⃣ Probability all unique in random array of size 5
const n5 = 5;
const totalOutcomes5 = Math.pow(5, 5);
const favorable5 = factorial(5);
console.log("5️⃣ Probability all unique:", favorable5 / totalOutcomes5); // 0.0384

// 6️⃣ Probability two dice sum to 7
let favorable6 = 0;
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j === 7) favorable6++;
  }
}
const total6 = 36;
console.log("6️⃣ Probability sum = 7:", favorable6 / total6); // 0.1667

// 7️⃣ Probability first element > 3 in array
const arr7 = [1, 2, 3, 4, 5];
const count7 = arr7.filter(n => n > 3).length;
console.log("7️⃣ Probability first >3:", count7 / arr7.length); // 0.4

// 8️⃣ Randomized selection: pick even from shuffled array
const arr8 = [1, 2, 3, 4, 5, 6];
const randomPick = arr8[Math.floor(Math.random() * arr8.length)];
console.log("8️⃣ Random pick:", randomPick, "Probability even ~", evenCount / arr8.length);

// 9️⃣ Probability of collision in hash table
const hashSize = 10, keys = 3;
let noCollision = 1;
for (let i = 0; i < keys; i++) {
  noCollision *= (hashSize - i) / hashSize;
}
console.log("9️⃣ Probability at least one collision:", 1 - noCollision); // ~0.27

// 🔟 Probability sum of 3 coin flips = 2 heads
const n10 = 3, k10 = 2, p10 = 0.5;
console.log("🔟 Probability sum 2 heads:", nCr(n10, k10) * Math.pow(p10, k10) * Math.pow(1 - p10, n10 - k10)); // 0.375

// 1️⃣1️⃣ Expected comparisons in Randomized QuickSort (simplified)
const n11 = 4; // array size
let expectedComparisons = 0;
for (let i = 0; i < n11; i++) {
  for (let j = i + 1; j < n11; j++) {
    expectedComparisons += 2 / (j - i + 1); // probability i and j compared
  }
}
console.log("1️⃣1️⃣ Expected QuickSort comparisons:", expectedComparisons.toFixed(2));
