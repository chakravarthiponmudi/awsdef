var Node = require('./node');
var Edge = require('./edge');

class Graph {
    constructor () {
        this.nodes = [];
        this.edges = [];
        this.subGraphs = [];
        this.attributes = null;
    }

    setAttributes() {

    }

    openGraph() {

    }

    getGraphAttributes() {

    }

    getSubgraphs() {

    }

    getNodes() {

    }

    getEdges() {

    }

    closeGraph() {

    }
    
    toString() {
        let dotString = '';
        dotString += this.openGraph();
        dotString += this.getGraphAttributes();
        dotString += this.getSubgraphs();
        dotString += this.getNodes();
        dotString += this.getEdges();
        dotString += this.closeGraph();
    }

}

module.exports = Graph;