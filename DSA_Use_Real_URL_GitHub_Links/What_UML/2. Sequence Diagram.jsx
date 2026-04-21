🥈 2. Sequence Diagram

👉 Shows how system flows step-by-step

Example (POST /orders)
User → API → Redis → DB → Kafka → Response


Detailed:

User → API: createOrder()
API → Redis: checkIdempotency()
API → DB: saveOrder()
API → Kafka: publishEvent()
API → User: response


👉 Used in API flow explanation