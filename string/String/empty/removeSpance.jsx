let str = 'xxx   xxx  xxx';
let result = '';

for(let i = 0; i < str.length; i++){
    if(str[i] !== ' '){   // keep only non-space characters
        result += str[i];
    }
}

console.log(result); // "xxxxxx xxx" → "xxxxxx" if all spaces removed
