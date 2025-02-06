const express = require("express");

const router = express.Router();
const userModel = require('../models/user.model');

const { body, validationResult } = require('express-validator');



router.post("/register",
    body('email').trim().isEmail().isLength({ min: 13 }),
    body('password').trim().isLength({ min: 5 }),
    body('username').trim().isLength({ min: 3 }),
    async (req, res) => {
        // res.send("user test route");
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Invalid data"
            })
        }

        const {email, username, password} = req.body;

        const newUser = await userModel.create({
            email,
            username,
            password
        })

        res.json(newUser);
    })

router.get('/register', (req, res) => {
    res.render('register');
})


module.exports = router;