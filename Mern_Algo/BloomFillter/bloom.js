const crypto = require('crypto');


class BloomFilter{

    constructor(size ,hashCount){
        this.bitArray=new Array(size).fill(0)
        this.size=size;
        this.hashCount=hashCount;
    }

    hash(value , seed){

        const hash=crypto.createHash("md5")
        hash.update(value+seed.toString());
        return parseInt(hash.digest('hex' ,16))%this.size;
    }

    add(value){

        for(let i=0; i<this.hashCount; i++){

            const index=this.hash(value,i);

            this.bitArray[index] = 1;
    }

}

alreadyExist(value){
    for(let i=0; i<this.hashCount; i++){

        const index=this.hash(value,i);

      if(this.bitArray[index] ===0){
        return false;
      }
}

return true;
}
}



module.exports={BloomFilter}



:::::::::: Function code  use :::::::::::::::::::::::::



const crypto = require('crypto');

// Create a Bloom Filter
function createBloomFilter(size, hashCount) {
  return {
    bitArray: new Array(size).fill(0),
    size,
    hashCount,
  };
}

// Hash function with MD5 and seed
function hash(value, seed, size) {
  const hash = crypto.createHash('md5');
  hash.update(value + seed.toString());
  return parseInt(hash.digest('hex'), 16) % size;
}

// Add a value to the Bloom Filter
function addToBloom(filter, value) {
  for (let i = 0; i < filter.hashCount; i++) {
    const index = hash(value, i, filter.size);
    filter.bitArray[index] = 1;
  }
}

// Check if a value might exist
function alreadyExistsInBloom(filter, value) {
  for (let i = 0; i < filter.hashCount; i++) {
    const index = hash(value, i, filter.size);
    if (filter.bitArray[index] === 0) {
      return false;
    }
  }
  return true;
}

// Export functions (optional if using in other files)
module.exports = {
  createBloomFilter,
  addToBloom,
  alreadyExistsInBloom,
};
