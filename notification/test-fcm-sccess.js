var fetch = require('node-fetch');
var util = require('util');

var API_KEY = ""; //FCMcredentials Key
var deliverData = {
  notification: {
    title: 'WeMo',
    body: 'notification test', //process.argv[2]
  },
  to : '' // user token

  // condition: "'AllUser' in topics", => 此為推播給所有用戶
}

console.log(JSON.stringify(deliverData));

fetch('https://fcm.googleapis.com/fcm/send', {
  method: 'POST',
  headers: {
    'Authorization': 'key='+API_KEY,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(deliverData),
  // credentials: 'include',
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(util.inspect(data));
  });

console.log('Sending...');