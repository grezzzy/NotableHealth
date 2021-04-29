const { Pool } = require('pg');

const pool = new Pool ({
  user: 'gabriel.g',
  host: 'localhost',
  database: 'notable',
  password: '',
  port: 5432
});

pool.on('connect', () => {
  console.log('Connected to database');
});

module.exports = pool;