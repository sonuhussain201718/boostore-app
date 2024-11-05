// config/db.js
const { Client } = require('pg');
require('dotenv').config(); 

const client = new Client({
  user: process.env.DB_USER,        
  host: process.env.DB_HOST,         
  database: process.env.DB_NAME,    
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Connect to the database
client.connect()
  .then(() => console.log('Connected to the PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;
