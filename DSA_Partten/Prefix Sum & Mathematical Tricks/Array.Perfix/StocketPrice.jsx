function stocketbuy(data){

    let pricemin=data[0]
    let max=0 


    for(let i=1; i<data.length; i++){

        pricemin=Math.min(pricemin ,data[i])
        max=Math.max(max , data[i] - pricemin)
    }

    return max
}

console.log(stocketbuy([16, 17, 4, 3, 5, 2]))


🔁 Iteration Breakdown
👉 Start:
minprice = 16
maxprice = 0

🔹 i = 1 (value = 17)
minprice = Math.min(16, 17) = 16
profit = 17 - 16 = 1
maxprice = Math.max(0, 1) = 1

🔹 i = 2 (value = 4)
minprice = Math.min(16, 4) = 4   ✅ updated
profit = 4 - 4 = 0
maxprice = Math.max(1, 0) = 1

🔹 i = 3 (value = 3)
minprice = Math.min(4, 3) = 3   ✅ updated
profit = 3 - 3 = 0
maxprice = Math.max(1, 0) = 1

🔹 i = 4 (value = 5)
minprice = Math.min(3, 5) = 3
profit = 5 - 3 = 2   🔥
maxprice = Math.max(1, 2) = 2

🔹 i = 5 (value = 2)
minprice = Math.min(3, 2) = 2   ✅ updated
profit = 2 - 2 = 0
maxprice = Math.max(2, 0) = 2

✅ Final Answer:
2

🔥 Visual Flow (Very Important)
data:     [16, 17, 4, 3, 5, 2]
minprice: 16 → 16 → 4 → 3 → 3 → 2
profit:    -    1    0    0    2    0
maxprofit: 0 → 1 → 1 → 1 → 2 → 2

🧠 Core Pattern (Memorize)

👉 Two lines control everything:

minprice = Math.min(minprice, data[i])   // best buy
maxprice = Math.max(maxprice, profit)   // best sell

⚡ One-line intuition

👉
"Buy at lowest so far, sell at current, track best profit"