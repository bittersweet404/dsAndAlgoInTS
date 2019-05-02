import Queue from './queue';

describe('Queue: ', () => {
    let queue: Queue;

    beforeEach(() => {
        queue = new Queue();
    });

    test('should initialize queue', () => {
        expect(queue).toBeDefined();
    });

    test('should test enqueue operation', () => {
        queue.enqueue(1);
        expect(queue.toString()).toEqual('1');
    });

    test('should test dequeue operation', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        expect(queue.toString()).toEqual('2');
    });

    test('should test rear operation', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.rear()).toEqual(2);
    });

    test('should test front operation', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front()).toEqual(1);
    });

    test('should test isEmpty operation', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        expect(queue.isEmpty()).toBeFalsy();
    });

    test('should test clear operation', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.clear();
        expect(queue.isEmpty()).toBeTruthy();
    });
});