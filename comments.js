// create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let comments = require('./comments.json');

const COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,


    //add a function to calculate the relation of the argentinian peso vs usd dollar
    //and save it in the variable "relation" to be used in the response
    relation: function (){
      let usd = req.body.usd;
      let arg = req.body.arg;
      let relation = arg / usd;
      return relation;
    }(),

    ...req.body,
  };

