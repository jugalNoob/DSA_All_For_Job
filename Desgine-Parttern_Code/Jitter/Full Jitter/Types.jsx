| Type         | Formula                   | Behavior              | Use Case          |
| ------------ | ------------------------- | --------------------- | ----------------- |
| No Jitter    | fixed delay               | All retry together ❌  | Not recommended   |
| Full Jitter  | random(0, expDelay)       | Best traffic spread ✅ | Cloud systems     |
| Equal Jitter | exp/2 + random(exp/2)     | Controlled spread     | High traffic APIs |
| Decorrelated | random(base, prevDelay*3) | Advanced dynamic      | AWS SDK style     |



🎯 Real-World Example

Used in:

AWS SDK retries

Google Cloud clients

Payment systems

Kafka reconnection logic

Distributed microservices#



🧠 Simple Explanation You Can Say in Interview

Jitter is random delay added to retry logic to prevent
 thundering herd problems and retry storms in distributed systems.



