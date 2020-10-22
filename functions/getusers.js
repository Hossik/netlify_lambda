const axios = require('axios');

exports.handler = function(event, contex, callback) {
  const API_URL = 'https://api.github.com/users';
  const API_CLIENT_ID = '2fcf9ff37aaa320bc327';
  const API_CLIENT_SECRET = 'af1a3c5176e54838f403d81493b70f0544119295';

  const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

  // Send user response
  const send = body => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requeted-With, Content-Type, Accept'
      },
      body: JSON.stringify(body)
    });
  }

  // Perform API callback
  const getUsers = () => {
    axios.get(URL)
    .then(res => send(res.data))
    .catch(err => send(err))
  }

  //Make sure method is GET

  if(event.httpMethod == 'GET') {
    //RUN
    getUsers();
  }
}