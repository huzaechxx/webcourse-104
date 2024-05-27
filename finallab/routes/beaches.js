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
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try{
        const beachesdata = await beaches.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await beaches.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('beaches',{beachesdata,
            currentPage: page,
            totalPages,});
    }catch(error) {
        res.status(500).send(error.message);
      }
});



router.get('/beachfront',async(req,res)=>{
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try{
        const beachesdata = await beaches.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await beaches.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);        
        res.render('beachfront',{beachesdata,
            currentPage: page,
            totalPages,});
    }catch(error) {
        res.status(500).send(error.message);
      }
});

module.exports = router;