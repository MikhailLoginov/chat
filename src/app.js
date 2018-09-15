const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const comments = require('../data/comments.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

app.get('/test', (req,res) => {
  res.send('Ping-pong!');
  console.log('test!');
})


app.get('/comments', (req, res) => {
  console.log('/comments get response!')
  res.send({body: comments});
});

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('ok');
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));