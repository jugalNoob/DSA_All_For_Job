comments

🔥 1. Fractional Knapsack (Greedy)
function fractionalKnapsack(items, capacity) {
    // items = [{value, weight}]
    
    // sort by value/weight ratio (DESC)
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let totalValue = 0;

    for (let item of items) {
        if (capacity === 0) break;

        if (item.weight <= capacity) {
            totalValue += item.value;
            capacity -= item.weight;
        } else {
            // take fraction
            totalValue += (item.value / item.weight) * capacity;
            capacity = 0;
        }
    }

    return totalValue;
}
