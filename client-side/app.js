const buildHTML = (response) => {
  $('body').append('<h3>Here are your pictures:<h3>');
  console.log(`buildHTML is building with: ${response}`)
  response.map( link => {
    $('body').append(`
      <div class="picture">
        <img src="https://s3-us-west-2.amazonaws.com/photo-bucket-tmp-prjct/${link}"/>
      </div>
    `);
  });
};

const makeRequest = () => {
  $.ajax({
    url: 'https://o5msejff8c.execute-api.us-east-1.amazonaws.com/dev/users/photos',
    type: 'GET',
    success: (data) => {
      console.log('Your request succeeded!');
      console.log(`This is your data: ${data.message}`);
      buildHTML(data.message);
    },
    error: () => console.log('ERROR: Request failed!')
  })
}

$('#clickMe').click(() => {
  makeRequest();
});
