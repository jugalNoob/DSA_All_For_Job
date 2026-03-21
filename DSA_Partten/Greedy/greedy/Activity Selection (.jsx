function greedy(intervals) {
    // sort by end time
    let interval=intervals.sort((a, b) => a[1] - b[1])

    console.log(interval)

    let count = 1
    let end = interval[0][1]

    for (let i = 1; i < interval.length; i++) {
        if (interval[i][0] >= end) {
            count++
            end = interval[i][1]
        }
    }

    return count
}

console.log(greedy([[1,3],[2,4],[3,5],[6,7]]))
