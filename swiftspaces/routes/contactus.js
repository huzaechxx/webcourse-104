const express = require('express');
let router = express.Router();
router.get('/contactus',(req,res)=>{
    res.render('contactus');
});
module.exports = router;