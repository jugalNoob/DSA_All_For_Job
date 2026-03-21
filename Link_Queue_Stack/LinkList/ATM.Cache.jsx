function atmWithdraw(amount) {
    let notes = [2000, 500, 200, 100];
    let result = {};

    for (let note of notes) {
        let count = Math.floor(amount / note);
        if (count > 0) {
            result[note] = count;
            amount %= note;
        }
    }

    return result;
}

console.log(atmWithdraw(3700));
