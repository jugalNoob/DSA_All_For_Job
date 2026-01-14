const {BloomFilter}=require('./bloom')

const bloom=new BloomFilter(1000,3);

bloom.add("jugal")
bloom.add("karan")
bloom.add("youtube")
bloom.add("youtubes")

console.log(bloom.alreadyExist("jugal"))
console.log(bloom.alreadyExist("karan"))
console.log(bloom.alreadyExist("youtube"))
console.log(bloom.alreadyExist("youtube"))
console.log(bloom.alreadyExist("youtubes"))




:::::::::: Function code ::::::::::::::


const {
    createBloomFilter,
    addToBloom,
    alreadyExistsInBloom,
  } = require('./bloom'); // <- assuming file is saved as bloom.js
  
  const bloom = createBloomFilter(1000, 3);
  
  console.log(bloom)

  addToBloom(bloom, "jugal");
  addToBloom(bloom, "karan");
  addToBloom(bloom, "youtube");
  addToBloom(bloom, "youtubes");
  
  console.log(alreadyExistsInBloom(bloom, "jugal"));     // true
  console.log(alreadyExistsInBloom(bloom, "karan"));     // true
  console.log(alreadyExistsInBloom(bloom, "youtube"));   // true
  console.log(alreadyExistsInBloom(bloom, "youtubes"));  // true
  console.log(alreadyExistsInBloom(bloom, "random"));    // possibly false
  