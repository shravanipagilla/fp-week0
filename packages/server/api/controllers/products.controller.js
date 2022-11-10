const knex = require('../../config/db');

const getProducts = async () => {
  return knex('products').select('*');
};

module.exports = {
  getProducts,
};
