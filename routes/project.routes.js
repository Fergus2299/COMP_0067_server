const express = require("express");
const router = express.Router();
// this posts instance is an object in the same format as in the posts file in models directory
const {Projects} = require("../models");
const {authJwt} = require("../middleware");


router.get("/externaluser/:externaluserId", async(req, res) => {
    console.log('executing');
    const externaluserId = req.params.externaluserId;
    // finding by primary key
    const projects = await Projects.findAll({where: {ExternalUserId: externaluserId}});
    res.json(projects);
});

// external user post project
router.post("/", 
authJwt.verifyToken, 
async (req, res) => {
    const ExternalUserId = req.userId;
    const project = req.body;
    project.ExternalUserId = ExternalUserId
    await Projects.create(project);
    res.json({result: 'success'});
});

module.exports = router;