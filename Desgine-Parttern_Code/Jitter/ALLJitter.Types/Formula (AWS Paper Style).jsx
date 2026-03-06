🧠 Why Decorrelated Jitter?

Problem with normal exponential backoff:

500 → 1000 → 2000 → 4000 → 8000


Even with full jitter, delays are still tied to strict exponential growth.

Decorrelated jitter:

Avoids synchronized spikes

Avoids too-fast growth

Avoids too-small retries

Produces smoother retry distribution

This is used in:

AWS SDK

Cloud load balancers

Large-scale distributed systems

🔥 Formula (AWS Paper Style)
sleep = min(maxDelay, random(baseDelay, previousDelay * 3))


Key idea:

Instead of exponential formula,
we base next delay on previous delay, not attempt number.

✅ Step-by-Step Code (Separated & Clean)
1️⃣ Delay Calculator (Decorrelated Jitter)
function calculateDecorrelatedJitter(
  baseDelay,
  previousDelay,
  maxDelay
) {
  const min = baseDelay;
  const max = previousDelay * 3;

  const randomDelay =
    Math.random() * (max - min) + min;

  return Math.min(randomDelay, maxDelay);
}

2️⃣ Retry Wrapper Using Decorrelated Jitter
function retryWithDecorrelatedJitter(
  fn,
  retries = 5,
  baseDelay = 500,
  maxDelay = 10000
) {
  return async function (...args) {
    let delay = baseDelay;

    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        console.log(`Attempt ${attempt + 1}`);
        return await fn(...args);
      } catch (error) {
        if (attempt === retries - 1) {
          throw error;
        }

        delay = calculateDecorrelatedJitter(
          baseDelay,
          delay,
          maxDelay
        );

        console.log(`Retrying in ${Math.round(delay)} ms`);

        await new Promise((res) =>
          setTimeout(res, delay)
        );
      }
    }
  };
}

🔎 How Delay Evolves (Example)

Let’s say:

baseDelay = 500
maxDelay = 10000


Possible delay pattern:

500
1200
2600
3400
8700
10000 (capped)


Notice:

Not strict doubling

Not random 0–N

Not synchronized

More natural growth

📊 Comparison of Strategies


| Strategy            | Traffic Spread | Growth Control | Production Grade |
| ------------------- | -------------- | -------------- | ---------------- |
| Fixed Delay         | ❌ Bad          | ❌ No           | ❌                |
| Exponential         | ⚠️ Medium      | ❌ Can spike    | ⚠️               |
| Full Jitter         | ✅ Good         | ⚠️             | ✅                |
| Decorrelated Jitter | ✅✅ Best        | ✅ Controlled   | ✅✅ AWS Standard  |




🧠 Interview-Level Explanation

If interviewer asks:

What is decorrelated jitter?

You say:

Decorrelated jitter is an advanced retry backoff algorithm where each retry delay is randomized based on the previous delay instead of strict exponential growth. It prevents retry storms, avoids synchronized traffic spikes, and provides smoother scaling under failure conditions. It’s used in AWS SDK and large distributed systems.

🏆 Where This Is Actually Used

Cloud SDK retries

Payment service retries

Kafka consumer reconnect

Microservice API calls

Distributed DB reconnect logic

If you want next level, I can show:

🔥 Retry + Circuit Breaker combined

🔥 Retry + Rate Limiter combined

🔥 Real production Axios interceptor using decorrelated jitter

🔥 Simulation of 1000 clients retry graph logic