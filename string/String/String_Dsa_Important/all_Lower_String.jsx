function toLower(data) {
    let result = '';

    for (let i = 0; i < data.length; i++) {
        let charCode = data.charCodeAt(i);

        // if uppercase (A–Z)
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(charCode + 32);
        } else {
            result += data[i];
        }
    }

    return result;
}

console.log(toLower('JUGAL')); // jugal
