👉 You used:

Prefix Max ❌
Range Sum Formula ❌
✅ FIX 1: If you want Range SUM
Correct Prefix Sum
function prefixSum(data) {
    let prefix = [];
    prefix[0] = data[0];

    for (let i = 1; i < data.length; i++) {
        prefix[i] = prefix[i - 1] + data[i];
    }

    return prefix;
}

Correct Range Function
function rangeSum(prefix, l, r) {
    if (l === 0) return prefix[r];
    return prefix[r] - prefix[l - 1];
}

✅ Usage
let arr = [3, 2, 1, 4, 5];

let pre = prefixSum(arr);
console.log(pre); // [3, 5, 6, 10, 15]

console.log(rangeSum(pre, 1, 4)); // 12 (2+1+4+5)