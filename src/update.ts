import { Client } from "pg";

async function forUpdate(
  email: string,
  password: string
) {
    const client = new Client({
        connectionString: "YOUR POSTGRESQL URL"
    });

    try {
        await client.connect();
        const update = `UPDATE users
        SET password = $1 
        WHERE email = $2`;
        const values = [password, email];
        await client.query(update, values);
        console.log("Update Successfull....");
    } catch (error) {
        console.log("Error while inserting Address: ", error);
    }finally{
        await client.end();
    }
}


forUpdate("yknilbro@gmail.com", "111111").catch(console.error);