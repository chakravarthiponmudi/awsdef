class RefMap{
  constructor() {
    this.nodes = {};
    this.subGraphs = {};
    this.edges = {};
  }

  isSubnetExists(subnet) {
    if (this.subGraphs[subnet.getName]) {
      return true;
    }
    return false;
  }

  isNodeExists(node) {
    if (this.nodes[node.getName()]) {
      return true;
    }
    return false;
  }
  
  addNode({node}) {
    this.nodes[node.getName()] = node;
  }
}

let graphRef = new RefMap();

module.exports = graphRef;