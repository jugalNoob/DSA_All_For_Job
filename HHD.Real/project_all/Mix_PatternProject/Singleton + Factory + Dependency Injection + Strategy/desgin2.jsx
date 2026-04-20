             ┌─────────────┐
             │   Factory   │
             │ (creates DB)│
             └─────┬───────┘
                   │
        creates Redis Singleton
                   │
           ┌───────▼────────┐
           │   Redisbase     │  <-- Singleton (one instance)
           └───────┬────────┘
                   │
        Injected via Dependency Injection
                   │
           ┌───────▼────────┐
           │  DIpattern /    │
           │  UserService    │  <-- Decoupled service, only knows DB interface
           └───────┬────────┘
                   │
    Uses DBconnect() without knowing Redis internals
                   │
           ┌───────▼────────┐
           │  Strategy Layer │
           │  - BucketRate   │
           │  - LeakRate     │
           └───────┬────────┘
                   │
         Injected into RateLimitService
                   │
           ┌───────▼────────┐
           │ RateLimitService│ <-- Combines Redis + chosen Strategy
           └────────────────┘
