const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const productsController = require('../controllers/products.controller');

// add SWAGGER documentation
/**
 * @swagger
 * /products:
 *  get:
 *    tags:
 *    - products
 *    summary: Get all products
 *    description:
 *      Will return all products.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  productsController
    .getProducts()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /products:
 *  post:
 *    tags:
 *    - products
 *    summary: Create a product
 *    description:
 *      Will create a product.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: product
 *        description: The product to create.
 *        schema:
 *          type: object
 *          required:
 *            - name:
 *            - description:
 *          properties:
 *            name:
 *              type: string
 *            description:
 *              type: string
 *    responses:
 *      201:
 *        description: product created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  productsController
    .createProduct(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});
module.exports = router;
