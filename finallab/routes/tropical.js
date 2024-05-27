const express = require('express');
const { default: mongoose } = require('mongoose');
let router = express.Router();

let Schema = mongoose.Schema;

const tropicalschema = new Schema(
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

let tropical = mongoose.model("beache",tropicalschema);

router.get('/tropical',async(req,res)=>{
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try{
        const tropicaldata = await tropical.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await tropical.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('tropical',{tropicaldata,
            currentPage: page,
            totalPages,});
    }catch(error) {
        res.status(500).send(error.message);
      }
});



const cabinschema = new Schema(
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

let cabins = mongoose.model("cabins",cabinschema);

router.get('/cabins',async(req,res)=>{
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try{
        const cabindata = await cabins.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await cabins.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('cabins',{cabindata,
            currentPage: page,
            totalPages,});
    }catch(error) {
        res.status(500).send(error.message);
      }
});



router.get('/camping',async(req,res)=>{
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try{
        const cabindata = await cabins.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await cabins.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('cabins',{cabindata,
            currentPage: page,
            totalPages,});
    }catch(error) {
        res.status(500).send(error.message);
      }
});

const castleschema = new Schema(
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

let castles = mongoose.model("castles",castleschema);

router.get('/castle',async(req,res)=>{
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try{
        const castledata = await castles.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await castles.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('castle',{castledata,
            currentPage: page,
            totalPages,});
    }catch(error) {
        res.status(500).send(error.message);
      }
});



const cruiseschema = new Schema(
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

let cruise = mongoose.model("boats",cruiseschema);

router.get('/cruise',async(req,res)=>{
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try{
        const cruisedata = await cruise.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await cruise.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('cruise',{cruisedata,
            currentPage: page,
            totalPages,});
    }catch(error) {
        res.status(500).send(error.message);
      }
});


const amazingschema = new Schema(
    {
        location: String,
        price: String,
        avaliability: String,
        pic1: String,
        pic2: String,
        pic3: String,
        rating: String
    }
);

let amazing = mongoose.model("amazing", amazingschema);

router.get('/amazing', async (req, res) => {
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try {
        const amazingdata = await amazing.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await amazing.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('amazing', { amazingdata,
            currentPage: page,
            totalPages, });
    } catch (error) {
        res.status(500).send(error.message);
    }
});



const cavesschema = new Schema(
    {
        location: String,
        price: String,
        avaliability: String,
        pic1: String,
        pic2: String,
        pic3: String,
        rating: String
    }
);

let caves = mongoose.model("caves", cavesschema);

router.get('/caves', async (req, res) => {
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try {
        const cavesdata = await caves.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await caves.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('caves', { cavesdata,
            currentPage: page,
            totalPages, });
    } catch (error) {
        res.status(500).send(error.message);
    }
});


const countrysideschema = new Schema(
    {
        location: String,
        price: String,
        avaliability: String,
        pic1: String,
        pic2: String,
        pic3: String,
        rating: String
    }
);

let cs = mongoose.model("countryside", countrysideschema);

router.get('/countryside', async (req, res) => {
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try {
        const countrysidedata = await cs.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await cs.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('countryside', { countrysidedata,
            currentPage: page,
            totalPages, });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const creativeschema = new Schema(
    {
        location: String,
        price: String,
        avaliability: String,
        pic1: String,
        pic2: String,
        pic3: String,
        rating: String
    }
);

let creative = mongoose.model("creativespaces", creativeschema);

router.get('/creative', async (req, res) => {
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try {
        const creativedata = await creative.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await creative.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('creative', { creativedata,
            currentPage: page,
            totalPages, });
    } catch (error) {
        res.status(500).send(error.message);
    }
});






const trendschema = new Schema(
    {
        location: String,
        price: String,
        avaliability: String,
        pic1: String,
        pic2: String,
        pic3: String,
        rating: String
    }
);

let trend = mongoose.model("trends", trendschema);

router.get('/trend', async (req, res) => {
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try {
        const trenddata = await trend.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await trend.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('trend', { trenddata,
            currentPage: page,
            totalPages, });
    } catch (error) {
        res.status(500).send(error.message);
    }
});





module.exports = router;