const functions = require('firebase-functions');
const express = require('express');

const app = express();
app.get('/doodlis', (request, response) => {
  response.send('Hello, little Doodli!');
});


app.get('/dogs', (request, response) => {
  response.send('Hello, Dogs!');
});



/////////////////////////////////
//FIREBASE SPECIFIC STUFF
////////////////////////////////
exports.backEndApp = functions.https.onRequest(app);
