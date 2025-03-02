const app = require("./app");
require("dotenv").config();
const {sql, testDbConn} = require("./db");

(async() => {
    try {
       await testDbConn(); 
        app.listen(process.env.PORT, () => {
            console.log("Server started at", process.env.PORT);
        });
    } catch (error) {
        process.exit(1);
    }
})();

process.on("SIGINT", async()=>{
    console.log("Shutting down database");
    await sql.end();
    process.exit(0);
})