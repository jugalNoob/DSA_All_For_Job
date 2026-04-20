Redis + DB fallback

Example: Redis + DB fallback
async function getData(key) {
  try {
    return await Promise.race([
      redis.get(key),
      timeout(100) // 100ms max
    ]);
  } catch {
    return db.get(key); // fallback
  }
}


async function getData(key) {
  const controller = new AbortController();

  try {
    const result = await Promise.race([
      redis.get(key),
      new Promise((_, reject) =>
        setTimeout(() => {
          controller.abort();
          reject(new Error("Timeout"));
        }, 100)
      )
    ]);

    return result;
  } catch {
    return db.get(key);
  }
}
