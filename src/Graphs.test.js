import { getShortestPath } from "./Graphs";

const graph = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {},
};

const testData = [
    {
        start: "A",
        finish: "C",
        shortestPath: ["A", "C"]
    },
    {
        start: "start",
        finish: "finish",
        shortestPath: ["Start", "bla bla", "finish"]
    }
]

// test("should find shortest path given list of predefined data", () => {
//     testData.forEach((testDataObject) => {
//         const {start, finish, shortestPath} = testDataObject || {};
//         expect(getShortestPath(graph, start, finish)).toEqual(shortestPath);
//     });
// });

// test("should pass", () => {
//     expect(true).toEqual(true); //da
//     expect(!false).toEqual(true);//nu stim
//     expect(!!true).toEqual(true);//nu stim
//     expect(!'').toEqual(true);//nu stim
//     expect(!!{}).toEqual(true);//nu stim
// })

const testDataAdd = [
    {
        input: [1,2,3],
        result: 6
    },
    {
        input: [1,2,5,null, 'ab', NaN],
        result: 8
    },
    {
        input: [1],
        result: 1
    },
    {
        input: ['ab', null, '123'],
        result: 'ab123'
    }
]


/*function add(input) {
    let sum = 0
    for(let i = 0;i < input.length; i++){
        if (!(isNaN( input[i]) || input[i] === null )) {
           sum += input[i]
        } 
    }
    console.log(input);
    return sum;
}*/

function sumArray(input) {
    const sum = input.reduce((acumulator, item) => {
        return  (!(isNaN(item) || item === null )) ? acumulator+=item : acumulator
    })
    console.log(input);
    return sum;
}

test("should test input data", () => {
    testDataAdd.forEach(({input, result}) => {
        expect(sumArray(input)).toEqual(result);
    })
})

// JavaScript program to print DFS
      // traversal from a given given
      // graph
  
      // This class represents a
      // directed graph using adjacency
      // list representation

const DFS = [
    {
        input:[[0,1],[0,2], [1,2],[2,0],[2,3],[3,3]],
        result:{"Node": [[0, 1], [0, 2], [1, 2], [2, 0], [2, 3], [3, 3]], "adjectiv": [[]]}
    }
]

class Graph {
    //constructor
    constructor(node) {
        this.Node = node;
        this.adjectiv = new Array(node).fill([]);
    }

    // Function to Add an edge into the graph
    AddEdge(node, width) {
        this.adjectiv[node].push(width) // Add width to nodes list.
    }

    // A function used by DFS
    DFSUtil(node, visited){
        // Mark the current
        // node as visited and print it
        visited[node] = true; 
        document.write(node + " ");

        // Recur for all the
        // vertices adjacent to this
        // vertex
        for (const n of this.adjectiv[node]) {
            if (!visited[n]) this.DFSUtil(n, visited);
        }
    }
     // The function to do
     // DFS traversal. It uses recursive
    // DFSUtil()

DFSFunction(){
    // Mark all the vertices as not visited(set as
    var visited = new Array(this.Node).fill(false);
  
    // Call the recursive helper
    // function to print DFS
    // traversal starting from
    // all vertices one by one
    for (var i = 0; i < this.Node; ++i){
      if (visited[i] === false){
        this.DFSUtil(i, visited);
      }   
  }
}

}

test("should test input", () => {
    DFS.forEach(({input, result}) => {
        expect(new Graph(input)).toEqual(result);
    })
})