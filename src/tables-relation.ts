//Relation between tables are established by using FOREIGN_KEY. Lets set Relation between adresses and users table


import { Client } from "pg";

async function relation() {
  const client = new Client({
    connectionString:"YOUR POSTGRESQL URL"
  });

  try {
    await client.connect();
    const makeTables = `CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
   );`;
    const response = await client.query(makeTables);
    console.log(" Address table is ready to use...", response);
  } catch (error) {
    console.log(error);
  }
}

relation().catch(console.error);
