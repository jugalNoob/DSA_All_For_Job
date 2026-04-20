function kandam(data) {
    let maxdata = data[0];
    let current = data[0];

    for (let i = 1; i < data.length; i++) {

        // decide: start new OR continue
        current = Math.max(data[i], current + data[i]);

        // update max
        if (current > maxdata) {
            maxdata = current;
        }
    }

    return maxdata;
}

console.log(kandam([10, 20, 30])); // 60
