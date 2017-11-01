'use strict';

module.exports.getData = (event, context, callback) => {
  const AWS = require('aws-sdk');
  const s3 = new AWS.S3();
  const params = { Bucket: 'photo-bucket-tmp-prjct'};

  let dataa = 'test';


  s3.listObjects(params, function(err,data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      console.log(data);
    }
  });


console.log(`This is hard: ${dataa}`)
  //loop through objects to get key
  //console.log(storeData.Contents[1].Key)

  // setting a CORS header:
  // requestVar.setRequestHeader('Access-Control-Alow-Origin', '*')

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
