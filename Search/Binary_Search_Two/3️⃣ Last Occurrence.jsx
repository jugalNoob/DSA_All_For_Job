let data = [10, 20, 30, 40, 40, 40, 50, 60, 70];
let target = 40;

let start = 0;
let end = data.length - 1;
let firstOccurrence = -1;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (data[mid] === target) {
        firstOccurrence = mid;   // store index
        end = mid - 1;           // continue searching on left
    } else if (data[mid] < target) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log("First Occurrence Index:", firstOccurrence);


| Iteration | start       | end | mid | data[mid] | Action               | firstOccurrence |
| --------- | ----------- | --- | --- | --------- | -------------------- | --------------- |
| 1         | 0           | 8   | 4   | 40        | Found → move left    | 4               |
| 2         | 0           | 3   | 1   | 20        | 20 < 40 → move right | 4               |
| 3         | 2           | 3   | 2   | 30        | 30 < 40 → move right | 4               |
| 4         | 3           | 3   | 3   | 40        | Found → move left    | 3               |
| End       | start > end |     |     |           | Stop                 | 3               |
