const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
const path = require("path");

//User Authentication Routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/tokenIsValid", authController.tokenIsValid);
router.get("/", authController.authUser);

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
