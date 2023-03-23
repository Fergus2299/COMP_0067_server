const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const InternalUsers = db.InternalUsers;
const ExternalUsers = db.ExternalUsers;


verifyToken = (req, res, next) => {
  console.log(req.headers);
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.role = decoded.role;
    req.userId = decoded.id;
    next();
  });
};

// assumes internal user
isAdmin = (req, res, next) => {
  InternalUsers.findByPk(req.userId).then(user => {
    if(user.ProgramId === 0) {
      // then they are an admin
      next();
      return;
    };
    res.status(403).send({
      message: "Require Admin Role!"
    });
    return;
  })
};
// assumes internal user
isAcademic = (req, res, next) => {
  InternalUsers.findByPk(req.userId).then(user => {
    if(user.ProgramId != 0) {
      // then they are an Academic
      next();
      return;
    };
    res.status(403).send({
      message: "Require Admin Role!"
    });
    return;
  })
};
const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isAcademic: isAcademic,
};

module.exports = authJwt;