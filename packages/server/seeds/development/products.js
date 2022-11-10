exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'PRODUCT', description: 'text' },
        { name: 'PRODUCT', description: 'text' },
        { name: 'PRODUCT', description: 'text' },
        { name: 'PRODUCT', description: 'text' },
        { name: 'PRODUCT', description: 'text' },
        { name: 'PRODUCT', description: 'text' },
      ]);
    });
};
