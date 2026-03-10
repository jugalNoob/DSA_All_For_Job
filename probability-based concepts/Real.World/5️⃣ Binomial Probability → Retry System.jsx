5️⃣ Binomial Probability → Retry System

Your code:

nCr(n,k) * p^k * (1-p)^(n-k)

Real system use

Retry logic.

Example:

API success probability = 0.8
Retries = 3


Probability at least one success

Node example:

const successProb = 0.8

const failAll = Math.pow(1-successProb,3)

const success = 1 - failAll

console.log(success)


Used in:

HTTP retry

message queues

Kafka consumers