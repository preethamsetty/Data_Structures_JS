class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        // Uncomment the next line for an undirected graph
        // this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        }
        // Uncomment the next line for an undirected graph
        // if (this.adjacencyList[vertex2]) {
        //     this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        // }
    }

    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            // Remove the vertex from all edges
            for (const v of this.adjacencyList[vertex]) {
                this.removeEdge(v, vertex);
            }
            delete this.adjacencyList[vertex];
        }
    }

    dfs(startVertex) {
        const visited = new Set();
        this._dfsRecursive(startVertex, visited);
        console.log();
    }

    _dfsRecursive(vertex, visited) {
        if (!vertex || visited.has(vertex)) return;
        visited.add(vertex);
        process.stdout.write(`${vertex} `);

        for (const neighbor of this.adjacencyList[vertex]) {
            this._dfsRecursive(neighbor, visited);
        }
    }

    bfs(startVertex) {
        const visited = new Set();
        const queue = [startVertex];
        visited.add(startVertex);

        while (queue.length) {
            const vertex = queue.shift();
            process.stdout.write(`${vertex} `);

            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        console.log();
    }

    printGraph() {
        for (const vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
        }
    }
}

// Menu-driven program
const graph = new Graph();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log('\nMenu:');
    console.log('1. Add Vertex');
    console.log('2. Add Edge');
    console.log('3. Remove Vertex');
    console.log('4. Remove Edge');
    console.log('5. DFS Traversal');
    console.log('6. BFS Traversal');
    console.log('7. Print Graph');
    console.log('8. Exit');
}

function promptUser() {
    menu();
    readline.question('Select an option: ', (option) => {
        switch (option) {
            case '1':
                readline.question('Enter vertex name: ', (vertex) => {
                    graph.addVertex(vertex);
                    console.log(`Vertex ${vertex} added.`);
                    promptUser();
                });
                break;
            case '2':
                readline.question('Enter first vertex: ', (vertex1) => {
                    readline.question('Enter second vertex: ', (vertex2) => {
                        graph.addEdge(vertex1, vertex2);
                        console.log(`Edge from ${vertex1} to ${vertex2} added.`);
                        promptUser();
                    });
                });
                break;
            case '3':
                readline.question('Enter vertex name to remove: ', (vertex) => {
                    graph.removeVertex(vertex);
                    console.log(`Vertex ${vertex} removed.`);
                    promptUser();
                });
                break;
            case '4':
                readline.question('Enter first vertex: ', (vertex1) => {
                    readline.question('Enter second vertex: ', (vertex2) => {
                        graph.removeEdge(vertex1, vertex2);
                        console.log(`Edge from ${vertex1} to ${vertex2} removed.`);
                        promptUser();
                    });
                });
                break;
            case '5':
                readline.question('Enter starting vertex for DFS: ', (vertex) => {
                    console.log('DFS Traversal:');
                    graph.dfs(vertex);
                    promptUser();
                });
                break;
            case '6':
                readline.question('Enter starting vertex for BFS: ', (vertex) => {
                    console.log('BFS Traversal:');
                    graph.bfs(vertex);
                    promptUser();
                });
                break;
            case '7':
                console.log('Graph:');
                graph.printGraph();
                promptUser();
                break;
            case '8':
                console.log('Exiting...');
                readline.close();
                break;
            default:
                console.log('Invalid option, please try again.');
                promptUser();
                break;
        }
    });
}

// Start the program
promptUser();
