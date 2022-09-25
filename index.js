const express = require("express");

//mongoDB atlas connection
const Connection = require("./database/db")

const app = express();
const PORT = 8000;

app.listen(PORT,() => {
   console.log(`Server is running on the PORT no ${PORT}`)
});

Connection();