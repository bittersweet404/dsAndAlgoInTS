/**
 * Graph traversal algorigth which visits the neighbors of a node first then visits each layer of the graph.
 *
 * This algorithm is used to find the shortest distance between two nodes.
 *
 * This algorithm makes use of Queue data structure to keep track of visited nodes.
 *
 * Time complexity = O(N+E) where N is number of nodes in the graph and E is number of edges in the graph.
 */
import Graph from '../../datastructures/08_graphs/graphs';
import Queue from '../../datastructures/02_queues/queue';


export default class BFS extends Graph {
    private queue: Queue;

    constructor() {
        super();
    }

    public shortestDistance(): any {
        let distance: any = {};
        this.queue = new Queue();

        for (let i = 0; i < this.nodes.length; i++) {
            distance[this.nodes[i]] = -1;
        }

        distance[this.nodes[0]] = 0;
        this.queue.enqueue(this.nodes[0]);
        while(!this.queue.isEmpty()) {
            let u: any = this.queue.dequeue();
            let neighbors: any[] = this.adjList.get(u);

            for (let i = 0; i < neighbors.length; i++) {
                if (distance[neighbors[i]] === -1) {
                    distance[neighbors[i]] = distance[u] + 1;
                    this.queue.enqueue(neighbors[i]);
                }
            }
        }
        return distance;
    }
}