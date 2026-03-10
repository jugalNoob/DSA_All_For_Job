Perfect! Let’s make a fully professional class-based module for Node.js that combines:

Retry with jitter/backoff

Circuit breaker using Opossum

Configurable strategies (fixed, exponential, jitter)

This will be production-ready, reusable, and interview-friendly.

Class-based Retry + Jitter + Circuit Breaker Module
const CircuitBreaker = require("opossum");

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

// ----------------- 2️⃣ Retry + Circuit Breaker Class -----------------
class ResilientExecutor {
  constructor(backoffStrategy, maxRetries = 5, breakerOptions = {}) {
    this.backoffStrategy = backoffStrategy;
    this.maxRetries = maxRetries;

    // Default circuit breaker options
    const defaultOptions = {
      timeout: 5000,              // max time a function can take
      errorThresholdPercentage: 50, // % of failures before opening breaker
      resetTimeout: 5000          // time before trying again
    };

    this.breakerOptions = { ...defaultOptions, ...breakerOptions };
  }

  // Retry wrapper with backoff strategy
  async retryWrapper(fn, ...args) {
    for (let i = 0; i < this.maxRetries; i++) {
      try {
        return await fn(...args);
      } catch (err) {
        console.error(`Attempt ${i + 1} failed: ${err.message || err}`);
        if (i === this.maxRetries - 1) throw err;

        const delay = this.backoffStrategy.getDelay(i);
        console.log(`Retrying after ${delay}ms...`);
        await new Promise(res => setTimeout(res, delay));
      }
    }
  }

  // Wrap function with Circuit Breaker + Retry
  execute(fn, ...args) {
    const wrappedFn = () => this.retryWrapper(fn, ...args);
    const breaker = new CircuitBreaker(wrappedFn, this.breakerOptions);

    // Optional: listen to breaker events
    breaker.on("open", () => console.log("Breaker opened 🚨"));
    breaker.on("halfOpen", () => console.log("Breaker half-open 🔓"));
    breaker.on("close", () => console.log("Breaker closed ✅"));
    breaker.on("fallback", () => console.log("Fallback triggered"));

    return breaker.fire();
  }

  // Dynamically change strategy at runtime
  setStrategy(backoffStrategy) {
    this.backoffStrategy = backoffStrategy;
  }
}

// ----------------- 3️⃣ Example Test Function -----------------
async function unstableTask() {
  if (Math.random() < 0.7) throw new Error("Random failure!");
  return "Task succeeded!";
}

// ----------------- 4️⃣ Usage -----------------

// 1. Choose a strategy
const jitterStrategy = new JitteredBackoff(500, 5000);

// 2. Create executor
const executor = new ResilientExecutor(jitterStrategy, 5);

// 3. Execute function with retry + circuit breaker
executor.execute(unstableTask)
  .then(result => console.log("Result:", result))
  .catch(err => console.log("Final error:", err.message));

// 4. Swap strategy dynamically if needed
executor.setStrategy(new FixedBackoff(1000));
executor.execute(unstableTask);

✅ Advantages of This Design

Professional class-based structure – encapsulates all retry/backoff + circuit breaker logic.

Strategy Pattern – swap backoff strategies dynamically (Fixed, Exponential, Jitter).

Circuit breaker – prevents cascading failures in microservices or API calls.

Async-safe – works with any async function.

Highly reusable – import this class in any Node.js service.