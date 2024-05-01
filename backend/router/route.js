let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
});
router.get("/contactus",(req,res)=>{
    res.render("contactus");
})

module.exports = router;