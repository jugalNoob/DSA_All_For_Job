📈 Array Buy & Sell Logic (Stock Profit Problem)

This is one of the most common interview questions:

Given an array of stock prices, find the maximum profit b
y choosing one buy day and one sell day.
(You must buy first, then sell later)

🔥 Example Input
let prices = [7, 1, 5, 3, 6, 4];

Expected Output
Max Profit = 5  (Buy at 1, Sell at 6)

🧠 Brute Force Solution (O(n²)) – Try all buy/sell combinations
let prices = [7, 1, 5, 3, 6, 4];

let maxProfit = 0;

for (let i = 0; i < prices.length; i++) {
  for (let j = i + 1; j < prices.length; j++) {
    if (prices[j] - prices[i] > maxProfit) {
      maxProfit = prices[j] - prices[i];
    }
  }
}


console.log("Max Profit:", maxProfit);

Output
Max Profit: 5

📌 What this code is doing?
🔁 You're using two loops to check every possible buy & sell pair


| Meaning                                      | Variable    |
| -------------------------------------------- | ----------- |
| `i` = Buy day index                          | First loop  |
| `j` = Sell day index (must be after buy day) | Second loop |




🔍 Step-by-step Execution
Array: [7, 1, 5, 3, 6, 4]
Start
maxProfit = 0

i = 0 → Buy at price 7


Loop j starts from i+1:



| j | Sell price | Profit = price[j] - price[i] | maxProfit |
| - | ---------- | ---------------------------- | --------- |
| 1 | 1          | 1-7 = **-6**                 | 0         |
| 2 | 5          | 5-7 = **-2**                 | 0         |
| 3 | 3          | 3-7 = **-4**                 | 0         |
| 4 | 6          | 6-7 = **-1**                 | 0         |
| 5 | 4          | 4-7 = **-3**                 | 0         |


Nothing > 0, so maxProfit remains 0

i = 1 → Buy at price 1

| j | Sell price | Profit      | maxProfit       |
| - | ---------- | ----------- | --------------- |
| 2 | 5          | 5-1 = **4** | 4               |
| 3 | 3          | 3-1 = **2** | 4               |
| 4 | 6          | 6-1 = **5** | **5** (updated) |
| 5 | 4          | 4-1 = **3** | 5               |


i = 2 → Buy at 5

| j     | Profit |
| ----- | ------ |
| 3 (3) | -2     |
| 4 (6) | 1      |
| 5 (4) | -1     |


No update.

i = 3 → Buy at 3


| j     | Profit |
| ----- | ------ |
| 4 (6) | 3      |
| 5 (4) | 1      |



Still no update.

i = 4 → Buy at 6
| j     | Profit |
| ----- | ------ |
| 5 (4) | -2     |




🏁 Final Output
Max Profit: 5


( Buy at 1, Sell at 6 )

🧠 Concept Summary





⛔ Very slow for large inputs → Brute Force

⚡ Optimized Solution (Best approach: O(n) Time)

Keep track of:

The minimum price so far (best buy point)

The maximum profit found so far

let prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price; // update min/buy price
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice); // potential sell
    }
  }

  return maxProfit;
}

console.log("Max Profit:", maxProfit(prices));

Output
Max Profit: 5



| Step  | Min Price | Current Price | Profit | Max Profit |
| ----- | --------- | ------------- | ------ | ---------- |
| 7     | 7         | -             | 0      | 0          |
| **1** | **1**     | -             | 0      | 0          |
| 1     | 5         | 5-1 = 4       | 4      |            |
| 1     | 3         | 3-1 = 2       | 4      |            |
| 1     | **6**     | **6-1 = 5**   | **5**  |            |
| 1     | 4         | 4-1 = 3       | 5      |            |




💎 Return 0 If No Profit Possible
console.log(maxProfit([7, 6, 4, 3, 1]));  // 0 (always decreasing)

🎁 Extra: Return Buy/Sell Days
function stockDays(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  let buyDay = 0;
  let sellDay = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      buyDay = i;
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
      sellDay = i;
    }
  }

  return { maxProfit, buyDay, sellDay };
}

console.log(stockDays([7,1,5,3,6,4]));

Output
{ maxProfit: 5, buyDay: 1, sellDay: 4 }

🎯 Key Takeaways

Brute force: try all combos → O(n²)

Optimized: single pass tracking min price → O(n) (best solution)

Real interview must discuss time complexity + explanation

Want next?
🔥 Buy & sell multiple transactions (unlimited trades)?

Example:

[7, 1, 5, 3, 6, 4] → profit = (5-1)+(6-3)=7


Should I show multi-transaction version? 😊