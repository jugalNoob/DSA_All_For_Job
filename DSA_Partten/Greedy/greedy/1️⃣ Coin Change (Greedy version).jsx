1️⃣ Coin Change (Greedy version)

Problem:
You have coins [1,5,10,25].
Find minimum coins to make an amount.

Example

Amount = 36
Coins = 25 + 10 + 1
Total coins = 3

Code
function greedy(amount) {
    let coins = [25, 10, 5, 1];
    let count = 0;

    for (let coin of coins) {
        count += Math.floor(amount / coin);
        amount %= coin;
    }

    return count;
}


console.log(coinChange(36))


| Step | Coin Used | Amount Before | Amount After | Count |
| ---- | --------- | ------------- | ------------ | ----- |
| 1    | 25        | 36            | 11           | 1     |
| 2    | 10        | 11            | 1            | 2     |
| 3    | 1         | 1             | 0            | 3     |




function coinChange(amount) {
    let coins = [25, 10, 5, 1]; // Start with largest coin for greedy
    let count = 0;

    // debugger;

    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            count++;
        }
    }
    return count;
}

console.log(coinChange(36)); // Output: 3 (25 + 10 + 1)



Output:

3

3️⃣ Step-by-Step Greedy Execution

Coins:

[25,10,5,1]


Amount:

36

Step 1
amount >= 25


Take coin:

36 - 25 = 11
count = 1

Step 2
amount >= 10


Take coin:

11 - 10 = 1
count = 2

Step 3
amount >= 5


Skip.

Step 4
amount >= 1


Take coin:

1 - 1 = 0
count = 3

4️⃣ Final Result

Coins used:

25 + 10 + 1


Total coins:

3

5️⃣ Why This Is Greedy

Greedy rule:

Always take the largest coin first


Steps:

25 → 10 → 1


We never reconsider previous decisions.

6️⃣ Visual Flow
Amount = 36

36 ≥ 25 → take 25
Remaining = 11

11 ≥ 10 → take 10
Remaining = 1

1 ≥ 1 → take 1
Remaining = 0

7️⃣ Time Complexity
O(n)


Where:

n = number of coin types

8️⃣ Important Interview Note ⚠️

Greedy does NOT work for all coin systems.

Example:

coins = [1,3,4]
amount = 6


Greedy solution:

4 + 1 + 1 = 3 coins


Optimal solution:

3 + 3 = 2 coins


This requires Dynamic Programming.

✅ Since you're learning DSA logic, the next greedy problems that build strong logic are: