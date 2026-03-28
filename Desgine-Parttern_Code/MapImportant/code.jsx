let cache=new Map()
let key=12345
let obj={name:'jugal',  email:'jugal@gmail.com'}

cache.set(key , {obj} )

console.log(cache.has(key))

let main=cache.get(key)

console.log(main.obj.name)
console.log(main.obj.email)

console.log(cache.keys().next().value)

console.log()