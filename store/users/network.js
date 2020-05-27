const users = require('./user.controller.js');

const router = require('express').Router();

// Create a new User
router.post('/', users.create);

// Retrieve all Users
router.get('/', users.findAll);

// Retrieve all published Users
router.get('/status', users.findAllStatus);

// Retrieve a single Users with id
router.get('/:id', users.findOne);

// Retrieve a single User with its email
router.post('/email', users.findOneEmail);

// Update a Users with id
router.put('/:id', users.update);

// Delete a Users with id
router.delete('/:id', users.delete);

// Create a new Users
router.delete('/', users.deleteAll);

module.exports = router;
