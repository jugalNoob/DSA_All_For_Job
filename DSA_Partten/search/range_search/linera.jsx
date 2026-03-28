let data = [10, 20, 30, 40, 50, 650, 70, 80];

let search = 40;

let unique = undefined;
let result = [];

for (let i = 0; i < data.length; i++) {

    if (data[i] === search) {
        unique = data[i];
    }

    if (data[i] < search) {
        result.push(data[i]); // ✅ correct
    }

}

console.log(unique); // 40
console.log(result); // [10, 20, 30]
