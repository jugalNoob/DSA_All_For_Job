
// 3️⃣ Difference Array (range update optimization)
function prefixArray(data) {
    let prefix = [];

    prefix[0] = data[0];

    for (let i = 1; i < data.length; i++) {
        prefix[i] = prefix[i - 1] + data[i];
    }

    return prefix;
}

function rangeSum(prefix, L, R) {
    if (L === 0) return prefix[R];
    return prefix[R] - prefix[L - 1];
}

let arr = [3, 1, 7, 2, 6];

let prefix = prefixArray(arr);

console.log(prefix);          
console.log(rangeSum(prefix, 1, 3));


| Query | Meaning              | Result     |
| ----- | -------------------- | ---------- |
| (0,2) | sum from index 0 → 2 | 3+1+7 = 11 |
| (1,3) | sum from index 1 → 3 | 1+7+2 = 10 |
| (2,4) | sum from index 2 → 4 | 7+2+6 = 15 |

🔎 Why This Is Powerful

This is used in:

Database analytics

Financial dashboards

Metrics tracking

Time-series APIs

Exactly what backend systems need.

🚀 Advanced Tip (Interview Gold)

If interviewer asks:

"What if array updates frequently?"

Prefix sum won't work efficiently.

Then answer:

👉 Use Segment Tree (O(log n) updates)
👉 Or Fenwick Tree (Binary Indexed Tree)

That shows senior-level thinking.