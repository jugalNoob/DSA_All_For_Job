4️⃣ Hash Collision Probability → Hash Tables / Redis

Your code:

let noCollision = 1;

for (let i = 0; i < keys; i++) {
  noCollision *= (hashSize - i) / hashSize;
}

Real system use

When designing:

Redis cache

consistent hashing

sharding

Example:

10 Redis shards
100 keys


Probability keys collide.

Node example:

function collisionProbability(slots, keys){

 let noCollision = 1

 for(let i=0;i<keys;i++){
   noCollision *= (slots-i)/slots
 }

 return 1-noCollision
}

console.log(collisionProbability(1000,50))


Used in:

Redis

Cassandra

DynamoDB

Kafka partitioning