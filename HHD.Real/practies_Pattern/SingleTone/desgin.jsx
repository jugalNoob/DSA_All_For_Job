
          ┌───────────────┐
          │   Singleton   │
          │───────────────│
          │ - instance    │◄──────┐
          │───────────────│       │
          │ + getInstance()│───────┘ (only one instance ever)
          └───────────────┘
                 ▲
                 │ (everyone uses the same object)
        ┌────────┼────────┐
        │        │        │
   Client A   Client B   Client C


   
🚀 6. SINGLETON PATTERN

🚀 6. SINGLETON PATTERN
        [ App ]
          │
          ▼
   [ Singleton Instance ]
          │
   ┌──────┼────────┐
   ▼      ▼        ▼
[DB]   [Cache]  [Config]

