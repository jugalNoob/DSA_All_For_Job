5. Group Anagrams

👉 String + HashMap combo

let strs = ["eat","tea","tan","ate","nat","bat"]

let map = {}

for(let word of strs){
    let key = word.split('').sort().join('')

    if(!map[key]) map[key] = []
    map[key].push(word)
}

console.log(Object.values(map))