// For DB connection and Creating users table....

import { Client } from "pg";

//one way to create a Client...

/*
const client = new Client({
    host: 'ep-damp-river-a7lmceu4.ap-southeast-2.aws.neon.tech',
    port: 5334,
    database: 'User',
    user: 'Users_owner',
    password: 'kpveUnL6C1ZP'
});
*/

// another way to create a Client....

const client = new Client({
  connectionString:
    "YOUR POSTGRESQL URL",
});

async function createUsersTable() {
  await client.connect();
  const result = await client.query(`
        CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE
        DEFAULT CURRENT_TIMESTAMP
        )
        `);
  console.log(result);
}

createUsersTable();
