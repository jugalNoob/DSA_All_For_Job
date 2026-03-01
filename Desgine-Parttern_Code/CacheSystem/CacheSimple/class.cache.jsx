class SimpleCache {
    constructor() {
        this.cache = new Map();
    }

    // Set a value in cache
    set(key, value) {
        this.cache.set(key, value);
    }

    // Get a value from cache
    get(key) {
        if (this.cache.has(key)) {
            console.log('Cache hit');
            return this.cache.get(key);
        } else {
            console.log('Cache miss');
            return null;
        }
    }

    // Delete a key
    delete(key) {
        this.cache.delete(key);
    }

    // Clear all cache
    clear() {
        this.cache.clear();
    }
}

// Usage
const cache = new SimpleCache();

cache.set('user_1', { name: 'Jugal', age: 25 });
console.log(cache.get('user_1')); // Cache hit → { name: 'Jugal', age: 25 }
console.log(cache.get('user_2')); // Cache miss → null


Map is used because it preserves insertion order and allows any type of key.

Basic get / set / delete / clear operations.

Prints “Cache hit” or “Cache miss” for demonstration.