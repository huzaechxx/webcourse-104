const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");
var expressLayouts = require("express-ejs-layouts");
const isAuthenticated = require("./middleware/isauth");
let app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Use either true or false
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(expressLayouts);
app.use(cookieParser());
app.use(session({
    secret: 'your_secret_key', // Replace with your secret key
    resave: false, // Added resave option
    saveUninitialized: false, // Added saveUninitialized option
    cookie: { secure: false } // Set secure to true if using HTTPS
}));app.use(require("./middleware/sitemiddleware")); 
app.use("/", require("./site/auth"));

const mongoose = require('mongoose');
app.listen(3000);
app.use(express.static('public'));
const router = require('./routes/routes');
const {createproperty} = require("./propertyop");

app.set("view engine","ejs");
app.get('/',router);
// app.get('/contactus',(req,res)=>{
//     res.render('contactus');
// })
app.use('/',require('./routes/contactus'));
app.use('/',require('./routes/beaches'));

mongoose.connect("mongodb://localhost:27017/swiftspaces").then(async()=>{
    console.log('mongodb connected');    
}).catch((err)=>{
    console.log(`error: ${err}`)
})


// for (let index = 0; index < rooms.length; index++) {
//     let i = getRandomNumber(0,11);
//     const price = getRandomNumber(50, 200);
//     const checkin = getRandomNumber(1,13);
//     const checkout = getRandomNumber(15,29);
//     const rating = getRandomNumberfloat(3.5,4.9);
//     console.log(`${cities[index].location},$${price},${months[i].month}${checkin} - ${months[i].month}${checkout},${rooms[index].pic1},${rooms[index].pic2},${rooms[index].pic3},${rating}`);
//   }

