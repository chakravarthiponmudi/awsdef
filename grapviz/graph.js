var Node = require('./node');
var Edge = require('./edge');

class Graph {
    constructor () {
        this.name = '';
        this.nodes = [];
        this.edges = [];
        this.subGraphs = [];
        this.attributes = null;
    }

    getName() {
        return this.name;
    }
    createGraph({name}) {
        this.name = name;
    }

    setAttributes() {

    }

    openGraph() {
        return `digraph "${this.name}" {\n`;
    }

    getGraphAttributes() {
        return `label="${this.name}";\n`;
    }

    printElement(elems) {
        let dotString='';
        elems.forEach(elem=> {
            dotString += elem.toString();
        });
        return dotString + `\n`;
    }
    getSubgraphs() {
        return this.printElement(this.subGraphs);
    }

    getNodes() {
       return this.printElement(this.nodes);
    }

    getEdges() {
        return this.printElement(this.edges);
    }

    closeGraph() {
        return `};\n`;
    }

    addSubgraph({graph}) {
        this.subGraphs.push(graph);
    }

    addNode({node}) {
        this.nodes.push(node);
    }

    addEdge({edge}) {
        this.edges.push(edge);
    }

    toString() {
        let dotString = '';
        dotString += this.openGraph();
        dotString += this.getGraphAttributes();
        dotString += this.getSubgraphs();
        dotString += this.getNodes();
        dotString += this.getEdges();
        dotString += this.closeGraph();
        return dotString;
    }

}

module.exports = Graph;