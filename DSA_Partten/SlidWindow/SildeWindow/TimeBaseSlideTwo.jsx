Time base slide windows js code


class SlidingWindow {
  constructor(windowSizeMs) {
    this.windowSizeMs = windowSizeMs; // window size in milliseconds
    this.events = []; // store timestamps of events
  }

  // Add an event at current time
  addEvent() { 
    
    const now = Date.now();
    this.events.push(now);
    this.cleanup(now);
  }

  // Remove old events outside the window
  cleanup(now) {
    while (this.events.length && this.events[0] <= now - this.windowSizeMs) {
      this.events.shift(); // remove the oldest
    }
  }

  // Get count of events in the current window
  getCount() {
    const now = Date.now();
    this.cleanup(now);
    return this.events.length;
  }
}

// Example Usage
const window = new SlidingWindow(5000); // 5-second window

// Add events at random intervals
setInterval(() => {
  window.addEvent();
  console.log("Events in last 5s:", window.getCount());
}, 1000);

