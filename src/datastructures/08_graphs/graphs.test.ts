import Graph from './graphs';

describe('Graph: ', () => {
    let graph: Graph;

    beforeEach(() => {
        graph = new Graph();
    });

    test('should initialize', () => {
        expect(graph).toBeDefined();
    });

    test('should test toString operation', () => {
        expect(graph.toString()).toEqual('');
    });

    test('should test addNode operation', () => {
        graph.addNode(1);
        graph.addNode(2);
        expect(graph.toString()).toContain('1->\n2->');
    });

    test('should test addEdge operation', () => {
        graph.addNode(1);
        graph.addNode(2);
        graph.addEdge(1,2);

        expect(graph.toString()).toContain('1->2 \n2->1 ');
    });
});