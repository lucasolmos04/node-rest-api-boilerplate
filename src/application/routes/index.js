const express = require('express');
const router = new express.Router();

const HelloWorldCtrl = new (require('../controllers/helloWorld.controller'))();
const usersController = new (require('../controllers/users.controller'))();

router
	.route('/hello-world')
	.get(HelloWorldCtrl.sayHi);

router
    .route('/users')
    .get(usersController.getUsers);

module.exports = router;
