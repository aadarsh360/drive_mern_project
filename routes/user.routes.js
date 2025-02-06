const express = require("express");

const router = express.Router();
const { body, validationResult } = require('express-validator');



router.post("/register",
    body('email').trim().isEmail().isLength({ min: 13 }),
    body('password').trim().isLength({ min: 5 }),
    body('username').trim().isLength({ min: 3 }),
    (req, res) => {
        // res.send("user test route");
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Invalid data"
            })
        }

        res.send(errors);
    })

router.get('/register', (req, res) => {
    res.render('register');
})


module.exports = router;