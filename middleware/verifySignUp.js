// checks whether email is already in use 

const db = require("../models");
const ExternalUsers = db.ExternalUsers;

checkDuplicateUsernameOrEmail = async (req, res,next) => {
    // Email
    const user =  await ExternalUsers.findOne({where: {email: req.body.email}})
    if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
    }
    next();
  };

  const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  };
  
  module.exports = verifySignUp;