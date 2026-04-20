function allPairs(data, target) {
    let map = {};
    let result = [];

    for (let i = 0; i < data.length; i++) {
        let num = data[i];
        let diff = target - num;

        if (map[diff] !== undefined) {
            // handle multiple occurrences
            for (let idx of map[diff]) {
                result.push([idx, i]);
            }
        }

        // store indices as array (important for duplicates)
        if (!map[num]) {
            map[num] = [];
        }
        map[num].push(i);
    }

    return result;
}

console.log(allPairs([1, 2, 3, 4, 5], 5));
// [[1,2], [0,3]]
