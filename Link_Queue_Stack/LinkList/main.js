let data = [30, 20, 10];

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {   // ← fixed: -1 and -i
        if (data[j] > data[j + 1]) {
            // swap
            let temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp;
        }
    }
}

console.log(data); // [10, 20, 30]