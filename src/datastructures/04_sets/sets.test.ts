import Set from './sets';

describe('Set ', () => {
    let set: Set;
    beforeEach(() => {
        set = new Set();
    });

    test('should initialize', () => {
        expect(set).toBeDefined();
    });

    test('should test has operation', () => {
        expect(set.has(1)).toBeFalsy();
    });

    test('should test add operation', () => {
        expect(set.add({fName:'Srikar'})).toBeTruthy();
        expect(set.add({fName:'Srikar'})).toBeFalsy();
    });

    test('should test remove operation', () => {
        set.add(1);
        expect(set.remove(1)).toBeTruthy();
        expect(set.remove(2)).toBeFalsy();
    });

    test('should test values operation', () => {
        set.add(1);
        set.add(2);
        expect(set.values()).toEqual(['1','2']);
    });

    test('should test clear operation', () => {
        set.add(1);
        set.clear();
        expect(set.has(1)).toBeFalsy();
    });

    test('should test size operation', () => {
        set.add(1);
        set.add(2);
        expect(set.size()).toEqual(2);
    });

    test('should test toString operation', () => {
        set.add(1);
        set.add(2);
        expect(set.toString()).toEqual('1, 2');
    });

    test('should test union operation', () => {
        set.add(1);
        set.add(2);

        let set2: Set = new Set();
        set2.add(3);
        set2.add(4);

        let finalSet: Set = set.union(set2);
        expect(finalSet.values()).toEqual(['1', '2', '3', '4']);
    });

    test('should test intersection operation', () => {
        let set2: Set = new Set();

        set.add(1);
        set.add(2);

        set2.add(2);
        set2.add(3);

        let finalSet: Set = set.intersection(set2);
        expect(finalSet.values()).toEqual(['2']);
    });

    test('should test difference operation', () => {
        let set2: Set = new Set();

        set.add(1);
        set.add(2);

        set2.add(2);
        set2.add(3);

        let finalSet: Set = set.difference(set2);
        expect(finalSet.values()).toEqual(['1']);
    });

    test('should test subset operation', () => {
        set.add(1);
        set.add(2);

        let set2: Set = new Set();
        set2.add(1);
        set2.add(2);
        set2.add(3);
        expect(set.subset(set2)).toBeTruthy();

        let set3: Set = new Set();
        set3.add(4);
        set3.add(5);
        expect(set.subset(set3)).toBeFalsy();

        let set4: Set = new Set();
        set4.add(0);
        expect(set.subset(set4)).toBeFalsy();
    });
});