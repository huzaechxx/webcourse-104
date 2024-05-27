const mongoose = require('mongoose');
const propertyschema = mongoose.Schema({
    location:String,
    price:String,
    avaliability:String,
    pic1:String,
    pic2:String,
    pic3:String,
    rating:String
});

const propertymodel = mongoose.model("beach",propertyschema);
module.exports = propertymodel;