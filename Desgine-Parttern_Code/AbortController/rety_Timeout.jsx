async function fetchWithRetry(url, retries = 3, timeoutMs = 100) {
  for (let i = 0; i < retries; i++) {
    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, timeoutMs);

    try {
      const res = await fetch(url, {
        signal: controller.signal
      });

      clearTimeout(timeout);
      return await res.json();
    } catch (err) {
      clearTimeout(timeout);

      if (i === retries - 1) throw err;
    }
  }
}



const breaker = new CircuitBreaker(3, 5000);

async function getData(url) {
  try {
    return await breaker.call(() =>
      fetchWithRetry(url, 3, 100)
    );
  } catch {
    return "Fallback Data"; // Redis / DB / cache
  }
}
