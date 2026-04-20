Two Pointer 
🧠 2. Two Pointer (Palindrome / Reverse)

👉 Use when:

checking symmetry
reverse string
compare left-right
Keywords:
palindrome
reverse
valid string
Template:
let left = 0;
let right = s.length - 1;

while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
}
return true;

🔥 Problems:
Valid palindrome
Reverse string
Longest palindrome (basic)
