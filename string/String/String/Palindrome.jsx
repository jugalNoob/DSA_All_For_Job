

// ✅ Check if String is Palindrome
// function isPalindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }
// console.log(isPalindrome('madam')); // true


Palindromic 



⚙️ 3️⃣ Advanced String Problems (DSA Level)
✅ Longest Palindromic Substring
function longestPalindrome(s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let odd = expand(s, i, i);
    let even = expand(s, i, i + 1);
    res = odd.length > res.length ? odd : res;
    res = even.length > res.length ? even : res;
  }
  return res;
}

function expand(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--; r++;
  }
  return s.slice(l + 1, r);
}

console.log(longestPalindrome('babad')); // "bab" or "aba"