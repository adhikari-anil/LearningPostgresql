// Inserting datas to Addresses table...

import { Client } from "pg";

async function insertAddress(
  user_id: number,
  city: string,
  country: string,
  street: number,
  pincode: number
) {
    const client = new Client({
        connectionString: "YOUR POSTGRESQL URL"
    });

    try {
        await client.connect();
        const insertaddress = `INSERT INTO addresses (user_id, city, country, street, pincode)
        VALUES ($1,$2,$3,$4,$5)`;
        const values = [user_id, city, country, street, pincode];
        const response = await client.query(insertaddress, values);
        console.log("Addresses inserted successfully : ", response);
    } catch (error) {
        console.log("Error while inserting Address: ", error);
    }finally{
        await client.end();
    }
}


insertAddress(2, "Sunsari", "Nepal", 177, 171311).catch(console.error);