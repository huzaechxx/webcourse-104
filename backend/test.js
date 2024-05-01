const express = require("express");
let server = express();

const router = require("./router/route.js")
server.listen(3000);
server.set("view engine","ejs");
server.use(express.static("public"));
server.use("/",router);
