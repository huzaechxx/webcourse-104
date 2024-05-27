const express = require('express');
const { default: mongoose } = require('mongoose');
let router = express.Router();

let Schema = mongoose.Schema;

const farmhouseschema = new Schema(
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

let farmhouse = mongoose.model("farm",farmhouseschema);

router.get('/farmhouse',async(req,res)=>{
    const page =parseInt(req.query.page)  ||1;
    const limit = 8;
    const skip = (page - 1) * limit;
    try{
        const farmhousedata = await farmhouse.find({})
        .skip(skip)
        .limit(limit)
        .exec();
        const totalItems = await farmhouse.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        res.render('farmhouse',{farmhousedata,
            currentPage: page,
            totalPages,});
    }catch(error) {
        res.status(500).send(error.message);
      }
});




module.exports = router;