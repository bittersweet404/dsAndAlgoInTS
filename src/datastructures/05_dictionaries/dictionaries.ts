/**
 * Dictionary or map or associative array is an abstract data type composed of a collection of (key, value) pairs, such that each possible key appears at most once in the collection.
 */

export default class Dictionary {
    private items: any;
    private length: number;

    constructor() {
        this.items = {};
        this.length = 0;
    }

    /**
     * has operation - checks if dictionary has the value passed
     */
    public has(key: any): boolean {
        return (key in this.items);
    }

    /**
     * set operation - adds the data to dictionary
     */
    public set(key: any, data: any): void {
        if (!this.has(key)) {
            this.items[key] = data;
            this.length++;
        }
    }

    /**
     * remove operation - removes the data at the key from the dictionary
     */
    public remove(key: any): boolean {
        if (this.has(key)) {
            delete this.items[key];
            this.length--;
            return true;
        }
        return false;
    }

    /**
     * get operation - returns the data the key
     */
    public get(key: any): any {
        return (this.has(key)) ? this.items[key] : undefined;
    }

    /**
     * clear operation - removes all entries from the dictionary
     */
    public clear(): void {
        this.items = {};
    }

    /**
     * size operation - returns the size of the dictionary
     */
    public size(): number {
        return this.length;
    }

    /**
     * keys operation - returns all the keys of the dictionary
     */
    public keys(): any[] {
        let output: any[] = [];
        for (let key in this.items) {
            output.push(key);
        }
        return output;
    }

    /**
     * values operation - returns all the values at respective keys of the dictionary
     */
    public values(): any[] {
        let output: any[] = [];
        for (let key in this.items) {
            output.push(this.items[key]);
        }
        return output;
    }
}