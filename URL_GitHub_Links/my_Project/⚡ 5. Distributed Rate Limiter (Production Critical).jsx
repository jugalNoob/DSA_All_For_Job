⚡ 5. Distributed Rate Limiter (Production Critical)
🚀 What to build:
Limit API requests per user
🧠 System Design:
Redis → counters
Algorithms:
Token bucket
Sliding window
⚡ Features:
Per-user limit
Global limit
Burst handling
🔥 Why important:

👉 Every big system uses this (API Gateway, etc.)