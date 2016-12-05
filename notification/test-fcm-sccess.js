var fetch = require('node-fetch');
var util = require('util');

var deliverData = {
  notification: {
    title: 'WTF with FCM....',
    body: 'Damn!!!!',
  },

  // This is raw token from device but WTF sender is doesn't match !!!!!
  // cbfjBBu-e80:APA91bGH62YzsJDwEzIxBKrG4tsNtqFkoph4IdoDFRWntWvoIzKZy92P0am2HdGRPwuAFUpRfXBv9uJKIZIsFHZFRRNe_iB14AVoabGvTBJCb1Rjn0s5fQnhqxi4BlAWfNNOL37z-h22

  // registration_ids: [AAAA6H8fs-w:APA91bGH62YzsJDwEzIxBKrG4tsNtqFkoph4IdoDFRWntWvoIzKZy92P0am2HdGRPwuAFUpRfXBv9uJKIZIsFHZFRRNe_iB14AVoabGvTBJCb1Rjn0s5fQnhqxi4BlAWfNNOL37z-h22']
  condition: "'AllUser' in topics",
}

console.log(JSON.stringify(deliverData));

fetch('https://fcm.googleapis.com/fcm/send', {
  method: 'POST',
  headers: {
    Authorization: 'key=AAAA6H8fs-w:APA91bELFf3XFMDPmMigsZT_vfsFfCWzRG13CrKudX6hLkDDdPNsT4FPfOEImGM19RCFYVELyUO9ySnS9XI8snBM7NbE7s_cMsWoijY1TNbeJ_PmLNTAVmf8x45IYNhBLCxWJkE-Mv2pifkgLKsSEV9oj5UNL8tGxA',
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