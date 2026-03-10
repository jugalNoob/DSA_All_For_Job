function rangeUpdate(n, updates) {

    let diff = new Array(n).fill(0);

    for (let [L, R, val] of updates) {

        diff[L] += val;

        if (R + 1 < n) {
            diff[R + 1] -= val;
        }
    }

    // Build final array using prefix sum
    let result = new Array(n);
    result[0] = diff[0];

    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] + diff[i];
    }

    return result;
}

let updates = [
    [1,3,5],
    [2,4,2]
];

console.log(rangeUpdate(5, updates));
