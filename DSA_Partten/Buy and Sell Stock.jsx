✅ Maximum profit = 5

4️⃣ Code (JavaScript)
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price; // update min price
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice; // update max profit
        }
    }

    return maxProfit;
}

// Example usage
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5

5️⃣ Complexity Analysis

Time: O(n) → Single pass through the array

Space: O(1) → Only two variables (minPrice, maxProfit)


1️⃣ Problem Statement

Given an array prices where prices[i] is the price of a stock on day i, you want to buy once and sell once to maximize profit.

You must buy before you sell.

Return the maximum profit. If no profit is possible, return 0.

Example:

prices = [7, 1, 5, 3, 6, 4]
Output: 5 // Buy at 1, sell at 6

2️⃣ Naive Approach (Brute Force)

Check all pairs (i, j) with i < j

Profit = prices[j] - prices[i]

Keep track of maximum

Time Complexity: O(n²)
Space Complexity: O(1)

❌ Not suitable for interviews due to inefficiency.

3️⃣ Optimal Approach (One Pass)

Idea:

Keep track of the minimum price seen so far.

Compute profit if sold today: profit = price_today - min_price_so_far.

Update max_profit as we go.

Step-by-Step Example

Array: [7, 1, 5, 3, 6, 4]


| Day | Price | Min Price So Far | Profit Today | Max Profit |
| --- | ----- | ---------------- | ------------ | ---------- |
| 0   | 7     | 7                | 0            | 0          |
| 1   | 1     | 1                | 0            | 0          |
| 2   | 5     | 1                | 4            | 4          |
| 3   | 3     | 1                | 2            | 4          |
| 4   | 6     | 1                | 5            | 5          |
| 5   | 4     | 1                | 3            | 5          |
