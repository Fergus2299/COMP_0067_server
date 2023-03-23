const express = require('express');
const router = express.Router();

const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

// assume that they are the default user
router.get(
  "/test/externaluser",
  authJwt.verifyToken,
  controller.externalUserBoard
);

router.get(
  "/test/admin",
  authJwt.verifyToken,
  authJwt.isAdmin,
  controller.adminBoard,
);

router.get(
  "/test/academic",
  authJwt.verifyToken,
  authJwt.isAcademic,
  controller.adminBoard,
);



module.exports = router;