const express = require('express');
const router = express.Router();
const Product = require('../controllers/product');

router.post('/',Product.addProduct);

router.get('/', Product.getProduct);

router.get('/:id', Product.getProductById);

router.put('/:id', Product.updateProduct);

router.delete('/:id', Product.removeProduct);


module.exports = router;