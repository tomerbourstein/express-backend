const express = require("express");
const router = express.Router();
const sessionController = require("../controlles/sessionController");

router.post("/", sessionController.login);
router.delete("/logout:token", sessionController.logout);

module.exports = router;
