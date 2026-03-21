🔥 4. Prim (MST)
function prim(graph) {
    let visited = new Set();
    let heap = [{ node: 0, cost: 0 }];
    let total = 0;

    while (heap.length) {
        heap.sort((a, b) => a.cost - b.cost);
        let { node, cost } = heap.shift();

        if (visited.has(node)) continue;

        visited.add(node);
        total += cost;

        for (let [nei, w] of graph[node]) {
            if (!visited.has(nei)) {
                heap.push({ node: nei, cost: w });
            }
        }
    }

    return total;
}