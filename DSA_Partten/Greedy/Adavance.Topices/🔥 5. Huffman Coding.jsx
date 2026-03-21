🔥 5. Huffman Coding
class Node {
    constructor(char, freq) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }
}

function huffmanCoding(freqMap) {
    let heap = [];

    // create nodes
    for (let char in freqMap) {
        heap.push(new Node(char, freqMap[char]));
    }

    while (heap.length > 1) {
        heap.sort((a, b) => a.freq - b.freq);

        let left = heap.shift();
        let right = heap.shift();

        let merged = new Node(null, left.freq + right.freq);
        merged.left = left;
        merged.right = right;

        heap.push(merged);
    }

    return heap[0]; // root of tree
}

// generate codes
function generateCodes(node, code = "", map = {}) {
    if (!node) return;

    if (node.char !== null) {
        map[node.char] = code;
    }

    generateCodes(node.left, code + "0", map);
    generateCodes(node.right, code + "1", map);

    return map;
}

🧠 FINAL INTERVIEW INSIGHT

All these codes follow SAME greedy pattern: