🧠 2️⃣ Intermediate String Problems
✅ Check for Anagram
function isAnagram(str1, str2) {
  const normalize = s => s.toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
}
console.log(isAnagram('listen', 'silent')); // true
