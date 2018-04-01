var Graph = require('./grapviz/graph')
var VPC = require('./grapviz/graphs/vpc');
var Node = require('./grapviz/node');
var Instance = require('./grapviz/nodes/instance');
var Edge = require('./grapviz/edge');


class GraphFactory {

  constructor () {
    this.vpc = '';
    this.securityGroups = '';
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

  parseVPC({
    name,
    vpc
  }) {
    this.vpc = new VPC().createVPC({
      name,
      vpc
    });

  }

  toString() {
    return this.vpc.toString();
  }

  parseSubNets() {

  }

}

module.exports = GraphFactory;