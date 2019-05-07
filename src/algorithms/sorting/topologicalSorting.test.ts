import TopologicalSort from './topologicalSorting';

describe('TopologicalSort: ', () => {
    let topologicalSort: TopologicalSort;

    beforeEach(() => {
        topologicalSort = new TopologicalSort();
    });

    test('should initialize', () => {
        expect(topologicalSort).toBeDefined();
    });

    test('should test init operation', () => {
        topologicalSort.addNode(0);
        topologicalSort.addNode(1);
        topologicalSort.addNode(2);
        topologicalSort.addNode(3);
        topologicalSort.addNode(4);
        topologicalSort.addNode(5);

        topologicalSort.addEdge(5, 2);
        topologicalSort.addEdge(5, 0);
        topologicalSort.addEdge(4, 0);
        topologicalSort.addEdge(4, 1);
        topologicalSort.addEdge(2, 3);
        topologicalSort.addEdge(3, 1);

        expect(topologicalSort.init()).toEqual([5, 4, 2, 3, 1, 0]);
    });
});