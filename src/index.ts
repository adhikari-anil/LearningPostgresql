// Inserting user info's in users table...

import { Client } from "pg";

async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    connectionString:
      "YOUR POSTGRESQL URL",
  });

  //This is an unsecure way to create user...
  /*
  try {
    await client.connect();
    const insertData = `INSERT INTO users(username, email, password)
    VALUES ('copyme', 'yknilbro@gmail.com', '0000000');
    `;
    const response = await client.query(insertData);
    console.log("Insertion Successfull: ", response);
  } catch (error) {
    console.log("Errors while insertion...", error);
  }
  */

  // This is the secure one with SQL injection....
  try {
    await client.connect();
    const insertData = `INSERT INTO users(username, email, password)
    VALUES ($1,$2,$3)
    `;
    const values = [username, email, password];
    const response = await client.query(insertData, values);
    console.log("Insertion Successfull...", response);
  } catch (error) {
    console.log("Error on inserting data..", error);
  } finally {
    await client.end();
  }
}

insertData("Hello", "12@gmail.com", "000000").catch(console.error);
