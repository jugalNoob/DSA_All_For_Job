let data = 'jugal sharma';
let result = '';

for (let i = 0; i < data.length; i++) {

    if (i === 0 || data[i - 1] === ' ') {
        result += data[i].toUpperCase();
    } else {
        result += data[i].toLowerCase();
    }
}

console.log(result);
