import Stack from './stack';

describe('Stack: ', () => {
    let stack: Stack;

    beforeEach(() => {
        stack = new Stack();
        return stack;
    });

    test('should initialize stack successfully', () => {
        expect(stack).toBeDefined();
    });

    test('should pass the push operation', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.toString()).toEqual('1,2');
    });

    test('should pass the peek operation', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toEqual(3);
    });

    test('should pass the pop operation', () => {
        stack.push(1);
        stack.push(2);
        stack.pop();
        expect(stack.toString()).toEqual('1');
    });

    test('should pass the isEmpty operation', () => {
        stack.push(1);
        expect(stack.isEmpty()).toBeFalsy();
    });

    test('should pass the size operation', () => {
        stack.push(1);
        expect(stack.size()).toEqual(1);
    });

    test('should pass the clear operation', () => {
        stack.push(1);
        stack.clear();
        expect(stack.isEmpty()).toBeTruthy();
    });
});
