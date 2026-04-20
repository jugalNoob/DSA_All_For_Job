Absolutely! We can combine Singleton (Redis connection) + Strategy (rate limit algorithms) + Dependency Injection (DI) so everything is clean, decoupled, and testable. Let me rewrite your example with all three patterns.

1️⃣ Singleton: Redis Connection
class Redisdb {
  static instance = null;

  constructor(connect) {
    if (Redisdb.instance) return Redisdb.instance;
    this.connect = connect;
    Redisdb.instance = this;
  }

  dbConnect() {
    console.log('Connected to Redis:', this.connect);
  }
}


✅ Only one Redis connection exists.

2️⃣ Strategy Pattern: Rate Limit Algorithms
class RedisBucketRate {
  sort(data) {
    return data.sort((a, b) => a - b); // ascending
  }
}

class RedisLeakRate {
  sort(data) {
    return data.sort((a, b) => b - a); // descending
  }
}

3️⃣ Dependency Injection: Rate Limit Service
class RateLimitService {
  constructor(strategy, redis) {
    this.strategy = strategy; // DI: inject sorting strategy
    this.redis = redis;       // DI: inject Redis singleton
    this.redis.dbConnect();   // ensure connection
  }

  rateLimit(data) {
    return this.strategy.sort(data);
  }
}

DI here is the constructor(strategy, redis) → we inject dependencies instead of creating them inside the class.
This makes it flexible for testing or switching strategies dynamically.
4️⃣ Using All Together
// Singleton Redis instance
const redis = new Redisdb("Redis Connection 1");

// Inject strategies via DI
const bucketStrategy = new RedisBucketRate();
const leakStrategy = new RedisLeakRate();

// Rate limit services using DI
const limiterBucket = new RateLimitService(bucketStrategy, redis);
console.log("Bucket Strategy:", limiterBucket.rateLimit([9, 2, 1])); 
// Bucket Strategy: [1, 2, 9]

const limiterLeak = new RateLimitService(leakStrategy, redis);
console.log("Leak Strategy:", limiterLeak.rateLimit([9, 2, 1])); 
// Leak Strategy: [9, 2, 1]

// Confirm Redis singleton
const redis2 = new Redisdb("Another Connection");
console.log(redis === redis2); // true ✅ same instance

✅ What This Achieves
Singleton: Only one Redis connection is created.
Strategy: You can swap different rate-limit algorithms at runtime.
Dependency Injection: Dependencies (strategy and redis) are injected from outside → highly decoupled and testable.