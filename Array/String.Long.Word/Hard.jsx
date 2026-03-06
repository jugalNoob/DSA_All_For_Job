function longestWord(str) {
    let longest = '';
    let current = '';

    for (let i = 0; i < str.length; i++) {

        if (str[i] !== ' ') {
            current += str[i];
        } else {
            if (current.length > longest.length) {
                longest = current;
            }
            current = '';
        }
    }

    // check last word
    if (current.length > longest.length) {
        longest = current;
    }

    return longest;
}

console.log(longestWord("I love javascript programming"));
