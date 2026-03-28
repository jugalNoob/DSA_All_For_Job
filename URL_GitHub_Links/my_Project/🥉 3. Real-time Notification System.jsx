🥉 3. Real-time Notification System
🚀 What to build:
Send notifications (email, push, in-app)
🧠 System Design:
Apache Kafka → message queue
Worker services (consumers)
WebSocket / SSE for real-time
⚡ Features:
Fan-out (1 → many users)
Retry + DLQ
Notification preferences
🔥 Use case:

👉 Used in Instagram, LinkedIn, etc.