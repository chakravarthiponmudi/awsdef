var awsCli = require('./aws-command-executor.js');
var Options = awsCli.Options;
var Aws = awsCli.Aws;

var options = new Options(
	// "ASIAJ5EQUJINTZLSPW6A",
	// "/1Hu30uPXXGX+QyPHkxuKj8h+ycqRbgx/kQIiXJa"
);

var aws = new Aws(options);


async function getInstancesByVPC(vpcid) {
  const cmd = `ec2 describe-instances --filter "Name=vpc-id,Values=${vpcid}"`
  const data = await aws.command(cmd);
  return data.object.Reservations.map( entry => entry.Instances);
}

async function getInstancesBySubnet(subnetId) {
  const cmd = `ec2 describe-instances --filter "Name=subnet-id,Values=${subnetId}"`
  const data = await aws.command(cmd);
  return data.object.Reservations.map( entry => entry.Instances);
}

async function getSubnets(vpcid) {
  const cmd = `ec2 describe-subnets --filter "Name=vpc-id,Values=${vpcid}"`
  const data = await aws.command(cmd);
  return data.object.Subnets;
}

async function getSecurityGroupsByGroupIDs(groupIds) {
  const cmd = `ec2 describe-security-groups --group-ids ${groupIds.join(" ")}`
  const data = await aws.command(cmd);
  return data.object.SecurityGroups;
}

async function getSecurityGroupsByVPC(vpcid) {
  const cmd = `ec2 describe-security-groups --filter "Name=vpc-id,Values=${vpcid}"`
  const data = await aws.command(cmd);
  return data.object.SecurityGroups;
}


function getTag(arrObj, key) {
  const result =  arrObj.filter(entry => {
    return entry.Key === key
  });

  return result;
}

exports.aws=aws
exports.utils = {
  getInstancesByVPC: getInstancesByVPC,
  getInstancesBySubnet: getInstancesBySubnet,
  getSecurityGroupsByGroupIDs: getSecurityGroupsByGroupIDs,
  getSecurityGroupsByVPC: getSecurityGroupsByVPC,
  getSubnets: getSubnets,
  getTag: getTag

}