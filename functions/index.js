const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendNotif = functions.https.onRequest((req, res) => {
    // The topic name can be optionally prefixed with "/topics/".
    var topic = 'rekom3bln';

    // See documentation on defining a message payload.
    const payload = {
        notification: {
          title: 'Vaksin',
          body: `Kami merekomendasikan hewan anda untuk di vaksin`,
        }
      };

    // Send a message to devices subscribed to the provided topic.
    // admin.messaging().sendToTopic(topic,message)
    return admin.messaging().sendToTopic(topic,payload)
        .then((response) => {
            // Response is a message ID string.
            return res.send("YEEEE");
        })
        .catch((error) => {
            return res.send("NOOOOO: "+error);
        });
});