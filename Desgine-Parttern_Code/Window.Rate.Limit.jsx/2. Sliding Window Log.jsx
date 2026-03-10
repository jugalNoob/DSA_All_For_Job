2. Sliding Window Log (Advanced Timestamp Logic)

Instead of fixed bucket, we store all timestamps.

Example:
Allow 5 requests per 10 seconds.

Logic

Remove timestamps older than 10 seconds.

Request times
[10, 11, 12, 13, 15]

current time = 20
remove < 10

Code
class SlidingWindow {
  constructor(limit, window) {
    this.limit = limit
    this.window = window
    this.logs = []
  }

  allow() {
    let now = Date.now()

    while (this.logs.length && now - this.logs[0] > this.window) {
      this.logs.shift()
    }

    if (this.logs.length >= this.limit) return false

    this.logs.push(now)
    return true
  }
}

Used In

API gateway

Distributed rate limiters

Payment fraud detection