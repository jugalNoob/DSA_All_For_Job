
function maxProfitMultiple(prices){
    let profit = 0

    for(let i=1; i<prices.length; i++){
        if(prices[i] > prices[i-1]){
            profit += prices[i] - prices[i-1]
        }
    }

    return profit
}

console.log(maxProfitMultiple([7,1,5,3,6,4])) // 7


🔍 Step-by-step Loop
✅ Input:
[7, 1, 5, 3, 6, 4]

🔁 Iteration Breakdown
👉 Start:
price = 0

🔹 i = 1 (value = 1)
prev = 7
curr = 1

1 > 7 ❌
skip


👉 price = 0

🔹 i = 2 (value = 5)
prev = 1
curr = 5

5 > 1 ✅
price += (5 - 1) = 4


👉 price = 4

🔹 i = 3 (value = 3)
prev = 5
curr = 3

3 > 5 ❌
skip


👉 price = 4

🔹 i = 4 (value = 6)
prev = 3
curr = 6

6 > 3 ✅
price += (6 - 3) = 3


👉 price = 7

🔹 i = 5 (value = 4)
prev = 6
curr = 4

4 > 6 ❌
skip


👉 price = 7

✅ Final Answer:
7

🔥 Visual Flow (Same style)
data:   [7, 1, 5, 3, 6, 4]
diff:     -6  +4  -2  +3  -2
price:  0 → 0 → 4 → 4 → 7 → 7

🧠 Intuition (Super Simple)

👉

1 → 5  = +4
3 → 6  = +3


Total = 7

⚡ One-line Rule

👉
"If today price > yesterday → take profit"



🔍 Step-by-step (Your style)
✅ Input:
[16, 17, 4, 3, 5, 2]

🔁 Iteration Breakdown
👉 Start:
profit = 0

🔹 i = 1 (value = 17)
prev = 16
curr = 17

17 > 16 ✅
profit += (17 - 16) = 1


👉 profit = 1

🔹 i = 2 (value = 4)
prev = 17
curr = 4

4 > 17 ❌
skip


👉 profit = 1

🔹 i = 3 (value = 3)
prev = 4
curr = 3

3 > 4 ❌
skip


👉 profit = 1

🔹 i = 4 (value = 5)
prev = 3
curr = 5

5 > 3 ✅
profit += (5 - 3) = 2


👉 profit = 3

🔹 i = 5 (value = 2)
prev = 5
curr = 2

2 > 5 ❌
skip


👉 profit = 3

✅ Final Answer:
3

console.log(maxProfitMultiple([7,1,5,3,6,4])) // 7
🔥 Visual Flow (Same style as you like)
data:   [16, 17, 4, 3, 5, 2]
diff:     +1   -13  -1   +2  -3
profit:  0 → 1 → 1 → 1 → 3 → 3

🧠 Key Difference (VERY IMPORTANT)

| Single Transaction | Multiple Transaction   |
| ------------------ | ---------------------- |
| Track `minprice`   | Compare `prev vs curr` |
| One buy/sell       | Many buy/sell          |
| Global max         | Local profits          |



✅ Maximum profit = 5

4️⃣ Code (JavaScript)
function byandseel(data){
    let max = 0
    let min = Infinity

    for(let i = 0; i < data.length; i++){
        if(data[i] < min){
            min = data[i]  // buy at lowest price
        } else if(data[i] - min > max){
            max = data[i] - min  // sell at highest profit
        }
    }

    return max
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(byandseel(prices)); // Output: 5

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
