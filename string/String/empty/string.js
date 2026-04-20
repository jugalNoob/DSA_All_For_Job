let str = 'xxx   xxx  xxx';
let count = 0;

for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){   // check if character is a space
        count++;
    }
}

console.log(count); // 5

let str = 'xxx   xxx  xxx';
let count = 0;
let inSpace = false;

for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
        if(!inSpace){   // start of a new gap
            count++;
            inSpace = true;
        }
    } else {
        inSpace = false; // end of current gap
    }
}

console.log(count); // 2 gaps


let str = 'xxx   xxx  xxx';
let count = 0;

for(let i = 0; i < str.length; i++){
    if(str[i] === ' ' ||  [i-1] ){   // check if character is a space
console.log(str[i])
    }
}

  


let str='jugal sharma'


for(let i=0; i<str.length; i++){

    if(i === 0  || str[i-1] === ' '){

        console.log(str[i].toUpperCase())
    }else{
        console.log(str[i].toLowerCase())
    }


}
 