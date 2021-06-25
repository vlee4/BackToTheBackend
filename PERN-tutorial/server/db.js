const { Pool } = require("pg");
//Pooling allows postgresql to  have a resuable group of clients that you can checkout, use & return instead of slowing down your app with a limited queue of different clients (which would slow down the app)

const pool = new Pool({
  user: process.env.PGUSER || "postgres",
  host: process.env.PGHOST || "localhost",
  port: process.env.PGPORT || 5432,
  database: process.env.PGDATABASE || "perntodo",
});

// const pool = new Pool();

module.exports = pool;

//REF: https://node-postgres.com/features/pooling
