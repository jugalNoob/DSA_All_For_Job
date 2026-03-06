function cacheTTL(baseTTL, minJitter = 0.1, maxJitter = 0.2, log = false) {
  const jitterPercent = minJitter + Math.random() * (maxJitter - minJitter);
  const jitterAmount = baseTTL * jitterPercent;
  const finalTTL = Math.floor(baseTTL - jitterAmount + Math.random() * jitterAmount * 2);
  
  if (log) console.log(`cacheTTL -> base: ${baseTTL}s, final: ${finalTTL}s, jitter: ${Math.round(jitterPercent*100)}%`);
  
  return finalTTL;
}


class LINK {

    constructor(ttl = 3000) {
        this.cache = new Map();
        this.ttl = ttl;
    }

    setCache(key, value) {


       const ttlWithJitter = cacheTTL(this.ttl);
console.log(ttlWithJitter)
        const expire = Date.now() + ttlWithJitter;

        this.cache.set(key, {
            value: value,
            expire: expire
        });
    }

    getCache(key) {

        const data = this.cache.get(key);



        if (!data) {
            console.log("Key not found");
            return null;
        }

        let newDate=Date.now()
        // check expiration
        if (newDate > data.expire) {
            console.log("Key expired");
            this.cache.delete(key);
            return null;
        }

        return data.value;
    }
}

const link = new LINK(2000); // 2 sec TTL

link.setCache('name_1', { name: 'jugal', email: 'jugalgamilcom' });

console.log(link.getCache('name_1')); // works

setTimeout(() => {
    console.log(link.getCache('name_1')); // expired after 2 sec
}, 3000);

