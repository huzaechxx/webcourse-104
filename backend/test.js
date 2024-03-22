const express = require("express");
let server = express();
server.set("view engine","ejs");
server.use(express.static("public"));
server.get("/",function(req,res){
    // res.send("shadi mubarak barum");
    // res.send({name : "barum",status:"married"});
})
server.listen(3000);