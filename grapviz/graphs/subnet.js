var Graph = require('../graph');
var graphRef = require('../refMap');
var Instance = require('../nodes/instance');


class Subnet extends Graph {
  constructor() {
    super();
    this.subnetLogicalName= null;
    this.subnetName= null;
    this.cidrBlock= null;
  }

  setSubnetAttributes({
    name,
    subnetLogicalName,
    subnetName,
    cidrBlock
  }) {
    this.createGraph({name});
    this.subnetLogicalName= subnetLogicalName;
    this.subnetName= subnetName;
    this.cidrBlock= cidrBlock;
  }

  getCidrBlock() {
    return this.cidrBlock;
  }

  openGraph () {
    return `subgraph "cluster_${this.name}" {\n`
  }

  getSubnetLogicalName() {
    return this.subnetLogicalName;
  }

  getGraphAttributes() {
    return `label=<<TABLE BORDER="0">
    <TR><TD>${this.getName()}</TD></TR>
    <TR><TD>${this.getCidrBlock()}</TD></TR>
  <TR><TD>${this.getSubnetLogicalName()}</TD></TR>
  </TABLE>>\n
  "${this.getName()}" [label="",shape=none];
  `;
  }

  createSubnet({
    id,
    subnetLogicalName,
    subnetName,
    cidrBlock,
    instances
  }) {
    
    this.setSubnetAttributes({
      name:id,
      subnetLogicalName,
      subnetName,
      cidrBlock
    });
    if (instances) {
      for (let instance of Object.keys(instances)) {
        let nodeInstance = new Instance().createNode({
          name: instance,
          ...instances[instance]
        });
  
        if (!graphRef.isNodeExists(nodeInstance)) {
          this.addNode({node: nodeInstance});
        }
      }
    }
   

    return this;

  }

  addSubnet(args) {
    let subnet = new Subnet().createSubnet(args);
    if (!graphRef.isSubnetExists({subnet})) {
      this.addSubgraph(subnet);
      return;
    }
    console.warn("This subnet already exists", subnet);
    return;
  }
}

module.exports = Subnet;