const express = require('express');
const router = express.Router();
const {Users} = require("../models");
const bcrypt = require("bcrypt");


router.post("/", async (req, res) => {
    const {email, password} = req.body;
    // second hyperparam you might need to research, has something to do
    // with how hashed the password is.
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({email: email, password:hash});
    });
    res.json(`User with email: ${email} successfully created`);
});

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    // find if there is even a user with that email
    const user = await Users.findOne({where: {email: email}});
    // do the hashed passwords match? if so login, else no login
    if(!user) { res.json("user doesn't exist!")}
    else {
        bcrypt.compare(password, user.dataValues.password).then((match) => {
            !match ? res.json("wrong password") : res.json(`logged in`);
        })
    };
});

module.exports = router;