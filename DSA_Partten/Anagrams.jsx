function anagrams(data1, data2) {

    if (data1.length !== data2.length) {
        return false
    }

    let map = {}

    // count characters of data1
    for (let i = 0; i < data1.length; i++) {
        let ch = data1[i]
        map[ch] = (map[ch] || 0) + 1
    }

    // reduce using data2
    for (let i = 0; i < data2.length; i++) {
        let ch = data2[i]

        if (!map[ch]) {
            return false
        }

        map[ch]--
    }

    return true
}

console.log(anagrams('hello', 'elllo'))
