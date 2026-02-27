let str = 'jugal sharma'
let vowel = 'aeiou'

let count = 0

for (let i = 0; i < str.length; i++) {
  if (vowel.includes(str[i].toLowerCase())) {
    count++
  }
}

console.log(count)


let str = 'jugal sharma'
let vowels = new Set(['a','e','i','o','u'])

let count = 0

for (let ch of str.toLowerCase()) {
  if (vowels.has(ch)) count++
}

console.log(count)
