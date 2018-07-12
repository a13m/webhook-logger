/**
 * Background Cloud Function to be triggered by Cloud Storage.
 *
 * @param {object} event The Cloud Functions event.
 * @param {function} callback The callback function.
 */

'use strict';
const gcloud = require('google-cloud');

exports.whLog = (req, res) => {
  if (req.body === undefined) {
    console.log(req);
    res.status(400).send('No message defined!');
  } else {
    console.log(req.body);
    res.status(200).end();
  }
};

