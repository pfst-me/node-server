// routes/userRoutes.js
const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');
const { login } = require('../controllers/loginController');
const { dashboard } = require('../controllers/dashboardController');

const router = express.Router();

// Route to create a new user
router.post('/users', createUser);

// Route to get all users
router.get('/users', getUsers);

// client project
router.post('/login', login);
router.get('/dashboard', dashboard);


module.exports = router;
