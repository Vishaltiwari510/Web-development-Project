Wikipedia-API is a RESTFUL API. Tech used in making this restful API is - Javascript, Nodejs, Expressjs, MongoDB.

<b>1.Create New Directory called Wikipedia-API</b>

cd Desktop
mkdir wikipedia-API
cd Wikipedia-API

<b>2.Initialise NPM and install body-parser, mongoose, ejs, and Express</b>

npm init -y
npm i body-parser mongoose ejs express

<b>3.Create a new file called App.js</b>
touch app.js
atom .

<b>4.Inside app.js add server code (Write/copy)</b>
which include following dependency-
(i)  express
(ii) body-parser
(iii) ejs
(iv) mongoose

starting server code

//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});


<b>5.Setup MongoDB: </b>
(i) Create a database inside Robo3t wirh name wiki-DB
(ii) connect mongoose in app.js
(iii) Create an schema for your database, Document has 2 fields: title and content.
(iv) Create a model for database




