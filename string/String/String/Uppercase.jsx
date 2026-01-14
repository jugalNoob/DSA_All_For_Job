✅ Convert First Letter of Each Word to Uppercase (Title Case)
function toTitleCase(str) {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(toTitleCase('hello world from jugal')); // "Hello World From Jugal"