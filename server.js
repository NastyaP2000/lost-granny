const express = require('express');
// const mongoose = require('mongoose');
//const dbConfig = require('./config').db
 
const app = express();
 
app.use(express.static(__dirname + '/static'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const db = mongoose
//   .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Successfully connect to MongoDB.");
//   })
//   .catch(err => {
//     console.error("Connection error", err);
//     process.exit();
//   })

  app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/static/index.html');
  });
  
  server = app.listen(3018, function () {
    console.log('server is running on port 3018')
  });