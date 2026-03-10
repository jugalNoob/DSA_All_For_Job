1️⃣ Coin Change (Greedy version)

Problem:
You have coins [1,5,10,25].
Find minimum coins to make an amount.

Example

Amount = 36
Coins = 25 + 10 + 1
Total coins = 3

Code
function coinChange(amount){
    let coins=[25,10,5,1]
    let count=0

    for(let coin of coins){
        while(amount >= coin){
            amount -= coin
            count++
        }
    }

    return count
}

console.log(coinChange(36))


Time Complexity

O(n)