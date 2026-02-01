let data = 'ju sh';

let obj = {};

for (let i = 0; i < data.length; i++) {
    let orgine = data[i];

    // skip space
    if (orgine === ' ') continue;

    if (obj[orgine]) {
        obj[orgine]++;
    } else {
        obj[orgine] = 1;
    }
}

console.log(obj);
