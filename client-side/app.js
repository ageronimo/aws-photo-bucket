console.log("jkdsafj sdlfjasdlk;fjsdlf")

// link to request: http://photo-bucket-tmp-prjct.s3-us-west-2.amazon.aws.com/


const makeRequest = () => {
  $.ajax({
    url: 'http://photo-bucket-tmp-prjct.s3-us-west-2.amazon.aws.com/',
    type: 'GET',
    success: console.log('yay!'),
    error: console.log('boo!')
  })
}

$('#clickMe').click(() => {
  makeRequest();
});
/*const buildHTML = () => {
  // insert code here
};*/