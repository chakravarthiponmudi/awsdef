var awsCli = require('./aws-command-executor.js');
var Options = awsCli.Options;
var Aws = awsCli.Aws;

var options = new Options(
	// "ASIAJ5EQUJINTZLSPW6A",
	// "/1Hu30uPXXGX+QyPHkxuKj8h+ycqRbgx/kQIiXJa"
);

var aws = new Aws(options);


async function getInstances(vpcid) {
  const cmd = `ec2 describe-instances --filter "Name=vpc-id,Values=${vpcid}"`
  const data = await aws.command(cmd);
  return data.object.Reservations.map( entry => entry.Instances);
}

async function getSubnets(vpcid) {
  const cmd = `ec2 describe-subnets --filter "Name=vpc-id,Values=${vpcid}"`
  const data = await aws.command(cmd);
  console.log(JSON.stringify(data.object.Subnets,null,2));
  return data;
  // return data.object.Reservations.map( entry => entry.Instances);
}


exports.aws=aws
exports.utils = {
  getInstances: getInstances,
  getSubnets: getSubnets
}