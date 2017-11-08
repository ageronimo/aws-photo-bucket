const buildHTML = (response) => {
  $('.picture-container').append('<h3>You asked for it...<h3>');
  response.map( link => {
    $('.picture-container').append(`
      <div class="picture">
        <img src="https://s3-us-west-2.amazonaws.com/photo-bucket-tmp-prjct/${link}"/>
      </div>`);
  });
};

const makeRequest = () => {
  $.ajax({
    url: 'https://o5msejff8c.execute-api.us-east-1.amazonaws.com/dev/users/photos',
    type: 'GET',
    success: (data) => {
      console.log('Your request succeeded!');
      buildHTML(data.message);
    },
    error: () => console.log('ERROR: Request failed!')
  })
}

$('#clickMe').click(() => {
  makeRequest();
});