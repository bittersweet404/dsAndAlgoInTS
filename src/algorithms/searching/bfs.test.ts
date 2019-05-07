import BFS from './bfs';

describe('BFS: ', () => {
    let bfs: BFS;

    beforeEach(() => {
        bfs = new BFS();
    });

    test('should initialize', () => {
        expect(bfs).toBeDefined();
    });

    test('should test shortestDistance operation', () => {
        bfs.addNode(0);
        bfs.addNode(1);
        bfs.addNode(2);
        bfs.addNode(3);
        bfs.addNode(4);

        bfs.addEdge(0,1);
        bfs.addEdge(0,2);
        bfs.addEdge(1,2);
        bfs.addEdge(2,0);
        bfs.addEdge(2,1);
        bfs.addEdge(0,3);
        bfs.addEdge(3,3);
        bfs.addEdge(4,1);

        expect(bfs.shortestDistance()).toEqual({"0": 0, "1": 1, "2": 1, "3": 1, "4": -1});
    });
});