var fetch = require('node-fetch');
var util = require('util');

var deliverData = {
  notification: {
    title: 'WTF with FCM....',
    body: 'Damn!!!!',
  },

  // This is raw token from device but WTF sender is doesn't match !!!!!
  //

  // registration_ids: [']
  condition: "'AllUser' in topics",
}

console.log(JSON.stringify(deliverData));

fetch('https://fcm.googleapis.com/fcm/send', {
  method: 'POST',
  headers: {
    Authorization: 'key=',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(deliverData),
  credentials: 'include',
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(util.inspect(data));
  });

console.log('Sending...');