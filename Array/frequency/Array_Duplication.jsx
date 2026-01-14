let data = [1, 2, 1]
let obj = {}
let unique = []

for (let i = 0; i < data.length; i++) {
    let value = data[i]

    if (!obj[value]) {
        obj[value] = true
        unique.push(value)
    }
}

console.log(unique, 'unique')
console.log(obj)
