Absolutely! We can make a TTL Cache in plain JavaScript without using a class, just using functions and a Map. Here’s a simple version:

🔹 Simple TTL Cache (No Class)
const cache = new Map();
const TTL = 3000; // 3 seconds TTL

function set(key, value) {
    const expiresAt = Date.now() + TTL;
    cache.set(key, { value, expiresAt });
}

function get(key) {
    const item = cache.get(key);
    if (!item) return null;

    // Check expiration
    if (Date.now() > item.expiresAt) {
        cache.delete(key);
        return null;
    }

    return item.value;
}

// Optional: cleanup expired keys
function cleanup() {
    const now = Date.now();
    for (let [key, item] of cache) {
        if (now > item.expiresAt) {
            cache.delete(key);
        }
    }
}

// ✅ Example usage
set('a', 100);
set('b', 200);

console.log(get('a')); // 100

setTimeout(() => {
    console.log(get('a')); // null (expired)
}, 4000);

🔹 How it works

set(key, value) → stores {value, expiresAt} in a Map.

get(key) → checks expiration; returns value or null.

cleanup() → removes expired items proactively (optional).

🔹 Use Cases

Temporary caching of API responses

Session tokens or authentication keys

Short-lived calculations in web apps