🔥 3. Kruskal (MST)
class DSU {
    constructor(n) {
        this.parent = Array(n).fill(0).map((_, i) => i);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let px = this.find(x);
        let py = this.find(y);

        if (px === py) return false;

        this.parent[py] = px;
        return true;
    }
}

function kruskal(n, edges) {
    // edges = [ [u, v, weight] ]
    edges.sort((a, b) => a[2] - b[2]);

    let dsu = new DSU(n);
    let mstCost = 0;

    for (let [u, v, w] of edges) {
        if (dsu.union(u, v)) {
            mstCost += w;
        }
    }

    return mstCost;
}
