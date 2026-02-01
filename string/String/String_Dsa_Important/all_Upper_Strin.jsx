function toUpper(data) {
    let result = '';

    for (let i = 0; i < data.length; i++) {
        let charCode = data.charCodeAt(i);

        // if lowercase (a–z)
        if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(charCode - 32);
        } else {
            result += data[i];
        }
    }

    return result;
}

console.log(toUpper('jugal')); // JUGAL
