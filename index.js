var aws = require('./AWS/CLI/awscli').aws;
var Architecture = require('./architecture.js');

// aws.command('ec2 describe-instances --filter "Name=vpc-id,Values=vpc-4721f93c"').then(function (data) {
//   console.log('data = ', JSON.stringify(data.object,null,2)); 
// }).catch(err => console.log(err));


async function main () {
  try {
    const archObject = new Architecture("vpc-4721f93c");
    // const instances = await getInstances("vpc-4721f93c");
    await archObject.getArchitecture();
    // console.log(Object.keys(data.object.Reservations))

    console.log(JSON.stringify(archObject,null,2));
  }
  catch (err) {
    console.log(err);
  }
}


main();
