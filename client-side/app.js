

const makeRequest = () => {
  $.ajax({
    url: 'http://photo-bucket-tmp-prjct.s3-us-west-2.amazon.aws.com/',
    type: 'GET',
    success: console.log('yay!'),
    error: console.log('boo!')
  })
// YOU ARE ACTUALLY TRYING TO LINK TO YOUR OWN LAMbDA THAT ALREADY HAS THE DATA

}

$('#clickMe').click(() => {
  makeRequest();
});

/*const buildHTML = () => {
  // insert code here
};*/