let cache = new Map();
let key = 'name';  // Use the same key you stored
let name='jugal sharma'
cache.set(key, 'xxx jonny'); // single

cache.set(key, { email: name }); // duble

if (cache.has(key)) {
    console.log(cache.get(key)); // Output: "xxx jonny"
}

