let cache=new Map()

let key='123456'
let obj={name:'jugal'  , email:'email@gmailcom'}
console.log(cache.set(key , {obj}))

console.log(cache.has(key))
let result = cache.get(key)


console.log(result.obj.name)

console.log(cache.keys().next().value)

console.log([...cache.entries()])




let cache = new Map([
  ['a', 1],
  ['b', 2]
]);

console.log(cache.keys().next().value); // 'a'
console.log([...cache.entries()]); // [['a',1], ['b',2]]
