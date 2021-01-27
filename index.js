// Install express server
const express = require('express');
const path = require('path');

// Initialize express app
const app = express();
const router = express.Router();

// Serve backend routes
app.get('/', function(req, res) {
    res.status(200).send('Hello World API')
});

// Specify port
const port = process.env.PORT || 5000;

// Start the app
app.listen(port, () => {
  console.log('App started on port: ' + port);
});


// const app = require('express')();
// // const server = require('http').createServer(app);
// // const io = require('socket.io')(server);
// // io.on('connection', () => { 
// //   console.log("EPAAAA");
// // });

// var server = require('http').createServer().on('request', function (req, res) {
//   res.writeHead(200);
//   res.end('Welcome to socket.io.');
// }).listen(3000);
// var io = require('socket.io').listen(server);

// io.on('connection', () => { 
//   console.log("EPAAAA");
// });


// var io2 = require('socket.io-client');

// var socket = io2.connect("http://[::1]:3000", {
//   query: 'token=eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGIxZTEzMjBhMGMyOTM5MDA1MjUzMDUiLCJpZHBhZ2UiOiI1Y2RjMmE1Yzc1NzEyMzAwMjRlNDk3ZjEifQ.7y5LtWXc5Rxbg6Z7x6_iNtWAEuGnKdJc7qnXnarYh7U&whatsapp=true',
//   // reconnection: true,
//   // reconnectionDelay: 1000,
//   // reconnectionDelayMax: 30000,
//   // reconnectionAttempts: 99999,
//   transports: ['websocket']
// });


// socket.on('connect', function () {
//   console.log("CONECTADO 232123");

// });

// socket.on('error', (e) => {
//   console.log("E", e); // not displayed
// });

// socket.on('connect_error', (e) => {
//   console.log("E", e); // not displayed
// });