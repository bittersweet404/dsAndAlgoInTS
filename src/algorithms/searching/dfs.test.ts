import DFS from './dfs';

describe('DFS: ', () => {
    let dfs: DFS;

    beforeEach(() => {
        dfs = new DFS();
    });

    test('should initialize', () => {
        expect(dfs).toBeDefined();
    });

    test('should test init operation', () => {
        dfs.addNode(0);
        dfs.addNode(1);
        dfs.addNode(2);
        dfs.addNode(3);
        dfs.addNode(4);

        dfs.addEdge(0,1);
        dfs.addEdge(0,2);
        dfs.addEdge(1,2);
        dfs.addEdge(2,0);
        dfs.addEdge(2,1);
        dfs.addEdge(0,3);
        dfs.addEdge(3,3);
        dfs.addEdge(4,1);

        expect(dfs.init(0)).toEqual([0, 1, 2, 3]);
    });
});