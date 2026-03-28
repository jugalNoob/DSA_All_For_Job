                ┌───────────────┐
                │   Client App  │
                │ (Web / Mobile)│
                └───────┬───────┘
                        │ HTTP
                        ↓
                ┌───────────────┐
                │ API Gateway   │
                │ (Auth, Rate)  │
                └───────┬───────┘
                        ↓
                ┌───────────────┐
                │ Node.js App   │
                │ (Controller)  │
                └───────┬───────┘
                        ↓
        ┌────────────────────────────────┐
        │       Business Layer           │
        │                                │
        │  Factory → choose payment      │
        │  Strategy → execute payment    │
        │  Adapter → call external API   │
        └───────┬───────────────┬───────┘
                ↓               ↓
        ┌───────────────┐   ┌───────────────┐
        │   Redis Cache │   │   Kafka       │
        │ (fast lookup) │   │ (async queue) │
        └───────┬───────┘   └───────┬───────┘
                ↓                   ↓
        ┌───────────────┐   ┌───────────────┐
        │   Database    │   │  Consumers    │
        │ (Mongo / SQL) │   │ (Email, logs) │
        └───────────────┘   └───────────────┘
