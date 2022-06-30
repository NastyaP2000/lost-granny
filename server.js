const express = require('express');
const app = express();
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('static'));
  
  server = app.listen(3018, function () {
    console.log('server is running on port 3018')
  });