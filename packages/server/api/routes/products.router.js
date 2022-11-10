const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const productsController = require('../controllers/products.controller');

// add SWAGGER documentation
router.get('/', (req, res, next) => {
  productsController
    .getProducts()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
