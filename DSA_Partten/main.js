let data = [10, 20, 30, 40, 50, 60]

let midIndex = Math.floor(data.length / 2)

console.log(data[midIndex])

let leftside = data.slice(0, midIndex)
let rightside = data.slice(midIndex)

console.log("Middle index:", midIndex)
console.log("Left side:", leftside)
console.log("Right side:", rightside)
