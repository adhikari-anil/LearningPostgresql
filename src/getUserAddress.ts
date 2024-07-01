import { Client } from "pg";

async function insertAddress(
  user_id: number
) {
    const client = new Client({
        connectionString: "YOUR POSTGRESQL URL"
    });

    try {
        await client.connect();
        const getaddress = `SELECT city, country, street, pincode 
        FROM addresses 
        WHERE user_id = $1`;
        const values = [user_id];
        const response = await client.query(getaddress, values);
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


insertAddress(1).catch(console.error);