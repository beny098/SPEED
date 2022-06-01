const express = require("express");

const server = express();

server.get('/', (req, res) => {
    res.send("API is running")
})

server.listen(5000, console.log("Server is Working and Listening PORT 5000"));

connectDB();
server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());
server.use(cors({ origin: true, credentials: true }));

// Init Middleware
server.use(express.json({ extended: false }));

server.use("/api/speed", SPEED);

if (process.env.env === "prod") {
    server.use(express.static(path.join(__dirname, "frontend/build")));

    // any request that is not caught by the above routes, send back index.html
    server.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
    });
} else {
    server.get("/", (req, res) => {
        res.send("Api running!");
    });
}

const port = process.env.PORT || 8082;

module.exports = server.listen(port, () =>
    console.log(`Server running on port ${port}`)
);