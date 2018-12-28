//reqired modules
const express = require('express');
const path = require('path');
const ejs = require('ejs');


//app initialization
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get("/",function(req,res){

  res.render("index");
});

app.listen(3000, function(){
  console.log("The server is running");
});
