
function pascalRow(n) {
    let row = [1];

    let prev = 1;

    for (let i = 1; i < n; i++) {
        let curr = (prev * (n - i)) / i;
        row.push(curr);
        prev = curr;
    }

    return row;
}

console.log(pascalRow(5)); // [1,4,6,4,1]



| i | Formula   | Value |
| - | --------- | ----- |
| 0 | start     | 1     |
| 1 | (1 × 4)/1 | 4     |
| 2 | (4 × 3)/2 | 6     |
| 3 | (6 × 2)/3 | 4     |
| 4 | (4 × 1)/4 | 1     |





function pascalRow(n) {
    let row = [1]
    let prev = 1

    for (let i = 1; i < n; i++) {
        let curr = (prev * (n - i)) / i
        row.push(curr)
        prev = curr
    }

    return row
}

function pascalTriangle(n) {
    let result = []

    for (let i = 1; i <= n; i++) {
        result.push(pascalRow(i))
    }

    return result
}

console.log(pascalTriangle(5))



💻 Code (Best for Interviews)




function pascalRow(n) {
    let row = [1];

    let prev = 1;

    for (let i = 1; i < n; i++) {
        let curr = (prev * (n - i)) / i;
        row.push(curr);
        prev = curr;
    }

    return row;
}

console.log(pascalRow(5)); // [1,4,6,4,1]



| i | Formula   | Value |
| - | --------- | ----- |
| 0 | start     | 1     |
| 1 | (1 × 4)/1 | 4     |
| 2 | (4 × 3)/2 | 6     |
| 3 | (6 × 2)/3 | 4     |
| 4 | (4 × 1)/4 | 1     |
