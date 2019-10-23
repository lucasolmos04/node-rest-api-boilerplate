const express = require('express');
const router = new express.Router();

const HelloWorldCtrl = new (require('../controllers/helloWorld.controller'))();
const usersController = require('../controllers/users.controller');

router
	.route('/hello-world')
	.get(HelloWorldCtrl.sayHi);

module.exports = router;
