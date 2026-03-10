// ----------------- Jitter function (unchanged) -----------------
function getJitterDelay(base, attempt, max) {
  const exp = Math.min(base * Math.pow(2, attempt), max); // better: multiply, not add
  return Math.floor(Math.random() * exp);                 // full jitter (0 to exp)
}

// ----------------- Improved Retry wrapper -----------------
function retryWrapper(
  fn, 
  {
    baseDelay = 500,      // ms
    maxRetries = 5,
    maxDelay = 10000,
    shouldRetry = (err, attempt) => true,   // ← NEW: decide per error
    signal = null                           // ← NEW: AbortSignal
  } = {}
) {
  return async function (...args) {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {  // 0 = first try
      try {
        console.log(`Attempt ${attempt + 1}`);
        
        // If signal exists → pass it to fn (important for fetch/axios)
        const result = await fn(...args, { signal });
        return result;
      } catch (err) {
        console.error(`Error: ${err.message || err}`);

        // Last attempt → give up
        if (attempt === maxRetries) {
          throw err;
        }

        // NEW: Check if we should even retry this error
        if (!shouldRetry(err, attempt)) {
          throw err; // don't retry, fail fast
        }

        // NEW: Check if aborted already (before waiting)
        if (signal?.aborted) {
          throw new DOMException('The operation was aborted', 'AbortError');
        }

        const delay = getJitterDelay(baseDelay, attempt, maxDelay);
        console.log(`Retrying after ${delay}ms...`);

        // Wait with abort support
        await new Promise((resolve, reject) => {
          const timer = setTimeout(resolve, delay);

          // If signal exists → abort waiting too
          if (signal) {
            const onAbort = () => {
              clearTimeout(timer);
              reject(new DOMException('The operation was aborted', 'AbortError'));
            };
            signal.addEventListener('abort', onAbort, { once: true });

            // Cleanup listener when done
            const done = () => signal.removeEventListener('abort', onAbort);
            Promise.resolve().then(done); // microtask cleanup
          }
        });
      }
    }
  };
}

// ----------------- Example shouldRetry (common pattern) -----------------
function isRetryableError(err) {
  if (err.name === 'AbortError') return false;               // never retry abort
  if (err.code === 'ECONNRESET' || err.code === 'ETIMEDOUT') return true;
  
  // For fetch/axios HTTP errors
  if (err.response) {
    const status = err.response?.status;
    return [429, 500, 502, 503, 504].includes(status);       // retry on these
  }
  
  return true; // default: retry network/unknown errors
}

// ----------------- Test function (now accepts options) -----------------
async function testTask(options = {}) {
  if (Math.random() < 0.7) throw new Error("Random failure!");
  return "Success!";
}

// ----------------- Usage examples -----------------

// 1. Basic (same as before)
const wrapped = retryWrapper(testTask, { baseDelay: 500, maxRetries: 4, maxDelay: 8000 });
wrapped().then(console.log).catch(err => console.log("Failed:", err.message));

// 2. With custom shouldRetry
const wrappedSmart = retryWrapper(testTask, {
  baseDelay: 1000,
  shouldRetry: isRetryableError
});

// 3. With AbortController (most powerful)
const controller = new AbortController();
const wrappedWithAbort = retryWrapper(testTask, {
  baseDelay: 800,
  maxRetries: 6,
  signal: controller.signal
});

// Somewhere else: cancel everything
// setTimeout(() => controller.abort(), 2500); // aborts during wait or next fetch
wrappedWithAbort().then(console.log).catch(err => {
  if (err.name === 'AbortError') {
    console.log("User cancelled / aborted");
  } else {
    console.log("Final error:", err.message);
  }
});