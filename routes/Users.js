const express = require('express');
const router = express.Router();
const {Users} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');




router.post("/", async (req, res) => {
    const {email,password} = req.body;
    // Fergus: second hyperparam you might need to research, has something to do
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
    if(!user) { res.json({auth:false, message:"user doesn't exist!"})}
    else {
        bcrypt.compare(password, user.dataValues.password).then((match) => {
            if (!match) {res.json({auth:false, message:"wrong password email combination!"})} 
            else {
                // the user is fully authenticated (logged in)
                const id = user.dataValues.id;
                const token = jwt.sign({id: id, email: email}, "jwtSecret", {
                    expiresIn:300,
                })
                res.json({auth:true, token: token, result:user});
            }
        });
    };
});

module.exports = router;