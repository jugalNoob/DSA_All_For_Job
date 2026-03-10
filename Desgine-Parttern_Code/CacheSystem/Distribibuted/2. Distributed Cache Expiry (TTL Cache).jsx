2. Distributed Cache Expiry (TTL Cache)

Used by platforms like:

Netflix

YouTube

Meta

Architecture
User
 │
 ▼
CDN / Edge Cache
 │
 ▼
Redis / Memcached
 │
 ▼
Database

Cache With Timestamp
key: userProfile
value: data
expire: timestamp

Node.js Example
class Cache {
  constructor() {
    this.store = new Map()
  }

  set(key, value, ttl) {
    this.store.set(key, {
      value,
      expire: Date.now() + ttl
    })
  }

  get(key) {
    const data = this.store.get(key)

    if (!data) return null

    if (Date.now() > data.expire) {
      this.store.delete(key)
      return null
    }

    return data.value
  }
}
