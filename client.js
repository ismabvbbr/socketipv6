var io2 = require('socket.io-client');

var socket = io2.connect("http://localhost:5000", {
  query: 'token=eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGIxZTEzMjBhMGMyOTM5MDA1MjUzMDUiLCJpZHBhZ2UiOiI1Y2RjMmE1Yzc1NzEyMzAwMjRlNDk3ZjEifQ.7y5LtWXc5Rxbg6Z7x6_iNtWAEuGnKdJc7qnXnarYh7U&whatsapp=true',
  // reconnection: true,
  // reconnectionDelay: 1000,
  // reconnectionDelayMax: 30000,
  // reconnectionAttempts: 99999,
  transports: ['websocket']
});


socket.on('connect', function () {
  console.log("CONECTADO 232123");

});

socket.on('error', (e) => {
  console.log("E", e); // not displayed
});

socket.on('connect_error', (e) => {
  console.log("E", e); // not displayed
});

