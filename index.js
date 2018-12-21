const express = require("express");
const http = require("http"); 

var PORT = 3000;
var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

server.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})