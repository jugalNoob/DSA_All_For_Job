console.log(findAPdiff([2, 4, 6, 8, 10])); // 2




function findAPdiff(arr) {
    if (arr.length < 2) return 0;

    let diff = arr[1] - arr[0];

console.log(diff)

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return "Not an AP";
        }
    }

    return diff;
}

console.log(findAPdiff([2, 4, 6, 8, 10])); // 2