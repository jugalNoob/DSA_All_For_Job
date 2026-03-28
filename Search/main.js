let data = [10, 20, 30, 40, 50, 50, 50, 60, 70, 80]
let firstoccur = -1
let find = 50
let start = 0
let end = data.length - 1

while (start <= end) {
    let mid = Math.floor((start + end)/2)

    if (data[mid] === find) {
        firstoccur = mid       // store index
       start = mid + 1          // move left to find first occurrence
    } else if (find > data[mid]) {
        start = mid + 1
             
    } else {
        end = mid - 1
    }
}

console.log(firstoccur)

