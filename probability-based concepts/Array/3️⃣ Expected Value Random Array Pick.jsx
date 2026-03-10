3️⃣ Expected Value: Random Array Pick

Problem: Pick a random number from [1,2,3]. What is the expected value?

const nums = [1, 2, 3];
let expectedValue = 0;

// Each number has equal probability 1/3
const prob = 1 / nums.length;

for (let num of nums) {
    expectedValue += num * prob;
}

console.log(`Expected value: ${expectedValue}`);
// Output: 2


Explanation:

E[X] = sum(value * probability)

Each element has probability 1/3 → multiply and sum