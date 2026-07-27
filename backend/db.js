const { Pool } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config();

// PostgreSQL connection pool
// Uses DATABASE_URL for Render production, or standard env vars for local dev.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function initDB() {
  const client = await pool.connect();
  
  try {
    // Create messages table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      )
    `);

    // Seed default admin if no users exist
    const userCount = await client.query('SELECT COUNT(*) as count FROM users');
    if (parseInt(userCount.rows[0].count) === 0) {
      const defaultEmail = process.env.ADMIN_EMAIL || 'admin@growtech.com';
      const defaultPass = process.env.ADMIN_PASS || 'admin123';
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(defaultPass, saltRounds);
      
      await client.query('INSERT INTO users (email, password) VALUES ($1, $2)', [defaultEmail, hashedPassword]);
      console.log(`Default admin user created: ${defaultEmail}`);
    }

    console.log('Connected to the PostgreSQL database.');
  } finally {
    client.release();
  }

  // We return the pool so the server can run queries
  return pool;
}

module.exports = { initDB };
