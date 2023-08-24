const express = require('express');
const formControllers = require('../controllers/formControllers');
const router = express.Router(); // Use Router from Express, not 'app'
const User = require('../models/user'); // Assuming you have a User model

// Define your routes using the router
router.get('/get-users', formControllers.getUsers);

router.post('/add-user', formControllers.addUser);
router.delete('/delete-user/:id', formControllers.deleteUser);

// ... other routes ...

module.exports = router; // Export the router
