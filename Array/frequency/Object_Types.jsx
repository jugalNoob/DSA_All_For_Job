let data = {
    name: 'jugal',
    roll: 45,
    class: '10th'
}

let object={}

for (let key in data) {
    let value = data[key]

    if (typeof value === 'string') {
        object[value] = 'string'
    }
}
console.log(object)
