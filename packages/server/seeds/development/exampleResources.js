// TODO: This is a sample seed file for demonstration. Remove before adding real ones.

exports.seed = function (knex) {
  return knex('exampleResources')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('exampleResources').insert([
        {
          title: 'abc',
        },
        {
          title: 'def',
        },
      ]);
    });
};
