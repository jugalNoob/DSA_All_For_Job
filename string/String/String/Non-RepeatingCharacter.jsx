✅ Find the First Non-Repeating Character
function firstNonRepeatingChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeatingChar('aabbcddee')); // 'c'
//#endregion




✅ Remove All Non-Alphabetic Characters


function cleanString(str) {
  return str.replace(/[^a-zA-Z]/g, '');
}
console.log(cleanString('he!!ll##o@@')); // "hello"