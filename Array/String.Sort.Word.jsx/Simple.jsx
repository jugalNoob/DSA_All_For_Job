function shortestWord(str) {
    let words = str.split(' ');

    let shortest = words[0];   // assume first word is shortest

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }

    return shortest;
}

console.log(shortestWord("I love javascript programming"));
