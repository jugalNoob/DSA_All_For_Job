✅ Fixed & Working Code (Insertion Sort)
let data = [9, 2, 1];

for (let i = 1; i < data.length; i++) {
  
  let current = data[i];
  let j = i - 1;

  while (j >= 0 && current < data[j]) {
    data[j + 1] = data[j];
    j--;
  }

  data[j + 1] = current;
}

console.log(data); // [1, 2, 9]
