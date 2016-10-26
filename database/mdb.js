const mongoose = require('mongoose')
const { nodeEnv } = require('../lib/util');
const mongoConfig = require('../config/mongo')[nodeEnv];

// Create the database connection
mongoose.connect(mongoConfig.url);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + mongoConfig.url);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// When the connection is open
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose