🔄 6. Retry with Time Gap (Backoff logic)
async function retry(fn, delay = 1000) {
  try {
    return await fn();
  } catch (err) {
    console.log("Retry after delay");

    await new Promise(r => setTimeout(r, delay));

    return retry(fn, delay * 2);
  }
}

🧠 Use cases:
Kafka consumer retry
API failure handling