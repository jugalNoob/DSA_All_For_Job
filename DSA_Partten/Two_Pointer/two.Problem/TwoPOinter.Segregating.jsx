let arr = [0, 1, 0, 1, 1, 0, 0, 1];

let left = 0;
let right = arr.length - 1;

while (left < right) {
    while (arr[left] === 0 && left < right) left++;
    while (arr[right] === 1 && left < right) right--;

    if (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

console.log(arr);


| left | right | arr               | Action     |
| ---- | ----- | ----------------- | ---------- |
| 0    | 7     | [0,1,0,1,1,0,0,1] | swap 1 & 0 |
| 1    | 6     | [0,0,0,1,1,0,1,1] | swap 1 & 0 |
| 2    | 5     | [0,0,0,1,1,1,1,1] | done       |



let arr = [0, 1, 0, 1, 1, 0, 0, 1];

let zeroCount = 0;

// Count number of 0s
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeroCount++;
}

// Fill 0s first
for (let i = 0; i < zeroCount; i++) {
    arr[i] = 0;
}

// Fill remaining with 1s
for (let i = zeroCount; i < arr.length; i++) {
    arr[i] = 1;
}

console.log(arr);
