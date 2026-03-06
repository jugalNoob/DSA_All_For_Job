class ClickQueue {
    constructor(windowMs = 5 * 60 * 1000) {
        this.queue = [];
        this.windowMs = windowMs;
        this.count = 1;
    }

    click() {
        const now = Date.now();
        this.queue.push({ count: this.count++, time: now });

        // Remove expired clicks from front
        while (this.queue.length && now - this.queue[0].time > this.windowMs) {
            this.queue.shift();
        }

        console.log("Recent Clicks:", this.queue);
    }
}

const clicks = new ClickQueue();
clicks.click();
clicks.click();
clicks.click();
clicks.click();