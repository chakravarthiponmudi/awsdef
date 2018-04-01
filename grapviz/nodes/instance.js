var Node = require('../node');
class Instance extends Node {
  constructor() {
    super();
    this.name='';
    this.privateIpAddress='';
    this.securityGroups = '';
    this.publicprivateIpAddress = '';
  }

  createNode({
    name,
    privateIpAddress,
    securityGroups,
    publicprivateIpAddress}) {
      this.name = name;
      this.privateIpAddress=privateIpAddress;
      this.securityGroups = securityGroups;
      this.publicprivateIpAddress = publicprivateIpAddress;
      return this;
  }

  openNode() {
    return `"${this.name}" `;
  }

  addAttributes() {
    return 
      `[label=<<Table Border="0">
      <TR><TD><IMG SRC="resources/ec2.png"/></TD>
      </TR><TR>${this.privateIpAddress}</TR>
      </TABLE>> border=none]`
  }

  closeNode() {
    return ";";
  }

  toString() {
    let dotString = '';
    dotString += this.openNode();
    dotString += this.addAttributes();
    dotString += this.closeNode();
    return dotString;
  }
}

module.exports = Instance;