6. Hit Counter (LeetCode Famous)


class HitCounter {
  constructor() {
    this.times = new Array(300).fill(0)
    this.hits = new Array(300).fill(0)
  }

  hit(timestamp) {
    const i = timestamp % 300

    if (this.times[i] !== timestamp) {
      this.times[i] = timestamp
      this.hits[i] = 1
    } else {
      this.hits[i]++
    }
  }

  getHits(timestamp) {
    let total = 0

    for (let i = 0; i < 300; i++) {
      if (timestamp - this.times[i] < 300) {
        total += this.hits[i]
      }
    }

    return total
  }
}
