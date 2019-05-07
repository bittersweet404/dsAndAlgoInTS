/**
 * Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge uv, vertex u comes before v in the ordering.
 * Topological Sorting for a graph is not possible if the graph is not a DAG.
 *
 * In DFS, we print a vertex and then recursively call DFS for its adjacent vertices.
 * In topological sorting, we need to print a vertex before its adjacent vertices.
 *
 */

import Graph from "../../datastructures/08_graphs/graphs";
import Stack from "../../datastructures/01_stacks/stack";

export default class TopologicalSort extends Graph {
    private stack: Stack;

    constructor() {
        super();
        this.stack = new Stack();
    }

    private topologicalSortUtil(node: any, visited: any[], stack: Stack): void {
        visited[node] = true;

        let neighbors: any = this.adjList.get(node);
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor_elem: any = neighbors[i];
            if (!visited[neighbor_elem])
                this.topologicalSortUtil(neighbor_elem, visited, stack);
        }

        stack.push(node);
    }

    public init(): any[] {
        let visited: any[] = [];
        let sortOutput: any[] = [];
        for (let i = 0; i < this.nodes.length; i++) {
            visited[i] = false;
        }

        for (let node = 0; node < this.nodes.length; node++) {
            if (visited[node] === false) {
                this.topologicalSortUtil(node, visited, this.stack);
            };
        }

        while(!this.stack.isEmpty()) {
            sortOutput.push(this.stack.pop());
        }
        return sortOutput;
    }
}