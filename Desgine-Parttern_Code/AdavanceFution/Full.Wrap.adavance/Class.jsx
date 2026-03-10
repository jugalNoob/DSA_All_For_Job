class RetryWithJitter {
  constructor(base = 1000, maxRetries = 5, maxDelay = 10000) {
    this.base = base;         // base delay in ms
    this.maxRetries = maxRetries;
    this.maxDelay = maxDelay;
  }

  // Compute jitter delay
  computeJitter(i) {
    const jit = Math.min(this.base + Math.pow(2, i), this.maxDelay);
    return Math.floor(Math.random() * jit);
  }

  // Wrap function with retry
  wrap(fn) {
    const self = this;

    return async function (...args) {
      for (let i = 0; i < self.maxRetries; i++) {
        try {
          // Await if fn is async
          const result = await fn(...args);
          return result;
        } catch (error) {
          console.error(`Attempt ${i + 1} failed:`, error.message);

          if (i === self.maxRetries - 1) {
            throw error; // rethrow after max retries
          }

          const delay = self.computeJitter(i);
          console.log(`Retrying after ${delay}ms...`);
          await new Promise(res => setTimeout(res, delay));
        }
      }
    };
  }
}

// ----------------- Test Function -----------------
async function mainTest() {
  throw new Error('Test error!');
}

// ----------------- Usage -----------------
const retry = new RetryWithJitter(500, 5, 5000);
const wrappedTest = retry.wrap(mainTest);

wrappedTest().catch(err => console.log('Final error:', err.message));
