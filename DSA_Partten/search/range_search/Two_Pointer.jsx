let data = [10, 20, 30, 40, 50, 650, 70, 80];
let search = 40;

let left = 0;
let right = data.length - 1;

let result = [];
let found = false;

while (left <= right) {

    // ✅ Check left side
    if (data[left] < search) {
        result.push(data[left]);
        left++;
    } 
    else if (data[left] === search) {
        found = true;
        break;
    } 
    else {
        break;
    }

    // ❗ Optional: check right side (if needed)
    if (data[right] === search) {
        found = true;
        break;
    }

    right--;
}

console.log(found ? search : "Not Found");
console.log(result);
