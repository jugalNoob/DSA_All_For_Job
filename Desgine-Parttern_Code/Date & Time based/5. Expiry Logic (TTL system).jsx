⏳ 5. Expiry Logic (TTL system)
const cache = new Map();

function set(key, value, ttl) {
  const expiry = Date.now() + ttl;

  cache.set(key, { value, expiry });
}

function get(key) {
  const data = cache.get(key);

  if (!data) return null;

  if (Date.now() > data.expiry) {
    cache.delete(key);
    return null;
  }

  return data.value;
}

🧠 Use cases:
Redis-like caching
session management
token expiry