class EC2 {

  getTag(arrObj, key) {
    const result =  arrObj.filter(entry => {
      return entry.Key === key
    });

    console.log(result);
    return result;
  }

  getName(rawInstance) {
    const data = this.getTag(rawInstance.Tags,"Name");
    return data[0].Value;
  }

  getSecurityGroups(rawInstance) {
    return rawInstance.SecurityGroups.map(entry => entry.GroupId);
  }

  
  buildInstance(arg) {
    // console.log(JSON.stringify(rawInstance,null,2));
    const rawInstance = arg[0];
    this.subnet = rawInstance.SubnetId;
    this.SecurityGroups = this.getSecurityGroups(rawInstance);
    this.InstanceId = rawInstance.InstanceId;
    this.name = this.getName(rawInstance);
    return this;
    

  }

  
}

module.exports = EC2;