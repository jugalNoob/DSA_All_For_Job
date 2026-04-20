function productExceptSelf(arr) {
    let n = arr.length;
    let result = new Array(n).fill(1);

    let prefix = 1;

    // Left pass
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= arr[i];
    }

    let suffix = 1;

    // Right pass
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= arr[i];
    }

    return result;
}

console.log(productExceptSelf([10, 3, 5, 6, 2]));
