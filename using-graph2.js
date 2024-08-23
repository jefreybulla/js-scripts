const Graph = require('./Graph2')

const g = new Graph(6)
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]


// adding vertices
for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B')
g.addEdge('A', 'D')
g.addEdge('A', 'E')
g.addEdge('B', 'C')
g.addEdge('D', 'E')
g.addEdge('E', 'F')
g.addEdge('E', 'C')
g.addEdge('C', 'F')


g.printGraph()
console.log('traversing graph:')
g.bfs('F')