export default function dupl(data) {
    let isDuplicate = false;
  
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
        if (data[i] === data[j]) { 
          isDuplicate = true;
          console.log("Duplicate found:", data[i]);
        }
      }
    }
  
    if (!isDuplicate) {
      console.log("No duplicates found");
    }
  }
  
  



// let data = ["jugal", "sharma", "karan", "kanika" , "jugal" , "karan"];

// let isDuplicate = false;

// for (let i = 0; i < data.length; i++) {
//   for (let j = i + 1; j < data.length; j++) {
//     if (data[i] === data[j]) {
//       isDuplicate = true;
//       console.log("Duplicate found:", data[i]);
//     }
//   }
// }

// if (!isDuplicate) {
//   console.log("No duplicates found");
// }