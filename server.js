'use strict'

//DEPENDENCIES
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//INSTANCES
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var Comment = require('./model/comments');

//PORT LISTENER
var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://localhost/MERN')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
