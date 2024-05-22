const express = require('express');
const { default: mongoose } = require('mongoose');
let router = express.Router();

let Schema = mongoose.Schema;

const roomschema = new Schema(
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

let rooms = mongoose.model("rooms",roomschema);

router.get('/',async(req,res)=>{
    try{
        const roomdata = await rooms.find({});
        res.render('home',{roomdata});
    }catch(error) {
        res.status(500).send(error.message);
      }
});

module.exports = router;