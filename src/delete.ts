import { Client } from "pg";

async function deleteData(id: number) {
  const client = new Client({
    connectionString: "YOUR POSTGRESQL URL"
  });

  try {
    await client.connect();
    const deleteData = `DELETE FROM users WHERE id = $1`
    const values = [id];
    await client.query(deleteData, values);
    console.log("User Deleted Successfully...");
  } catch (error) {
    console.log("Error while inserting Address: ", error);
  } finally {
    await client.end();
  }
}

deleteData(1).catch(console.error);
