
// // | Question                   | Answer                                                                                 |
// // | -------------------------- | -------------------------------------------------------------------------------------- |
// // | Does it run right to left? | ❌ No                                                                                   |
// // | Does it run left to right? | ✅ Yes                                                                                  |
// // | Why?                       | Because `for (let i = 0; i < data.length; i++)` starts from index 0 and increments i++ |

 
 ::::::::::::::::::::::::Anagram ...........


function  checkAnnar(str1 , str2){
    let objectstr={};
if(str1.length !== str2.length){
    return false;
}
for(ch of str1){
    // console.log(ch)
    objectstr[ch]=(objectstr[ch] || 0) + 1;
}
// console.log(objectstr)
for(ch of str2){
    // console.log(objectstr[ch])
    if(!objectstr[ch]){
        return false  
    }
objectstr[ch]--
}
return true
// console.log(objectstr)
}
// console.log(  checkAnnar("hello" , "olle"))

console.log(  checkAnnar([1 , 2 , 3], [3 , 2 , 1,0]))

1:::
function checkAnagram(input1, input2) {
    const sortedInput1 = [...input1].sort().join('');
    const sortedInput2 = [...input2].sort().join('');

    return sortedInput1 === sortedInput2;
}

console.log(checkAnagram("hello", "olle"));        // true
console.log(checkAnagram([1, 2, 3], [3, 2, 1]));  // true
console.log(checkAnagram("hello", "world"));      // false
console.log(checkAnagram([1, 2, 3], [3, 2, 2]));  // false



function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  return s.split('').sort().join('') === t.split('').sort().join('');
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false




function annygram(arr1, arr2) {
    // If lengths differ, can't be an anagram
    if (arr1.length !== arr2.length) {
        return false;
    }

    let obj = {};

    // Count frequency of elements in arr1
    for (let i = 0; i < arr1.length; i++) {
        let str1 = arr1[i];
        if (obj[str1]) {
            obj[str1]++; // If already exists, increment
        } else {
                obj[str1] = 1; // If not, set to 1
        }
    }

    // Check against arr2
    for (let i = 0; i < arr2.length; i++) {
        let str2 = arr2[i];
        if (!obj[str2]) {
            return false; // Element not found or count is 0
        } else {
            obj[str2]--; // Decrement count
        }
    }

    return true;
}

// Test cases
console.log(annygram(["h", "e", "l", "l", "o"], ["o", "l", "l", "e", "h"])); // true
console.log(annygram([1, 2, 3]
      , [3, 2, 1])); // true
console.log(annygram([1, 2, 3], [3, 2, 1, 0])); // false
