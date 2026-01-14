class SimpleCache {
    constructor(ttl = 5000) { // Default TTL (Time-To-Live) is 5 seconds
      this.cache = new Map();
      this.ttl = ttl;
    }
  
    set(key, value) {
      const expires = Date.now() + this.ttl;
      this.cache.set(key, { value, expires });
    }
  
    get(key) {
      const data = this.cache.get(key);
      if (!data) return null;
      
      if (Date.now() > data.expires) {
        this.cache.delete(key);
        return null;
      }
      return data.value;
    }
  
    delete(key) {
      this.cache.delete(key);
    }
  
    clear() {
      this.cache.clear();
    }
  }
  
  // Example Usage
  const cache = new SimpleCache(10000); // 10 seconds TTL
  cache.set("user", { id: 1, name: "Jugal" });
  console.log(cache.get("user")); // Output: { id: 1, name: "Jugal" }
  setTimeout(() => console.log(cache.get("user")), 11000); // Output: null