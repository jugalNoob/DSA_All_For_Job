let data = [0,2, 4, 5, 9, 'jugal', 'karan', 'anku'];

for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "number") {
    console.log( data[i]);
  }

  if(typeof data[i] === 'string'){
       console.log(i, data[i]);
  }
    if(data[i] % 2 === 0){
    console.log(i,'evennumber', data[i]);
  }
}


let numbers = data.filter(v => typeof v === "number");
console.log(numbers);


// let numbers = data.filter(v => typeof v === "number");
// console.log(numbers);