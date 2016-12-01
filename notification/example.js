// var FCM = require('fcm-push');
//
// var serverKey = 'AIzaSyBOWAX2Rwr8WNAtKW-Q-UMyJ7Kw0JGH0Hs';
// var fcm = new FCM(serverKey);
//
// var message = {
//   to: '', // required fill with device token or topics
//   collapse_key: '0e5ca92ffab587c58b9abee6562f8950bf9b09fb0e5ca92ffab587c58b9abee6562f8950bf9b09fb',
//   data: {
//     your_custom_data_key: 'TEST'
//   },
//   notification: {
//     title: 'Title of your push notification',
//     body: 'Body of your push notification'
//   }
// };
//
// //callback style
// fcm.send(message, function(err, response){
//   if (err) {
//     console.log("Something has gone wrong!");
//   } else {
//     console.log("Successfully sent with response: ", response);
//   }
// });
//
// //promise style
// fcm.send(message)
//   .then(function(response){
//     console.log("Successfully sent with response: ", response);
//   })
//   .catch(function(err){
//     console.log("Something has gone wrong!");
//     console.error(err);
//   })


var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var firebase = require("firebase");
var request = require("request");

// Initialize the app with a service account, granting admin privileges
firebase.initializeApp({
  databaseURL: "https://suckwemo.firebaseio.com/",
  serviceAccount: "suckwemo-b53cfc13e32e.json",
});

console.log("Firebase initialization passed");

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = firebase.database();
var ref = db.ref("notification");

// This callback function is needed to detect changes in the number of attemps.
// Note that a proper exponential backoff algorithm would work much better,
// but just trying to send the notification 10 times is decent for testing / beta launch
ref.orderByChild("sent").equalTo(false).on("child_changed", function(snapshot) {
  console.log("Snapshot recieved (child_changed)");

  handleNotificationSnapshot(snapshot)
});

// This callback function is needed to detect additions to notification/ in the Firebase databse
ref.orderByChild("sent").equalTo(false).on("child_added", function(snapshot) {
  console.log("Snapshot recieved (child_added)");

  handleNotificationSnapshot(snapshot)
});

function handleNotificationSnapshot(snapshot) {
  if (snapshot.val() != null) {   // Make sure that the snapshot is not empty

    // Log the number of send attemps
    console.log("Number of attemps " + snapshot.val()["attempts"])

    // Double check that the notification has not been sent, and that the number of attemps is less than 10
    if (snapshot.val()["sent"] === false && snapshot.val()["attempts"] < 10) {

      console.log("Muts get notification ids");

      // Create a reference to the notification ids (tokens) in the Firebase database
      var userNotificationIDRef = db.ref("notification_ids/" + snapshot.val()["recipientUID"]);

      // Retrieve the notification ids
      userNotificationIDRef.once("value", function(notificationSnapshot) {

        if (notificationSnapshot.val() != null) { // Make sure that the snapshot is not empty

          console.log("Notification ids recieved");

          // Send the notification
          sendNotification(notificationSnapshot.val(), snapshot.val()["message"], snapshot.val()["key"], snapshot.val()["attempts"])
        }
        else {
          console.log("No notification ids registered");
        }
      });

    }
  }
}

// This is a function which sends notifications to multiple devices
function sendNotification(notificationID, message, key, attempts) {

  console.log("Sending notification");

  request(
    {
      method: 'POST',
      uri: 'https://fcm.googleapis.com/fcm/send',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'key=AIzaSyBOWAX2Rwr8WNAtKW-Q-UMyJ7Kw0JGH0Hs'
      },
      body: JSON.stringify({
        "registration_ids": ['AAAA6H8fs-w:APA91bGH62YzsJDwEzIxBKrG4tsNtqFkoph4IdoDFRWntWvoIzKZy92P0am2HdGRPwuAFUpRfXBv9uJKIZIsFHZFRRNe_iB14AVoabGvTBJCb1Rjn0s5fQnhqxi4BlAWfNNOL37z-h22'], // This is an aray of the users device tokens. Up to 1000 allowed by FCM
        "priority": "high", // Change this value for different behavior on devices
        "data" : {
          "body" : message,
          "title": "NAME OF APP",
          "sound": "default",
          "badge": 0
        }
      })
    },
    function (error, response, body) {
      if(response.statusCode == 200){

        console.log('Success')

        // Create a reference to the notification in the Firebase database
        var notificationRef = db.ref("notifications/" + key);

        // Set "sent" to true to avoid the notification being sent more than once
        notificationRef.child("sent").set(true);

        // Increment the "attempts"
        notificationRef.child("attempts").set(attempts+1);
      } else {
        console.log('error: '+ response.statusCode)

        // Create a reference to the notifications in the Firebase database
        var notificationRef = db.ref("notifications/" + key);

        // Increment the "attempts". Since "sent" is still false "child_changed" will be called
        notificationRef.child("attempts").set(attempts+1);
      }
    }
  )
}