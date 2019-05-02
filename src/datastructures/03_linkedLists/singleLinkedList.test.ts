import { SingleLinkedList } from './singleLinkedLists';

describe('SingleLinkedList', () => {
    test ('should initialize the linked list', () => {
        let node: SingleLinkedList = new SingleLinkedList();
        expect(node).toBeDefined();
    });

    test ('should test the append operation', () => {
        let node: SingleLinkedList = new SingleLinkedList();
        node.append(1);
        expect(node.size()).toEqual(1);

        node.append(2);
        expect(node.size()).toEqual(2);
        expect(node.toString()).toEqual('1, 2');
    });

    test ('should test the insert operation', () => {
        let node: SingleLinkedList = new SingleLinkedList();
        expect(node.insert(1, 0)).toBeTruthy();
        expect(node.insert(2, 1)).toBeTruthy();
        expect(node.insert(3, 3)).toBeFalsy();
    });

    test ('should test the isEmpty operation', () => {
        let node: SingleLinkedList = new SingleLinkedList();
        node.append(1);
        expect(node.isEmpty()).toBeFalsy();
    });

    test ('should test the getHead operation', () => {
        let node: SingleLinkedList = new SingleLinkedList();
        node.append(1);
        node.append(2);
        node.append(3);
        expect(node.getHead()).toEqual({data:1,next:{data:2,next:{data:3,next:null}}});
    });

    test ('should test the indexOf operation', () => {
        let node: SingleLinkedList = new SingleLinkedList();
        node.append(1);
        expect(node.indexOf(1)).toEqual(0);

        node.append(2);
        expect(node.indexOf(2)).toEqual(1);
        expect(node.indexOf(3)).toEqual(-1);
    });

    test ('should test the removeAt operation', () => {
        let node: SingleLinkedList = new SingleLinkedList();
        node.append(1);
        expect(node.removeAt(0)).toEqual(1);
        expect(node.size()).toEqual(0);

        node.append(1);
        node.append(2);
        node.append(3);
        expect(node.removeAt(1)).toEqual(2);
        expect(node.size()).toEqual(2);

        expect(node.removeAt(-1)).toEqual(null);
    });

    test ('should test the removeAt operation', () => {
        let node: SingleLinkedList = new SingleLinkedList();
        node.append(1);
        node.append(2);
        expect(node.remove(1)).toEqual(1);
        expect(node.size()).toEqual(1);

        expect(node.remove(3)).toEqual(null);
    });

    test ('should test the reverse operation', () => {
        let node: SingleLinkedList = new SingleLinkedList();
        node.append(1);
        node.append(2);
        node.append(3);

        node.reverse();

        expect(node.toString()).toEqual('3, 2, 1');
    });
});