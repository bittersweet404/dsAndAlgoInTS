/**
 * In computing, a hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values.
 *
 * A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
 */
export default class HashTable {
    private table: any[];

    constructor() {
        this.table = [];
    }

    private static djb2HashCode(key: string): number {
        let hash: number = 5381; // uncommon prime number
        for (var i = 0; i < key.length; i++) {
			hash = hash * 33 + key.charCodeAt(i);
		}
		return hash % 1013;
    }

    /**
     * toString operation - print all the values of the table
     */
    public toString(): string {
        let output: string = '';
        for(let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined && this.table[i] !== null) {
                output += `${i} - ${this.table[i]}, `;
            }
        }
        output = output.substring(0, output.lastIndexOf(','));
        return output;
    }

    /**
     * insert operation - adds the value in the hash table
     */
    public insert(key: string, value: string): void {
        let position: number = HashTable.djb2HashCode(key);
        this.table[position] = value;
    }

    /**
     * remove operation - removes the value from the hash table
     */
    public remove(key: string): void {
        let position: number = HashTable.djb2HashCode(key);
        this.table[position] = undefined;
    }

    /**
     * get operation - locate the value in the hash table using the key
     */
    public get(key: string): any {
        let position: number = HashTable.djb2HashCode(key);
        return this.table[position];
    }
}