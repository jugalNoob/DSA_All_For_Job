✅ Find Longest Common Prefix (used in autocomplete/search)
function longestCommonPrefix(arr) {
  if (!arr.length) return '';
  let prefix = arr[0];
  for (let str of arr) {
    while (str.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return '';
    }
  }
  return prefix;
}
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"