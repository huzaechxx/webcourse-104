const express = require('express');
const { default: mongoose } = require('mongoose');
let router = express.Router();

let Schema = mongoose.Schema;

const beachesschema = new Schema(
    {
    location:String,
    price:String,
    avaliability:String,
    pic1:String,
    pic2:String,
    pic3:String,
    rating:String
    }
);

let beaches = mongoose.model("beaches",beachesschema);

router.get('/beaches',async(req,res)=>{
    try{
        const beachesdata = await beaches.find({});
        res.render('beaches',{beachesdata});
    }catch(error) {
        res.status(500).send(error.message);
      }
});

module.exports = router;