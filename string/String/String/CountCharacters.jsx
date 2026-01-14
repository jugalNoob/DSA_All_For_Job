✅ Count Characters in a String
function countChars(str) {
  const map = {};
  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
}
console.log(countChars('hello')); // { h: 1, e: 1, l: 2, o: 1 }




✅ Find Character with Maximum Occurrence
function maxChar(str) {
  const map = {};
  let max = 0, maxChar = '';
  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
    if (map[char] > max) {
      max = map[char];
      maxChar = char;
    }
  }
  return maxChar;
}
console.log(maxChar('javascript')); // 'a'




✅ Count Words in a String
function countWords(str) {
  return str.trim().split(/\s+/).length;
}
console.log(countWords('  hello   world from  jugal  ')); // 4