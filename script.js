
import { sql } from "@vercel/postgres";

export default async function Cart({ params }) {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}

const bcrypt = require('bcrypt'); // For password hashing
const { Pool } = require('pg'); // For database connection

// Database connection details (replace with yours)
const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432
});

async function validateLogin(username, password) {
  try {
    const client = await pool.connect();

    // Prepared statement to prevent SQL injection
    const query = 'SELECT user_id, password_hash FROM users WHERE username = $1';
    const result = await client.query(query, [username]);

    // Check if username exists
    if (result.rows.length === 0) {
      return { isValid: false, message: 'Invalid username or password' };
    }

    // Compare hashed password (avoid storing plain text password)
    const user = result.rows[0];
    const isValidPassword = await bcrypt.compare(password, user.password_hash);

    if (isValidPassword) {
      return { isValid: true, userId: user.user_id }; // Include user ID for further actions
    } else {
      return { isValid: false, message: 'Invalid username or password' };
    }

  } catch (err) {
    console.error('Error validating login:', err);
    return { isValid: false, message: 'Internal server error' }; // Generic error message for security
  } finally {
    client.release();
  }
}

// Example usage
const username = 'johndoe';
const password = 'password123';

validateLogin(username, password)
  .then(response => {
    if (response.isValid) {
      console.log('Login successful! User ID:', response.userId);
      // Perform actions based on successful login (e.g., generate session token)
    } else {
      console.error('Login failed:', response.message);
    }
  })
  .catch(err => {
    console.error('Error during login validation:', err);
  });
