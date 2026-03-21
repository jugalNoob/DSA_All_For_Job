✅ 1. Brute Force (Simple)
function intersection(a, b) {
    let result = [];

    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i]) && !result.includes(a[i])) {
            result.push(a[i]);
        }
    }

    return result;
}

console.log(intersection([1,2,3,4], [3,4,5]));

⚡ 2. Optimized (Using Set) 🔥

👉 Best for interviews

function intersection(a, b) {
    let setA = new Set(a);
    let result = [];

    for (let num of b) {
        if (setA.has(num)) {
            result.push(num);
            setA.delete(num); // avoid duplicates
        }
    }

    return result;
}

console.log(intersection([1,2,3,4], [3,4,4,5]));

🔥 3. One-Liner (Advanced)
let result = [...new Set(a)].filter(x => b.includes(x));

🧠 4. If Arrays are Sorted (Two Pointer)

function intersection(a, b) {
    let i = 0, j = 0;
    let result = [];

    while (i < a.length && j < b.length) {
        if (a[i] === b[j]) {
            result.push(a[i]);
            i++;
            j++;
        } else if (a[i] < b[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}

📊 Example
intersection([1,2,3,4], [2,3,5])


👉 Output:

[2, 3]