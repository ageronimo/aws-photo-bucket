'use strict';

module.exports.angelaPhotos = (event, context, callback) => {
  const AWS = require('aws-sdk');
  const s3 = new AWS.S3();
  const params = { Bucket: 'photo-bucket-tmp-prjct'};

  var picKeys = [];

  s3.listObjects(params, function(err,data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      data.Contents.map(arr => picKeys.push(arr.Key))
      console.log(picKeys);

    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        message: picKeys,
      }),
    };

  callback(null, response);
    }
  
  });

};