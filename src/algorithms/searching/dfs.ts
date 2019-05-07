/**
 * Graph traversal algorigth which starts from the first specified node and will follow a path until the last node on this path is visited and then backtracks and follows next path and so on.
 *
 * This algorithm is used to perform topological sorting
 *
 * This algorithm makes recursive calls to keep track of visited nodes.
 *
 * Time complexity = O(N+E) where N is number of nodes in the graph and E is number of edges in the graph.
 */

import Graph from "../../datastructures/08_graphs/graphs";

export default class DFS extends Graph {
    constructor() {
        super();
    }

    private dfsVisit(node: any, visited: any[], dfsOutput: any[]): void {
        visited[node] = true;
        dfsOutput.push(node);

        let neighbors: any = this.adjList.get(node);
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor_elem: any = neighbors[i];
            if (!visited[neighbor_elem])
                this.dfsVisit(neighbor_elem, visited, dfsOutput);
        }
    }

    public init(node: any): any[] {
        let visited: any[] = [];
        let dfsOutput: any[] = [];
        for (let i = 0; i < this.nodes.length; i++) {
            visited[i] = false;
        }
        this.dfsVisit(node, visited, dfsOutput);
        return dfsOutput;
    }
}