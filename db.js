const postgres = require("postgres");
require("dotenv").config();

const sql = postgres({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_UNAME,
    password: process.env.DB_PW
})

const testDbConn = async () => {
    try {
       await sql`SELECT 1`;
       console.log("Connected successfully to database");
    } catch (error) {
       console.error("Couldn't establish connection with database", error);
       throw error(); 
    }
}

module.exports={sql, testDbConn};