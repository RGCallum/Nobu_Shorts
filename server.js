require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/index')
const io = require('socket.io')();
const path = require('path');

mongoose.connect(process.env.MONGODB_URI); 

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});
const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}) 

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/client/build/'));

app.use('/', routes)

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/client/build/index.html')
// })

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})


// const port = 8000;
// io.listen(port);
// console.log('socket io is listening on port ', port);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("We up in here on " + PORT);
})