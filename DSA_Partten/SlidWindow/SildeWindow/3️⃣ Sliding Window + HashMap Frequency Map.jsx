3️⃣ Sliding Window + HashMap / Frequency Map

A variant of dynamic window where we track elements/frequencies

Very common for string problems

Example Problems:

Longest substring with k unique characters

Permutation in string (Anagram problem)

Count of subarrays with unique elements

Code Template:

let freq = {};
let left = 0;

for (let right = 0; right < s.length; right++) {
  freq[s[right]] = (freq[s[right]] || 0) + 1;

  while (window invalid) {
    freq[s[left]]--;
    if (freq[s[left]] === 0) delete freq[s[left]];
    left++;
  }

  update answer
}
