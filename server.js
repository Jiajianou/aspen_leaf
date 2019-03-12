//reqired modules
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const request = require('request');


//app initialization
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get("/",function(req,res){

  request('/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  });


  res.render("index");
});

app.listen(3000, function(){
  console.log("The server is running");
});
