const express = require('express');
const router = new express.Router();

const UserCtrl = new (require('../controllers/users.controller'))();

router
    .route('/users')
    .get(UserCtrl.getUsers);

module.exports = router;
