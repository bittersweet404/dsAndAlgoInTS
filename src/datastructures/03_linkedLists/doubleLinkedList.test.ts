import { DoubleLinkedList } from './doubleLinkedLists';

describe('DoubleLinkedList', () => {
    test ('should initialize the linked list', () => {
        let node: DoubleLinkedList = new DoubleLinkedList();
        expect(node).toBeDefined();
    });

    test ('should test the append operation', () => {
        let node: DoubleLinkedList = new DoubleLinkedList();
        node.insert(1, 0);
        expect(node.size()).toEqual(1);

        node.insert(2, 1);
        expect(node.size()).toEqual(2);
        expect(node.toString()).toEqual('1, 2');
    });

    test ('should test the insert operation', () => {
        let node: DoubleLinkedList = new DoubleLinkedList();
        expect(node.insert(1, 0)).toBeTruthy();
        expect(node.insert(2, 1)).toBeTruthy();
        expect(node.insert(3, 2)).toBeTruthy();
        expect(node.insert(4, 4)).toBeFalsy();
        expect(node.insert(5, 2)).toBeTruthy();
        expect(node.insert(6, 0)).toBeTruthy();
    });

    test ('should test the isEmpty operation', () => {
        let node: DoubleLinkedList = new DoubleLinkedList();
        node.insert(1, 0);
        expect(node.isEmpty()).toBeFalsy();
    });

    test ('should test the getHead operation', () => {
        let node: DoubleLinkedList = new DoubleLinkedList();
        node.insert(1, 0);
        node.insert(2, 1);
        node.insert(3, 2);

        expect(node.getHead().data).toEqual(1);
    });

    test ('should test the indexOf operation', () => {
        let node: DoubleLinkedList = new DoubleLinkedList();
        node.insert(1, 0);
        expect(node.indexOf(1)).toEqual(0);

        node.insert(2, 1);
        expect(node.indexOf(2)).toEqual(1);
        expect(node.indexOf(3)).toEqual(-1);
    });

    test ('should test the removeAt operation', () => {
        let node: DoubleLinkedList = new DoubleLinkedList();
        node.insert(1, 0);
        expect(node.removeAt(0)).toEqual(1);
        expect(node.size()).toEqual(0);

        node.insert(1, 0);
        node.insert(2, 1);
        node.insert(3, 2);
        expect(node.removeAt(1)).toEqual(2);
        expect(node.size()).toEqual(2);

        expect(node.removeAt(1)).toEqual(3);

        expect(node.removeAt(-1)).toEqual(null);
    });

    test ('should test the removeAt operation', () => {
        let node: DoubleLinkedList = new DoubleLinkedList();
        node.insert(1, 0);
        node.insert(2, 1);
        expect(node.remove(1)).toEqual(1);
        expect(node.size()).toEqual(1);

        expect(node.remove(3)).toEqual(null);
    });

    test ('should test the reverse operation', () => {
        let node: DoubleLinkedList = new DoubleLinkedList();
        node.insert(1, 0);
        node.insert(2, 1);
        node.insert(3, 2);

        node.reverse();

        expect(node.toString()).toEqual('3, 2, 1');
    });
});