var utils = require('./AWS/CLI/awscli').utils;
var EC2 = require('./AWS/EC2/ec2');
class Architecture {
  constructor (vpcName) {
    this.vpcName = vpcName
  }

  async getInstances() {
    let rawInstances = await utils.getInstances(this.vpcName);
    this.instances = rawInstances.map(entry => {
      return new EC2().buildInstance(entry)
    });
    return this;
  }

  async getSubnets() {
    let rawSubnets = await utils.getSubnets(this.vpcName);
  }
  async getArchitecture() {
    await this.getInstances();
    await this.getSubnets();
  }
}

module.exports = Architecture