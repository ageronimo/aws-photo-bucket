'use strict';

module.exports.request = (event, context, callback) => {
  const AWS = require('aws-sdk');
  const s3 = new AWS.S3();
  const params = { Bucket: 'photo-bucket-tmp-prjct'};

  s3.listObjects(params, function(err,data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      console.log(data)
    }
  })

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
