require("dotenv").config();
const app = require("./src/app")
const connectToDB = require("./src/db/db")


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})

connectToDB();