1. Stock Span Problem (very frequent question)
Problem statement (simplified):
You are given daily stock prices (array of numbers).
For each day, calculate the span = number of consecutive previous days (including today) for which today's price was greater than or equal to all those previous days' prices.
Example:
textPrices:  [100, 80, 60, 70, 60, 75, 85]
Output:  [1,   1,  1,  2,  1,  4,  6]
Explanation of last few:

75 → greater/equal than previous 4 days (60,70,60,75) → span = 4
85 → greater/equal than previous 6 days → span = 6

Solution using prefixMax (naive but very clear way):
JavaScriptfunction stockSpan(prices) {
    const n = prices.length;
    const prefix = prefixMax(prices);   // reuse your function
    const span = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        // go left until we find a strictly greater price
        let count = 1;
        let j = i - 1;
        while (j >= 0) {
            if (prices[j] > prices[i]) break;
            count++;
            j--;
        }
        span[i] = count;
    }

    return span;
}

// But wait — we can make it faster using prefixMax cleverly? Actually no...
// The efficient way uses monotonic stack (O(n)), not prefixMax directly.
// But prefixMax helps you understand "maximum so far" logic very well.
The best & most common solution uses a monotonic decreasing stack (not prefix max), but understanding prefix max helps build intuition for these kinds of "looking left for bigger/smaller" problems.