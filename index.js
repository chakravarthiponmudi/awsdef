var aws = require('./AWS/CLI/awscli').aws;
var utils = require('./AWS/CLI/awscli').utils;


// aws.command('ec2 describe-instances --filter "Name=vpc-id,Values=vpc-4721f93c"').then(function (data) {
//   console.log('data = ', JSON.stringify(data.object,null,2)); 
// }).catch(err => console.log(err));

function populateSubnets(vpc,subnets) {
  subnets.forEach(subnet => { 
    const subnetId = subnet.SubnetId;
    const subnetLogicalName = utils.getTag(subnet.Tags,'aws:cloudformation:logical-id')[0].Value;
    const subnetName = utils.getTag(subnet.Tags,'Name')[0].Value;
    const CidrBlock = subnet.CidrBlock;
    vpc[subnetId] = {
      subnetLogicalName,
      subnetName,
      CidrBlock
    }
  });

  return vpc;
}

function processInbound(ipPermission) {
    const type = ipPermission.IpProtocol == "-1" ? "ALL": ipPermission.IpProtocol;
    const toPort = ipPermission.IpProtocol == "-1" ? "": ipPermission.ToPort;
    const sGroups = ipPermission.UserIdGroupPairs.map(x => x.GroupId);
    const ips = ipPermission.IpRanges.map(x => x.CidrIp);
    return {
      type,
      toPort,
      sGroups,
      ips
    };
}

async function getSecurityGroupsDetails(securityGroupIds) {
    const securityGroups = await utils.getSecurityGroupsByGroupIDs(securityGroupIds);
    const result = {};
    for (let sGroup of securityGroups) {
        let inbound = [];
        sGroup.IpPermissions.forEach((entry) => {
          inbound.push(processInbound(entry));
        }); 
        
        result[sGroup.GroupId] = {
          desciption: sGroup.Description,
          inbound
        }
    }
    return result;
}

async function populateInstances(vpc, subnetId, instances) {
  if (instances.length > 0) {
    vpc[subnetId].instances = {};
    // await Promise.all(actualInstances.map(async (instance) => {
    for (let temp of instances) {
      const instance = temp[0];
      const instanceId = instance.InstanceId;
      const sGroups = instance.SecurityGroups.map(entry => entry.GroupId);
      const securityGroups = await getSecurityGroupsDetails(sGroups);
      vpc[subnetId].instances[instanceId] = {
        privateIpAddress: instance.PrivateIpAddress,
        // tags: instance.Tags,
        securityGroups
      };
    };
  }
  else {
    vpc[subnetId].instances = null;
  }
}

async function main () {
  const vpcid = "vpc-4721f93c";
  const VPC = {};
  try {
    const subnets = await utils.getSubnets(vpcid);
    populateSubnets(VPC,subnets);

    //Now that we have subnets,, lets get all the instances in each subnet
    const subnetIds = Object.keys(VPC);

    await Promise.all(subnetIds.map(async (subnetId) => {
      const instances = await utils.getInstancesBySubnet(subnetId);
      await populateInstances(VPC,subnetId,instances);
    }))
    // for ( let subnetId of subnetIds) {
      
    // }

    console.log(JSON.stringify(VPC,null,2));

  }
  catch (err) {
    console.log(err);
  }
}


main();
