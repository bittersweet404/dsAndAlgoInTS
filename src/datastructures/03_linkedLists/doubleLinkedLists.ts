/**
 * A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.
 * In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.
 * Types of Linked List:
 * 1. Singly Linked List
 * 2. Circular Linked List
 * 3. Doubly Linked List
 */

 /**
 * Commonly asked interview questions in singly linked list:
 * 1. Function to check if a singly linked list is palindrome
 * 2. Remove duplicates from a sorted linked list
 * 3. Remove duplicates from an unsorted linked list
 */
export interface INode {
    data?: any,
    next?: INode,
    prev?: INode
}

class Node {
    public data?: any;
    public next?: INode;
    public prev?: INode;
    constructor(data: any) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

export class DoubleLinkedList {
    private head: INode;
    private tail: INode;
    private length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    /**
     * size operation - length of the linked list
     */
    public size(): number {
        return this.length;
    }

    /**
     * toString operation - output the stringified version
     */
    public toString(): string {
        let output: string = '';
        let current: INode = this.head;
        while(current) {
            output += `${current.data}, `;
            current = current.next;
        }
        output = output.substring(0, output.lastIndexOf(','));
        return output;
    }

    /**
     * isEmpty operation - checks if linked list is empty or not
     */
    public isEmpty(): boolean {
        return this.length === 0;
    }

    /**
     * getHead operation - returns the head of linked list
     */
    public getHead(): INode {
        return this.head;
    }

    /**
     * insert operation - inserts data at specified index of linked list
     */
    public insert(data: any, index: number): boolean {
        if (index > -1 && index <= this.length) {
            let newNode: INode = new Node(data);
            let current: INode = this.head;
            let previous: INode;
            let count = 0;

            if (index === 0) {
                if (!this.head) {
                    this.head = newNode;
                    this.tail = newNode;
                }
                else {
                    newNode.next = current;
                    current.prev = newNode;
                    this.head = newNode;
                }
            }
            else if (index === this.length) {
                current = this.tail;
                current.next = newNode;
                newNode.prev = current;
                this.tail = newNode;
            }
            else {
                while (count < index) {
                    previous = current;
                    current = current.next;
                    count++;
                }
                newNode.next = current;
                previous.next = newNode;
                current.prev = newNode;
                newNode.prev = previous;
            }
            this.length++;
            return true;
        }
        return false;
    }

    /**
     * indexOf operation - returns the index at which the data resides in linked list
     */
    public indexOf(data: any): number {
        let index: number = 0;
        let current: INode = this.head;

        while(current) {
            if (current.data === data) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    /**
     * removeAt operation - removes the data at the specified index in linked list
     */
    public removeAt(index: number): any {
        if (index > -1 && index < this.length) {
            let current: INode = this.head;
            if (index === 0) {
                this.head = current.next;
                if (this.length === 1) {
                    this.tail = null;
                }
                else {
                    this.head.prev = null;
                }
            }
            else if (index === (this.length - 1)) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            }
            else {
                let count: number = 0;
                let previous: INode;

                while (count < index) {
                    previous = current;
                    current = current.next;
                    count++;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.length--;
            return current.data;
        }
        return null;
    }

    /**
     * remove operation - removes the data from the linked list
     */
    public remove(data: any): any {
        let index: number = this.indexOf(data);
        return this.removeAt(index);
    }

    /**
     * reverse operation - reverses the linked list
     */
    public reverse(): any {
        let current: INode = this.head;
        let previous: INode = null;
        let next: INode = null;

        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
        return this.head;
    }
}