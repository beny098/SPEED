/**
 * @author @JimmyCSH
 * The following script is a simple backend server
 * for our SPEED project. Our backend server uses Node.js
 * to load, request and respond from the server.
 */

const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("API is running");
});

server.listen(5000, console.log("Server is Working and Listening PORT 5000"));
