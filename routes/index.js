const express = require('express');

const auth = require('./auth');

const fileUpload = require('./fileUpload');

const product = require('./product');

const users = require('./users')

const router = express.Router();

router.use('/auth', auth);   // Endpoint for Authentication.

router.use('/fileUpload',fileUpload);  // Endpoint for Users.

router.use('/product', product);  // Endpoint for Customers.

router.use('/user', users);  // Endpoint for Category.


module.exports = router;
