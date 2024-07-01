// What if you have to get the user info and also the addresses info at the same time then JOIN come into action...

import { Client } from "pg";

async function joins(
  id: number
) {
    const client = new Client({
        connectionString: "YOUR POSTGRESQL URL"
    });

    try {
        await client.connect();
        const forJoins = `SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode 
        FROM users u
        JOIN addresses a ON u.id = a.user_id 
        WHERE u.id = $1`;               // to get all info from 2 table by sending just an id allocated to user..
        const values = [id];
        const response = await client.query(forJoins, values);
        if(response.rowCount == 0 || response.rowCount == null){
            console.log("NO any user with such user_id...");
        }else{
            console.log("Addresses inserted successfully : ", response);
        }
    } catch (error) {
        console.log("Error while inserting Address: ", error);
    }finally{
        await client.end();
    }
}

joins(1).catch(console.error);