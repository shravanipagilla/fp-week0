const knex = require('../../config/db');

const getProducts = async () => {
  return knex('products').select('*');
};

// const createProduct = async (body) => {};

module.exports = {
  getProducts,
  // createProduct
};
