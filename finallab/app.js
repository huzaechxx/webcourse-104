const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");
var expressLayouts = require("express-ejs-layouts");
// const multer = require('multer');
// const { MongoClient } = require('mongodb');
// const path = require('path');
// const fs = require('fs');
const isAuthenticated = require("./middleware/isauth");
let app = express();

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'views', 'posting.ejs'));
// });

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//       cb(null, `${Date.now()}-${file.originalname}`);
//     },
// });
  
// const upload = multer({ storage });
  

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
app.use('/',require('./routes/routes'));
app.use('/',require('./routes/contactus'));
app.use('/',require('./routes/beaches'));
app.use('/',require('./routes/farmhouse'));
app.use('/',require('./routes/tropical'));

mongoose.connect("mongodb://localhost:27017/swiftspaces").then(async()=>{
    console.log('mongodb connected');    
    // let property = await createproperty()
}).catch((err)=>{
    console.log(`error: ${err}`)
})


// app.post('/posting', upload.fields([
//     { name: 'pic1', maxCount: 1 },
//     { name: 'pic2', maxCount: 1 },
//     { name: 'pic3', maxCount: 1 }
//   ]), async (req, res) => {
//     const { name, location, type, price, availability } = req.body;
  
//     if (!req.files || !req.files.pic1 || !req.files.pic2 || !req.files.pic3) {
//       return res.status(400).send('All pictures are required.');
//     }
  
//     const pic1 = req.files.pic1[0];
//     const pic2 = req.files.pic2[0];
//     const pic3 = req.files.pic3[0];
  
//     try {
//       await client.connect();
//       const db = client.db('swiftspaces');
//       const collection = db.collection(type);
  
//       const property = {
//         name,
//         location,
//         type,
//         price: parseFloat(price),
//         availability,
//         pictures: [
//           { filename: pic1.filename, originalname: pic1.originalname },
//           { filename: pic2.filename, originalname: pic2.originalname },
//           { filename: pic3.filename, originalname: pic3.originalname },
//         ],
//       };
  
//       await collection.insertOne(property);
//       res.send('Property saved successfully');
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Error saving property');
//     } finally {
//       await client.close();
//     }
//   });
  
//   app.get('/posting',(req,res)=>{
//     res.render('posting');
//   });


// for (let index = 0; index < rooms.length; index++) {
//     let i = getRandomNumber(0,11);
//     const price = getRandomNumber(50, 200);
//     const checkin = getRandomNumber(1,13);
//     const checkout = getRandomNumber(15,29);
//     const rating = getRandomNumberfloat(3.5,4.9);
//     console.log(`${cities[index].location},$${price},${months[i].month}${checkin} - ${months[i].month}${checkout},${rooms[index].pic1},${rooms[index].pic2},${rooms[index].pic3},${rating}`);
//   }

