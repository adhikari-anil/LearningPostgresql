import { Client } from "pg"; // import Client from pg package..

async function  getUserByEmail(email: string) {    // function to get user with email argument...
    const client = new Client({      //client connection...
        connectionString: "YOUR POSTGRESQL URL"
    });
    try {
        await client.connect();      // client is getting connected from here...

        // this is the logic to get all the existing users....

          // const getUser = `SELECT * FROM users`;     
          // //const value = [email];                
          // const response = await client.query(getUser);   
          // console.log("User: ", response.rows);
          
        const getUser = `SELECT * FROM users WHERE email = $1`;   //it is about describing SQL queries..
        const value = [email];                                    // passing value to $1....
        const response = await client.query(getUser, value);      // getting response from database....
        console.log(" Inserted Successfully...", response.rows);
          
    } catch (error) {
        console.log("Error finding user: ", error);
    }finally{
        await client.end();   // ending client connection....
    }
}

getUserByEmail("yknilbro@gmail.com").catch(console.error);