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
        expect(graph.toString()).toEqual('{\"items\":{},\"length\":0}');
    });

    test('should test addNode operation', () => {
        graph.addNode(1);
        graph.addNode(2);
        expect(graph.toString()).toContain('{\"items\":{\"1\":[],\"2\":[]},\"length\":2}');
    });

    test('should test addEdge operation', () => {
        graph.addNode(1);
        graph.addNode(2);
        graph.addEdge(1,2);

        expect(graph.toString()).toContain('{\"items\":{\"1\":[2],\"2\":[]},\"length\":2}');
    });

    test('should test detectCycles operation', () => {
        graph.addNode(1);
        graph.addNode(2);
        graph.addNode(3);

        graph.addEdge(1,2);
        graph.addEdge(2,3);
        expect(graph.detectCycles()).toBeFalsy();

        graph.addEdge(3, 1);
        expect(graph.detectCycles()).toBeTruthy();
    });
});