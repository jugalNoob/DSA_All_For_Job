⚡ 2. Optimized (Queue / Sliding Window)
class HitCounter {
    constructor() {
        this.queue = [];
    }

    hit(time) {
        this.queue.push(time);
    }

    getHits(now) {

        while (this.queue.length && now - this.queue[0] >= 300) {
            this.queue.shift();
        }  

        return this.queue.length;
    }
}

🚀 3. Advanced (Real system design level)

👉 Use:

HashMap (timestamp → count)
circular array (fixed memory)
distributed cache (Redis)