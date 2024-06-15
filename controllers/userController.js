const mongoose= require('mongoose');
const User = require('../models/user');


const landingPage= (req,res)=>{
  res.render('index');
}


// Get all users
const getAllUsers = (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
};

// Create a new user
const createUser = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const user = new User({
    jobTitle: req.body.jobTitle,
    staffStrength: req.body.staffStrength,
    contactName: req.body.contactName,
    cacStatus: req.body.cacStatus,
    contactPhoneNumber: req.body.contactPhoneNumber,
    contactEmail: req.body.contactEmail,
    businessName: req.body.businessName,
    contactAddress: req.body.contactAddress,
    city: req.body.city,
    websiteURL: req.body.websiteURL,
    username: req.body.username,
    password: req.body.password
  });

  user.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user."
      });
    });
};

// Login a user
const login=(req,res)=>{
  res.render("login")
}
const loginUser = (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send({
      message: "Username and password can not be empty!"
    });
  }

  User.findOne({ username: req.body.username, password: req.body.password })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found."
        });
      }
      res.send(user);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving user."
      });
    });
};
module.exports= ({landingPage,getAllUsers,createUser,loginUser})