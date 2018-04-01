var Graph = require('./grapviz/graph')
class GraphFactory {

  constructor () {
    this.graph = new Graph();
  }

  addGraphAttributes() {
    let g = this.graph;
    g.setAttributes();
  }

  createNode() {

  }

  linkNode() {

  }

  createCluster() {

  }

  createSubgraph() {

  }

  addNodeTo() {

  }

  writeDot() {

  }

}

module.exports = DrawGraph;