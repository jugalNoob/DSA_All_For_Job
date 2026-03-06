function manualSplit(str) {
    let words = [];
    let current = '';

    for (let i = 0; i < str.length; i++) {

        if (str[i] !== ' ') {
            current += str[i];   // build word
        } else {
            if (current !== '') {
                words.push(current);  // push word
                current = '';         // reset
            }
        }
    }

    // push last word
    if (current !== '') {
        words.push(current);
    }

    return words;
}

console.log(manualSplit("I love javascript programming"));
