/**
 * A Queue is a linear structure which follows a particular order in which the operations are performed.
 * The order is First In First Out (FIFO).
 */

/**
 * Commonly asked interview questions:
 * 1. Breadth First Traversal or BFS for a Graph
 * 2. Reverse a path in BST using queue
 * 3. Level Order Tree Traversal | Breadth first traversal for the tree
 * 4. Priority Queue
 * 5. Circular queue - Hot Potato Game
 */

export default class Queue {
    private dataBag: any[] = [];

    constructor() {}

    /**
     * enqueue operation - adds to the queue
     */
    public enqueue(value: any): void {
        this.dataBag.push(value);
    }

    /**
     * dequeue operation - removes first element from the queue
     */
    public dequeue(): any {
        return this.dataBag.shift();
    }

    /**
     * rear operation - returns the rear of the queue
     */
    public rear(): any {
        return this.dataBag[this.dataBag.length - 1];
    }

    /**
     * front operation - returns the front of the queue
     */
    public front(): any {
        return this.dataBag[0];
    }

    /**
     * isEmpty operation - checks if queue is empty or not
     */
    public isEmpty(): boolean {
        return this.dataBag.length === 0;
    }

    /**
     * clear operation - clears the queue
     */
    public clear(): void {
        this.dataBag = [];
    }

    /**
     * toString operation - returns the stringified version of queue
     */
    public toString(): string {
        return this.dataBag.toString();
    }
}