
function shortestWords(str) {
    let words = str.split(' ');
    let shortestLength = words[0].length;
    let result = [words[0]];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestLength) {
            shortestLength = words[i].length;
            result = [words[i]];
        } 
        else if (words[i].length === shortestLength) {
            result.push(words[i]);
        }
    }

    return result;
}

console.log(shortestWords("I am at go"));
