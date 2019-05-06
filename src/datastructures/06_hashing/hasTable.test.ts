import HashTable from './hashTable';

describe('HashTable: ', () => {
    test('should initialize', () => {
        let hashTable1: HashTable = new HashTable();
        expect(hashTable1).toBeDefined();
    });

    test('should test toString operation', () => {
        let hashTable2: HashTable = new HashTable();
        expect(hashTable2.toString()).toEqual('');
    });

    test('should test insert operation', () => {
        let hashTable3: HashTable = new HashTable();
        hashTable3.insert('Gandalf', 'gandalf@wizard.com');
        hashTable3.insert('Fredo', 'fredo@hobbit.com');
        expect(hashTable3.toString()).toEqual('484 - fredo@hobbit.com, 798 - gandalf@wizard.com');
    });

    test('should test remove operation', () => {
        let hashTable4: HashTable = new HashTable();
        hashTable4.insert('Gandalf', 'gandalf@wizard.com');
        hashTable4.insert('Fredo', 'fredo@hobbit.com');
        hashTable4.remove('Gandalf');
        expect(hashTable4.toString()).toEqual('484 - fredo@hobbit.com');
    });

    test('should test get operation', () => {
        let hashTable5: HashTable = new HashTable();
        hashTable5.insert('Gandalf', 'gandalf@wizard.com');
        hashTable5.insert('Fredo', 'fredo@hobbit.com');
        expect(hashTable5.get('Gandalf')).toEqual('gandalf@wizard.com');
        expect(hashTable5.get('Fredo')).toEqual('fredo@hobbit.com');
    });
});