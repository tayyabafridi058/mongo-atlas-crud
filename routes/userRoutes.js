const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CRUD Routes
router.get('/', userController.getAllUsers);         // Read All
router.post('/', userController.createUser);         // Create
router.get('/:id', userController.getUserById);      // Read One by ID
router.post('/edit/:id', userController.updateUser); // Update
router.post('/delete/:id', userController.deleteUser); // Delete

module.exports = router;
