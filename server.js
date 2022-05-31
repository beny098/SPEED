const express = require("express");

const server = express();

server.get('/', (req, res) => {
    res.send("API is running")
})

server.listen(5000, console.log("Server is Working and Listening PORT 5000"));