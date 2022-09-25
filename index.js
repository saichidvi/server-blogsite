const express = require("express");
const dotenv = require("dotenv");

//mongoDB atlas connection
const Connection = require("./database/db")

const app = express();
const PORT = 8000;
dotenv.config();

app.listen(PORT,() => {
   console.log(`Server is running on the PORT no ${PORT}`)
});


const USERNAME = process.env.DB_Username;
const PASSWORD = process.env.DB_Password

Connection(USERNAME,PASSWORD);