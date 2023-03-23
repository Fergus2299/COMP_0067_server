const express = require('express');
const router = express.Router();

const { verifySignUp, signIn } = require("../middleware");
const controller = require("../controllers/auth.controller");
// const {ExternalUsers} = require("../models");

router.post("/signup",
verifySignUp.checkDuplicateUsernameOrEmail, 
controller.signup
);

router.post("/externalsignin",
controller.externalsignin
);

// internal users don't need a sign in, we use the ucl api
// we need to assign them a token
router.post("/internalsignin", 
controller.internalsignin
);

module.exports = router;
