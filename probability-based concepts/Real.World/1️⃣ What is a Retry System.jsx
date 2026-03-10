1️⃣ What is a Retry System

A retry system means:

If request fails → try again


Example flow:

Client
   ↓
API call
   ↓
Service fails
   ↓
Retry 1
Retry 2
Retry 3


Used in:

API requests

message queues

database connections

microservices communication

2️⃣ Why Probability is Used

Every request has a success probability.

Example:

Single request success = 0.8
Failure = 0.2


If we retry multiple times, the overall success probability increases.

Formula:

P(success after retries) = 1 − (failure probability)^retries

3️⃣ Example Calculation

Single request:

Success = 0.8
Failure = 0.2


Retries = 3

P(all fail) = 0.2 × 0.2 × 0.2
            = 0.008

P(success) = 1 − 0.008
           = 0.992


Meaning:

99.2% chance request eventually succeeds

4️⃣ Node.js Retry Example
async function retryRequest(fn, retries){

  for(let i=0;i<retries;i++){

    try{
      const result = await fn()
      return result
    }
    catch(err){
      console.log("Retry attempt:", i+1)
    }

  }

  throw new Error("All retries failed")
}


Usage:

async function apiCall(){

 if(Math.random() < 0.7){
   throw new Error("API failed")
 }

 return "Success"
}

retryRequest(apiCall,3)
.then(console.log)
.catch(console.error)


Here probability simulates random success/failure.

5️⃣ Real System Design Example

Example architecture:

Client
  ↓
Node API
  ↓
External Payment API


Sometimes payment API fails due to:

network issues

timeout

temporary overload

Retry system:

Attempt 1 → fail
Attempt 2 → success

6️⃣ Retry with Exponential Backoff

Best practice.

Instead of retrying instantly:

1st retry → 1 sec
2nd retry → 2 sec
3rd retry → 4 sec


Node example:

async function retry(fn, retries){

 let delay = 1000

 for(let i=0;i<retries;i++){

   try{
     return await fn()
   }
   catch(e){
     await new Promise(r => setTimeout(r,delay))
     delay *= 2
   }

 }

 throw new Error("failed")
}


This prevents retry storms.

7️⃣ Where Retry Systems Are Used


| System               | Use                      |
| -------------------- | ------------------------ |
| API calls            | network failure recovery |
| Kafka consumers      | message retry            |
| Database connections | temporary DB failure     |
| Payment systems      | retry transactions       |
| Microservices        | service communication    |


Example tools:

Kafka consumers

HTTP clients

job queues

message brokers

8️⃣ Retry in Message Queues

Example consumer:

Message fails → retry
Retry limit reached → Dead Letter Queue


Architecture:

Producer
   ↓
Queue
   ↓
Consumer
   ↓
Retry Queue
   ↓
DLQ

9️⃣ Important Interview Concept

Interviewers often ask:

How do you prevent infinite retries?


Answer:

retry limit

exponential backoff

dead letter queue

circuit breaker

✅ Key probability idea

Multiple retries reduce failure probability


Example:
| Retries | Success probability |
| ------- | ------------------- |
| 1       | 80%                 |
| 2       | 96%                 |
| 3       | 99.2%               |
| 4       | 99.84%              |



