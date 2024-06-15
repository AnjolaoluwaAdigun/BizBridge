const express = require('express');
const router = express.Router();
const {landingPage,getAllUsers, createUser, loginUser} = require('../controllers/userController');

router.get('/',landingPage);
router.get('/user', getAllUsers);
router.post('/register',createUser);
router.get('/login',loginUser);
router.post('/login',loginUser);

module.exports = router;
