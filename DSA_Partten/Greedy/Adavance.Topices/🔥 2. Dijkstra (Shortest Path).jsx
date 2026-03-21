🔥 2. Dijkstra (Shortest Path)
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this.heap.sort((a, b) => a.dist - b.dist);
    }

    pop() {
        return this.heap.shift();
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function dijkstra(graph, start) {
    let dist = {};
    let heap = new MinHeap();

    for (let node in graph) {
        dist[node] = Infinity;
    }

    dist[start] = 0;
    heap.push({ node: start, dist: 0 });

    while (!heap.isEmpty()) {
        let { node, dist: currDist } = heap.pop();

        for (let neighbor in graph[node]) {
            let newDist = currDist + graph[node][neighbor];

            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                heap.push({ node: neighbor, dist: newDist });
            }
        }
    }

    return dist;
}