/**
 * A graph is an abstract model of a network structure.
 * A graph is a set of nodes (or vertices), connected by edges.
 */

/**
 * Commonly used terminology:
 * 1. Adjacent nodes    = nodes connected by an edge.
 * 2. Degree            = A degree of a node consists of the number of adjacent nodes (If node A is                            connected to 3 other nodes then, A's degree is 3).
 * 3. Path              = a path is a sequence of consecutive nodes which are adjacent to each other.
 * 4. Simple Path       = A path that does not contain repeated nodes.
 * 5. Cycle             = A cycles is a simple path except for the last node which is same as first                            node. (Ex: ADCA)
 * 6. Acyclic graph     = A graph is acyclic if it does not have any cycles.
 * 7. Directed graphs   = A graph with edges that have a direction is called directed graph (A->B->E)
 * 8. Undirected graphs = A graph with edges that do not have a direction is called undirected graph.
 * 9. Strongly connected= A graph is strongly connected if there is a path in both directions between                          every pair of nodes.
 * 10. Weighted graph   = A graph with edges that have weigths is called weighted graph
 * 11. Unweighted graph = A graph with edges that do not have weights is called unweighted graph
 */
import Dictionary from '../05_dictionaries/dictionaries';

export default class Graph {
    public nodes: any[];
    public adjList: Dictionary;

    constructor() {
        this.nodes = [];
        this.adjList = new Dictionary();
    }

    private detectCyclesUtil(node: any, visited: any, recStack: any): boolean {
        if (!visited[node]) {
            visited[node] = true;
            recStack[node] = true;

            let neighbors: any[] = this.adjList.get(node);
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (!visited[w] && this.detectCyclesUtil(w, visited, recStack)){
                    return true;
                }
                else if (recStack[w]) {
                    return true;
                }
            }
        }
        recStack[node] = false;
        return false;
    }

    /**
     * toString operation - prints out the graph
     */
    public toString(): string {
        return JSON.stringify(this.adjList);
    }

    /**
     * addNode operation - adds a new node to the graph
     */
    public addNode(node: any): void {
        this.nodes.push(node);
        this.adjList.set(node, []);
    }

    /**
     * addEdge operation - addes edge between two nodes
     */
    public addEdge(node1: any, node2: any) {
        this.adjList.get(node1).push(node2);
    }

    public detectCycles(): boolean {
        let visited: any = {};
        let recStack: any = {};

        for (let i = 0; i < this.nodes.length; i++) {
            let u: any = this.nodes[i];
            if (this.detectCyclesUtil(u, visited, recStack)) {
                return true;
            }
        }
        return false;
    }
}