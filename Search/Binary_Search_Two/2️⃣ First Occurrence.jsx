let data = [10, 20, 30, 40, 40, 40, 50, 60, 70];
let target = 40;

let lastOccurrence = -1;
start = 0;
end = data.length - 1;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (data[mid] === target) {
        lastOccurrence = mid; // store index
        start = mid + 1;      // move right to find later occurrence
    } else if (data[mid] < target) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log("Last Occurrence Index:", lastOccurrence); // 5
