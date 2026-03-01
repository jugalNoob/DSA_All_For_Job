3️⃣ Range Sum Query
📌 Problem

Given array, answer multiple queries:

Sum from index L to R


Example:

arr = [3,5,2,8,6]

Query:
sum(1,3) → 5+2+8 = 15

❌ Without Prefix Sum

Each query = O(n)

If 10,000 queries → slow

✅ With Prefix Sum
Build once → O(n)
Each query → O(1)
✅ Code
class RangeSumQuery {
    constructor(arr) {
        this.prefix = [];
        this.prefix[0] = arr[0];

        for (let i = 1; i < arr.length; i++) {
            this.prefix[i] = this.prefix[i - 1] + arr[i];
        }
    }

    sumRange(left, right) {
        if (left === 0) {
            return this.prefix[right];
        }
        return this.prefix[right] - this.prefix[left - 1];
    }
}

const obj = new RangeSumQuery([3,5,2,8,6]);

console.log(obj.sumRange(1,3)); // 15

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