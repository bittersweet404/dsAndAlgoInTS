/**
 * Stack is a linear data structure which follows a particular order in which the operations are performed.
 * The order may be LIFO(Last In First Out) or FILO(First In Last Out).
 */

/**
 * Commonly asked interview questions in stack:
 * 1. Infix to Postfix Conversion using Stack
 * 2. Evaluation of Postfix Expression
 * 3. Reverse a String using Stack
 * 4. Implement two stacks in an array
 * 5. Check for balanced parentheses in an expression
 * 6. Decimal to binary
 */

export default class Stack {
    private dataBag: any[] = [];

    constructor() {}

    /**
     * push operation - adds to the stack
     */
    public push(value: any): void {
        this.dataBag.push(value);
    }

    /**
     * pop operation - returns the last item
     */
    public pop(): any {
        return this.dataBag.pop();
    }

    /**
     * peek operation - returns the top of the stack
     */
    public peek(): any {
        return this.dataBag[this.dataBag.length - 1];
    }

    /**
     * isEmpty operation - checks if stack is empty or not
     */
    public isEmpty(): boolean {
        return (this.dataBag.length === 0);
    }

    /**
     * size operation - returns the size/length of the stack
     */
    public size(): number {
        return this.dataBag.length;
    }

    /**
     * clear operation - empties the stack
     */
    public clear(): void {
        this.dataBag = [];
    }

    /**
     * toString operation - returns the stringified version of stack
     */
    public toString(): string {
        return this.dataBag.toString();
    }
}