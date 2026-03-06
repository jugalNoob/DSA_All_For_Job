🧠 What Is Sliding Expiration?

Normal TTL:

Set at 10:00
TTL = 5 sec
Expires at 10:05 (fixed)


Sliding TTL:

Set at 10:00
Access at 10:03 → expiry extended to 10:08
Access at 10:06 → expiry extended to 10:11


👉 Expiration resets every time you access it.

This is used in:

Session storage

Login tokens

User activity cache

Refresh tokens




🔥 Modify Your Class for Sliding Expiration

Only change needed:
👉 When getCache() is called and key is valid → reset expire time.



class LINK {

    constructor(ttl = 3000) {
        this.cache = new Map();
        this.ttl = ttl;
    }

    setCache(key, value) {
        const expire = Date.now() + this.ttl;

        this.cache.set(key, {
            value,
            expire
        });
    }

    getCache(key) {

        const data = this.cache.get(key);

        if (!data) {
            console.log("Key not found");
            return null;
        }

        if (Date.now() > data.expire) {
            console.log("Key expired");
            this.cache.delete(key);
            return null;
        }

        // 🔥 Sliding expiration logic
        data.expire = Date.now() + this.ttl;

        return data.value;
    }
}



const link = new LINK(2000); // 2 sec TTL

link.setCache('name_1', { name: 'jugal' });

console.log("1st access:", link.getCache('name_1'));

setTimeout(() => {
    console.log("2nd access after 1.5 sec:", link.getCache('name_1'));
}, 1500);

setTimeout(() => {
    console.log("3rd access after 3 sec:", link.getCache('name_1'));
}, 3000);

setTimeout(() => {
    console.log("4th access after 6 sec:", link.getCache('name_1'));
}, 6000);
