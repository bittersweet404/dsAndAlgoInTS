/**
 * It is an unordered collection of objects in which duplicate values cannot be stored.
 */

export default class Set {
    private items: any;
    private length: number;

    constructor() {
        this.items = {};
        this.length = 0;
    }

    /**
     * has operation - checks if the data exists in the set
     */
    public has(data: any): boolean {
        return this.items.hasOwnProperty(data);
    }

    /**
     * add operation - add the data to the set
     */
    public add(data: any): boolean {
        if (!this.has(data)) {
            this.items[data.toString()] = data;
            this.length++;
            return true;
        }
        return false;
    }

    /**
     * remove operation - removes the data fron the set
     */
    public remove(data: any): boolean {
        if (this.has(data)) {
            delete this.items[data];
            this.length--;
            return true;
        }
        return false;
    }

    /**
     * values operation - returns each value of set
     */
    public values(): any[] {
        let keys = [];
        for (let key in this.items) {
            keys.push(key);
        }
        return keys;
    }

    /**
     * clear operation - removes all entries from set
     */
    public clear(): void {
        this.items = {};
    }

    /**
     * size operation - returns the size of the set
     */
    public size(): number {
        return this.length;
    }

    /**
     * toString operation - returns the string output of set
     */
    public toString(): string {
        let output: string = '';
        for (let key in this.items) {
            output += `${this.items[key]}, `;
        }
        output = output.substring(0, output.lastIndexOf(', '));
        return output;
    }

    /**
     * union operation - performs union of two sets
     */
    public union(set2: Set): Set {
        let tempSet: Set = new Set();

        for (let i = 0; i < this.values().length; i++) {
            tempSet.add(this.values()[i]);
        }
        for (let i = 0; i < set2.values().length; i++) {
            tempSet.add(set2.values()[i]);
        }

        return tempSet;
    }

    /**
     * intersection operation - returns set which exists in both sets
     */
    public intersection(set2: Set): Set {
        let tempSet: Set = new Set();
        for(let i = 0; i < this.values().length; i++) {
            if (set2.has(this.values()[i])) {
                tempSet.add(this.values()[i]);
            }
        }
        return tempSet;
    }

    /**
     * difference operation - returns set which contains elements that exists in one set but not in other
     */
    public difference(set2: Set): Set {
        let tempSet: Set = new Set();
        for(let i = 0; i < this.values().length; i++) {
            if (!set2.has(this.values()[i])) {
                tempSet.add(this.values()[i]);
            }
        }
        return tempSet;
    }

    /**
     * subset operation - returns true/false if given a set is subset of another
     */
    public subset(set2: Set): boolean {
        if (this.size() > set2.size()) {
            return false;
        }
        for (let i = 0; i < this.values().length; i++) {
            if (!set2.has(this.values()[i])) {
                return false;
            }
        }
        return true;
    }
}