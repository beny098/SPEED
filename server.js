const express = require("express");

const server = express();

server.get('/', (req, res) => {
    res.send("API is running")
})

server.listen(5000, console.log("Server is Working and Listening PORT 5000"));

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}