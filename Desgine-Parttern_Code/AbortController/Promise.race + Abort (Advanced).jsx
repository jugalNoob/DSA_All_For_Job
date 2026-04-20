🔹 6. Combine with Promise.race + Abort (Advanced)
async function fetchWithRace(url, ms) {
  const controller = new AbortController();

  const fetchPromise = fetch(url, {
    signal: controller.signal
  });

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => {
      controller.abort();
      reject(new Error("Timeout"));
    }, ms)
  );

  return Promise.race([fetchPromise, timeoutPromise]);
}
