const Graph =  require('./Graph.js')

/*
const myGraph = new Graph(4)
console.log(myGraph)
myGraph.addEdge(0,1)
myGraph.addEdge(0,2)
//myGraph.addEdge(1,2)
console.log(myGraph)
console.log(myGraph.list)
myGraph.printGraph()
*/


let g = new Graph(7);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(4, 0);
g.addEdge(3, 5);
g.addEdge(5, 6);

console.log("Before removing edge")
g.printGraph()
//console.log(g.strGraph())

