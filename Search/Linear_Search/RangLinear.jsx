let data = [10, 20, 30, 40, 50, 60, 70]
let search = 60

let position = -1
let startRange = 40

for (let i = 0; i < data.length; i++) {

    // ✅ range condition
    if (data[i] >= startRange && data[i] <= search) {
        console.log(data[i], 'range')
    }

    // ✅ find index
    if (data[i] === search) {
        position = i
        // break
    }
}

console.log("Index:", position)