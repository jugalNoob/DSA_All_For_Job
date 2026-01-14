// sort.js
export default function sortser(data) {
    for (let i = 0; i < data.length; i++) {
      let current = data[i];
      let j = i - 1;
      while (j >= 0 && data[j] > current) {
        data[j + 1] = data[j];
        j--; // same as j-- instead of j = j - 1
      }
      data[j + 1] = current;
    }
  
    return data; // Important to return the sorted array
  }
  