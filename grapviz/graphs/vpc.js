var Graph = require('../graph');
var Subnet = require('./subnet');
var graphRef = require('../refMap');

class VPC extends Graph {
  constructor() {
    super();
  }

  setVPCAttributes({name}) {
    this.createGraph({name});
  }

  addSubnet(args) {
    const {id,
      subnetLogicalName,
      subnetName,
      cidrBlock,
      instances} = args;
    let subnet = new Subnet().createSubnet({
      id,
      subnetLogicalName,
      subnetName,
      cidrBlock,
      instances
    });
    if (!graphRef.isSubnetExists({subnet})) {
      this.addSubgraph({graph:subnet});
      return this;
    }
    console.warn("This subnet already created", subnet);
    return;
  }

  getSubnets(vpc) {
    return Object.keys(vpc);
  }

  createVPC({name,vpc}) {
    this.setVPCAttributes({name});
    this.getSubnets(vpc).forEach((id) => {
      let subnetObject = vpc[id];
      this.addSubnet({
        id,
        ...subnetObject
      });
    });
    return this;
  }

  closeGraph() {
    return `}\n`;
}


}

module.exports = VPC;