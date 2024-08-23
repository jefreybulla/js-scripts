// coompared to Graph.js. this implementation checks for unique keys when addEdge since it uses Map object
// if we wanted 
const Queue = require('./Queue')

module.exports = class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        // Map object enforces unique keys
        this.AdjList = new Map()
    }

    // add vertex to the graph
    addVertex(v){
        // initialize the adjacent list with a
        // null array
        this.AdjList.set(v, [])
    }

    // add edge to the graph
    addEdge(v, w)
    {
        // get the list for vertex v and put the
        // vertex w denoting edge between v and w
        this.AdjList.get(v).push(w)

        // Since graph is undirected,
        // add an edge from w to v also
        this.AdjList.get(w).push(v)
    }

    // Prints the vertex and adjacency list
    printGraph(){
        // get all the vertices
        var get_keys = this.AdjList.keys()

        // iterate over the vertices
        for (var i of get_keys) 
    {
            // get the corresponding adjacency list
            // for the vertex
            var get_values = this.AdjList.get(i)
            var conc = ""

            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " "

            // print the vertex and its adjacency list
            console.log(i + " -> " + conc)
        }
    }

    // Breadth First Traversal of the Graph
    bfs(startingNode){
        const visitedNodes = {}
        const nodesToVisit = new Queue
        nodesToVisit.enqueue(startingNode)
        console.log(`visited node: ${startingNode}`)
        visitedNodes[startingNode] = true
        while(!nodesToVisit.isEmpty()){
            for(let node of this.AdjList.get(nodesToVisit.getFront())){
                if(!visitedNodes[node]){
                    // visiting a new node
                    console.log(`visited node: ${node}`)
                    visitedNodes[node] = true
                    nodesToVisit.enqueue(node)
                }
            }
            nodesToVisit.dequeue()
    }
        


    }    
    //To-do: implement the following:  
    // dfs(v)
}
