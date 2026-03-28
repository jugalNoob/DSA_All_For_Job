let data = [10, 20, 30, 40, 50, 650, 70, 80];
let search = 40;

let left = 0, right = data.length - 1;
let index = -1;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (data[mid] === search) {
        index = mid;
        break;
    } else if (data[mid] < search) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

let result = index !== -1 ? data.slice(0, index) : [];

console.log(index !== -1 ? search : "Not Found");
console.log(result);
