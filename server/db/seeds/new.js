/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = (knex) => {
  return knex('new').insert([
    {id: 1,  category:'data', notes:'datadata'},
    {id: 2,  category:'data', notes:'datadata'},
    {id: 3,  category:'data', notes:'datadata'},
  ]);
};

