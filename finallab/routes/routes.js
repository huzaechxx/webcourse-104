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
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try{
        const roomdata = await rooms.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await rooms.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('home',{roomdata,
            currentPage: page,
            totalPages,});
    }catch(error) {
        res.status(500).send(error.message);
      }
});

router.get('/home',async(req,res)=>{
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try{
        const roomdata = await rooms.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await rooms.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('home',{roomdata,
            currentPage: page,
            totalPages,});
    }catch(error) {
        res.status(500).send(error.message);
      }
});


router.get('/booking',async(req,res)=>{
    try{
        res.render('booking');
    }catch(error) {
        res.status(500).send(error.message);
      }
});

router.get('/finalbooking',async (req,res)=>{
    const propertyid = req.query.propertyid;
    const propertypic = req.query.propertypic;
    const ploc = req.query.ploc;
    const pav = req.query.pav;
    const pp = req.query.pp;
    
    try{
        res.render('finalbooking',{propertyid,propertypic,ploc,pav,pp});
    }catch(error) {
        res.status(500).send(error.message);
      }
});

module.exports = router;

