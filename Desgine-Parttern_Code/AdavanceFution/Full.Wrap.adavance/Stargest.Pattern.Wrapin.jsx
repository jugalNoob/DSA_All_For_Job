Class-based Retry with Strategy Pattern
// ----------------- 1️⃣ Backoff Strategies -----------------
class FixedBackoff {
  constructor(delay = 1000) {
    this.delay = delay;
  }

  getDelay(attempt) {
    return this.delay;
  }
}

class ExponentialBackoff {
  constructor(base = 500, maxDelay = 10000) {
    this.base = base;
    this.maxDelay = maxDelay;
  }

  getDelay(attempt) {
    return Math.min(this.base * Math.pow(2, attempt), this.maxDelay);
  }
}

class JitteredBackoff {
  constructor(base = 500, maxDelay = 10000) {
    this.base = base;
    this.maxDelay = maxDelay;
  }

  getDelay(attempt) {
    const max = Math.min(this.base + Math.pow(2, attempt), this.maxDelay);
    return Math.floor(Math.random() * max);
  }
}

// ----------------- 2️⃣ Retry Class -----------------
class Retry {
  constructor(backoffStrategy, maxRetries = 5) {
    this.backoffStrategy = backoffStrategy; // Strategy injected
    this.maxRetries = maxRetries;
  }

  async execute(fn, ...args) {
    for (let i = 0; i < this.maxRetries; i++) {
      try {
        const result = await fn(...args);
        return result;
      } catch (error) {
        console.error(`Attempt ${i + 1} failed:`, error.message);

        if (i === this.maxRetries - 1) {
          throw error; // rethrow after max retries
        }

        const delay = this.backoffStrategy.getDelay(i);
        console.log(`Retrying after ${delay}ms...`);
        await new Promise(res => setTimeout(res, delay));
      }
    }
  }

  // Optionally swap strategy at runtime
  setStrategy(backoffStrategy) {
    this.backoffStrategy = backoffStrategy;
  }
}

// ----------------- 3️⃣ Example Test Function -----------------
async function unstableTask() {
  if (Math.random() < 0.7) throw new Error("Random failure!");
  return "Success!";
}

// ----------------- 4️⃣ Usage -----------------

// Choose a backoff strategy
const jitterStrategy = new JitteredBackoff(500, 5000);
const retrySystem = new Retry(jitterStrategy, 5);

// Execute with retry
retrySystem.execute(unstableTask)
  .then(res => console.log("Result:", res))
  .catch(err => console.log("Final error:", err.message));

// Swap strategy dynamically if needed
const fixedStrategy = new FixedBackoff(1000);
retrySystem.setStrategy(fixedStrategy);

✅ Advantages of This Design

Strategy Pattern

Swap backoff strategies (Fixed, Exponential, Jittered) without changing the Retry class.

Class-based Professional Structure

Encapsulates logic cleanly, reusable, testable, and scalable.

Supports async/await

Works for any async function, including API calls or database operations.

Dynamic Strategy Swapping

You can change the retry strategy at runtime with setStrategy().