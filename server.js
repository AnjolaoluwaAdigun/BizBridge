const express = require('express');
const mongoose = require('mongoose');
const ejs=require('ejs'),
     path = require('path');


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));


// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/myapp').then(() => {
  console.log("Successfully connected to MongoDB.");
}).catch(err => {
  console.error("Connection error", err);
  process.exit();
});


// Routes
app.use('/',require('./routes/serviceRoutes'));
app.use('/',require('./routes/userRoutes'));

// Starting the server
app.listen(2000,()=>console.log("Server Started on port 2000"));


