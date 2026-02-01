let data = 'jugal karan sharma';
let result = '';

for (let i = 0; i < data.length; i++) {


    debugger;
  if (data[i] === ' ') {
    result += ' ';
    console.log(result)
    continue;
  }

//   debugger;

  if (i === 0 || data[i - 1] === ' ') { // data[6 -1] === ' '


    result += data[i].toUpperCase();
  } else {
    result += data[i].toLowerCase();
  }
  // ✅ log AFTER the loop
// console.log(`i=${i}, char=${data[i]}, result=${result}`);

}



// let data = 'jugal karan sharma';

// let result = data
//   .split(' ')                 // ["jugal", "karan", "sharma"]
//   .map(word =>
//     word[0].toUpperCase() + word.slice(1).toLowerCase()
//   )
//   .join(' ');

// console.log(result); // Jugal Karan Sharma




// console.log(result); // Jugal Karan Sharma


