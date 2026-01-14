// for (let i = 1; i <= 6; i++) {
//     console.log("*".repeat(i));
// }

// for (let i = 5; i >= 1; i--) {
//     console.log("*".repeat(i));
// }




// for (let i = 1; i <= 5; i++) {
//     let spaces = " ".repeat(5 - i);
//     let stars = "*".repeat(2 * i - 1);
//     console.log(spaces + stars);
// }


// ✅ 1. Simple Number Triangle

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

// ✅ 2. Continuous Number Triangle

let num = 1;
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += num + " ";
        num++;
    }
    console.log(row);
}

// ✅ 3. Right-Aligned Number Triangle

for (let i = 1; i <= 5; i++) {
    let spaces = " ".repeat(5 - i);
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(spaces + row);
}
