const { Pool } = require("pg");
//Pooling allows postgresql to  have a resuable group of clients that you can checkout, use & return instead of slowing down your app with a limited queue of different clients (which would slow down the app)

console.log("user", process.env.USER, "env", process.env);

const pool = new Pool({
  user: "postgres",
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

// const pool = new Pool();

module.exports = pool;

//REF: https://node-postgres.com/features/pooling
