const { join } = require('node:path')

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: join(__dirname, 'dev.sqlite3'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: ':memory:',
    },
    migrations: {
      directory: join(__dirname, 'migrations'),
    },
    seeds: {
      directory: join(__dirname, 'seeds'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}


//https://docs.railway.app/develop/cli
// Railway.app
// npm i -g @railway/cli
// railway login
// (Open the browser? Yes - open link and varify in r.app)
// # Create a new project
// railway init

// add 

// In project settings
// In project settings 
//add Production in Environment 
//and NODE.ENV production to shared variables (dont forget to share)

//add variable in project
// DATABASE_URL ${{Postgres.DATABASE_URL}}



// site should deploy
// run railway run npm run knex migrate:rollback/latest/seed:run