Decoupled Architecture Diagram (Text Version)
          ┌─────────────┐
          │   Factory   │
          │  (creates)  │
          └─────┬───────┘
                │
        creates Redis Singleton
                │
        ┌───────▼────────┐
        │    Redisdb      │  <-- Singleton (only one instance)
        └───────┬────────┘
                │
   Injected via Dependency Injection
                │
        ┌───────▼────────┐
        │  UserService   │  <-- Decoupled, only knows "db" interface
        └───────┬────────┘
                │
        Calls dbConnect() without knowing inner Redis details
                │
 ┌──────────────▼─────────────┐
 │  Strategy (Rate Limit)     │
 │  - RedisBucketRate          │
 │  - RedisLeakRate            │
 └────────────────────────────┘
                │
     Injected into RateLimitService
                │
        ┌───────▼────────┐
        │ RateLimitService│ <-- Uses Strategy + Redis
        └────────────────┘

How This Works Together
Factory
Creates the Redis instance once (Singleton).
Client code doesn’t need to know the class details.
Singleton (Redisdb)
Ensures there’s only one Redis connection.
Multiple services can use the same instance safely.
Dependency Injection (DI)
Services like UserService or RateLimitService don’t create Redis or strategies themselves.
They are injected from outside.
This makes the system decoupled and easy to test.
Strategy Pattern
RateLimitService can dynamically use any algorithm: RedisBucketRate or RedisLeakRate.
Switching strategies doesn’t require changing RateLimitService.
Benefits of This Design
✅ Fully decoupled: Services don’t depend on concrete classes.
✅ Testable: You can inject mocks for testing.
✅ Flexible: Add new strategies or DB types without touching existing code.
✅ Reusable: Singleton ensures one shared resource, Factory abstracts creation.