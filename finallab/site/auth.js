const express = require("express");
const { default: mongoose } = require('mongoose');
let router = express.Router();
let User = require("../models/usermodel");
const bcrypt = require('bcrypt');
const { createproperty } = require("../propertyop");
let Schema = mongoose.Schema;

router.get("/register", (req, res) => {
  res.render("auth/register");
});
router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email});
  if (user) {
    // req.session.flash = {
    //   type: "danger",
    //   message: "User with given name already exist",
    // };
    res.flash("danger", req.body.email);
    return res.redirect("/register");
  }
  req.body.password = await bcrypt.hash(req.body.password, 10);
  user = new User();
  user.name = req.body.username,
  user.password = req.body.password
  await user.save();
  res.redirect("/login");
});
router.get("/logout", (req, res) => {
  req.session.user = null;
  res.flash("success", "Logged out Successfully");
  res.redirect("/login");
});
router.get("/login", (req, res) => {
  res.render("auth/login");
});
router.post("/login", async (req, res) => {
  let user = await User.findOne({ name: req.body.username });
  console.log(user.name+user.password);
  if (!user) {
    res.flash("danger", "USer with given email already exist");
    return res.redirect("/register");
  }
  const passwordmatched = await bcrypt.compare(req.body.password,user.password);
  if (!passwordmatched) {
    res.flash("danger", "invalid password");
    return res.redirect("/login");
  }
  req.session.user = user;
  res.flash("success", user.name + " Logged In");
  return res.redirect("/");
});


const trendschema = new Schema(
  {
    _id:String,
      location: String,
      price: String,
      avaliability: String,
      pic1: String,
      pic2: String,
      pic3: String,
      rating: String
  }
);

const creativeschema = new Schema(
  {
    _id:String,
      location: String,
      price: String,
      avaliability: String,
      pic1: String,
      pic2: String,
      pic3: String,
      rating: String
  }
);

const countrysideschema = new Schema(
  {
    _id:String,
      location: String,
      price: String,
      avaliability: String,
      pic1: String,
      pic2: String,
      pic3: String,
      rating: String
  }
);

const cavesschema = new Schema(
  {
    _id:String,
      location: String,
      price: String,
      avaliability: String,
      pic1: String,
      pic2: String,
      pic3: String,
      rating: String
  }
);

const amazingschema = new Schema(
  {
    _id:String,
      location: String,
      price: String,
      avaliability: String,
      pic1: String,
      pic2: String,
      pic3: String,
      rating: String
  }
);

const cruiseschema = new Schema(
  {
    _id:String,
      location: String,
      price: String,
      avaliability: String,
      pic1: String,
      pic2: String,
      pic3: String,
      rating: String
  }
);

const castleschema = new Schema(
  {
    _id:String,
      location: String,
      price: String,
      avaliability: String,
      pic1: String,
      pic2: String,
      pic3: String,
      rating: String
  }
);

const cabinschema = new Schema(
  {
    _id:String,
      location: String,
      price: String,
      avaliability: String,
      pic1: String,
      pic2: String,
      pic3: String,
      rating: String
  }
);

const roomschema = new Schema(
  {
      _id:String,
      location: String,
      price: String,
      avaliability: String,
      pic1: String,
      pic2: String,
      pic3: String,
      rating: String
  }
);


router.post("/booking",async (req,res) =>{
const page =parseInt(req.query.page)  ||1;
const limit = 8;
const skip = (page - 1) * limit;
let trend = mongoose.model("trend", trendschema);
let creative = mongoose.model("creativespace", creativeschema);
let cs = mongoose.model("countrysides", countrysideschema);
let caves = mongoose.model("cave", cavesschema);
let amazing = mongoose.model("amazings", amazingschema);
let cruise = mongoose.model("boat",cruiseschema);
let castles = mongoose.model("castle",castleschema);
let cabins = mongoose.model("cabinss",cabinschema);
let rooms = mongoose.model("room",roomschema);
let trenddata = await trend.find({location:req.body.location}).skip(skip)
.limit(limit)
.exec();
let creativedata = await creative.find({location:req.body.location}).skip(skip)
.limit(limit)
.exec();
let csdata = await cs.find({location:req.body.location}).skip(skip)
.limit(limit)
.exec();
let cavesdata = await caves.find({location:req.body.location}).skip(skip)
.limit(limit)
.exec();
let amazingdata = await amazing.find({location:req.body.location}).skip(skip)
.limit(limit)
.exec();
let cruisedata = await cruise.find({location:req.body.location}).skip(skip)
.limit(limit)
.exec();
let castlesdata = await castles.find({location:req.body.location}).skip(skip)
.limit(limit)
.exec();
let cabinsdata = await cabins.find({location:req.body.location}).skip(skip)
.limit(limit)
.exec();
let roomsdata = await rooms.find({location:req.body.location}).skip(skip)
.limit(limit)
.exec();
const totalItemstrend = await trend.countDocuments();
const totalItemscreative = await creative.countDocuments();
const totalItemscs = await cs.countDocuments();
const totalItemscaves = await caves.countDocuments();
const totalItemsamazing = await amazing.countDocuments();
const totalItemsrooms = await rooms.countDocuments();
const totalItemscabins = await cabins.countDocuments();
const totalItemscastles = await castles.countDocuments();
const totalItemscruise = await cruise.countDocuments();
const totalPages = Math.ceil(((totalItemscruise+totalItemscastles+totalItemsamazing+totalItemscabins+totalItemscaves+totalItemscreative+totalItemscs+totalItemsrooms+totalItemstrend)/60) / limit);
res.render('search',{trenddata,csdata,creativedata,cruisedata,cavesdata,amazingdata,castlesdata,cabinsdata,roomsdata,totalItemsamazing,totalItemscabins,totalItemscastles,totalItemscaves,totalItemscreative,totalItemscruise
  ,totalItemscs,totalItemsrooms,totalItemstrend,currentPage: page,totalPages
});
});

router.post("/posting",async (req,res)=>{
  const loc = req.body.location;
  const type =  req.body.type;
  const av = req.body.avaliability;
  const p1 = req.body.pic1;
  const p2 = req.body.pic2;
  const p3 = req.body.pic3;
  const pr = req.body.price;
  let property = createproperty(loc,pr,av,p1,p2,p3,3.5);
  
  console.log(property);
  res.redirect("home");
});
router.get("/posting",(req,res)=>{
  res.render('posting');
});
module.exports = router;