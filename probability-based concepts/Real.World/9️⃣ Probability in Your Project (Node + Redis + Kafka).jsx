Client
  ↓
Node API
  ↓
Redis Cache
  ↓
Kafka
  ↓
Consumer
  ↓
MongoDB


Probability used in:

| Component     | Probability Use        |
| ------------- | ---------------------- |
| Redis         | cache hit rate         |
| Kafka         | partition distribution |
| Load balancer | traffic distribution   |
| Retry logic   | failure probability    |
| Sharding      | key distribution       |



