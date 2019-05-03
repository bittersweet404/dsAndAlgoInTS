import Dictionary from './dictionaries';

describe('Dictionary: ', () => {
    let dictionary: Dictionary;
    beforeEach(() => {
        dictionary = new Dictionary();
    });

    test('should initialize', () => {
        expect(dictionary).toBeDefined();
    });

    test('should test has operation', () => {
        expect(dictionary.has(1)).toBeFalsy();
    });

    test('should test set operation', () => {
        dictionary.set(1, 'a');
        expect(dictionary.has(1)).toBeTruthy();

        dictionary.set(1, 'b');
        expect(dictionary.has(1)).toBeTruthy();
        expect(dictionary.has(99)).toBeFalsy();
    });

    test('should test remove operation', () => {
        dictionary.set(1, 'a');
        dictionary.set(2, 'b');
        expect(dictionary.remove(1)).toBeTruthy();
        expect(dictionary.remove(99)).toBeFalsy();
    });

    test('should test get operation', () => {
        dictionary.set(1, 'a');
        dictionary.set(2, 'b');
        expect(dictionary.get(1)).toEqual('a');
        expect(dictionary.get(99)).toBeUndefined();
    });

    test('should test clear operation', () => {
        dictionary.set(1, 'a');
        dictionary.set(2, 'b');
        dictionary.clear();
        expect(dictionary.has(1)).toBeFalsy();
    });

    test('should test size operation', () => {
        dictionary.set(1, 'a');
        dictionary.set(2, 'b');
        expect(dictionary.size()).toEqual(2);
    });

    test('should test keys operation', () => {
        dictionary.set(1, 'a');
        dictionary.set(2, 'b');
        expect(dictionary.keys()).toEqual(['1','2']);
    });

    test('should test values operation', () => {
        dictionary.set(1, 'a');
        dictionary.set(2, 'b');
        expect(dictionary.values()).toEqual(['a','b']);
    });
});