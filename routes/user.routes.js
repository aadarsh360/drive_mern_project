const express = require("express");

const router = express.Router();


router.get("/register", (req, res)=>{
    // res.send("user test route");
    res.render("register")
})

router.post('/register', (req, res)=>{
    console.log(req.body);
    res.send("user registered!!!");
})


module.exports = router;