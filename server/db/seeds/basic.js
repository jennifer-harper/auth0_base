/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = (knex) => {
  return knex('basic').insert([
    {id: 1,  category:'x', notes:'x'},
  ]);
};

