const db = require("../models");
const config = require("../config/auth.config");
const ExternalUsers = db.ExternalUsers;
const InternalUsers = db.InternalUsers;


const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

// only for external users (for now)
exports.signup = (req, res, next) => {
  // Save User to Database
  const {email,password} = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    ExternalUsers.create({email: email, password:hash});
      res.json(`User successfully created`);    
      next();
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
// only for external users (for now)
exports.externalsignin = (req, res) => {
  ExternalUsers.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id, role: "ROLE_ExternalUser" }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      // var authorities = ["ROLE_ExternalUser"];

        res.status(200).send({
          id: user.id,
          email: user.email,
          role: "ROLE_ExternalUser",
          accessToken: token
        });
      })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// only for external users (for now)
exports.internalsignin = (req, res) => {
  InternalUsers.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var token = jwt.sign({ id: user.id,role:"ROLE_InternalUser" }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
        res.status(200).send({
          id: user.id,
          email: user.email,
          role: "ROLE_InternalUser",
          accessToken: token
        });
      })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
