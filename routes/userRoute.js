const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

//User Authentication Routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/tokenIsValid", authController.tokenIsValid);
router.get("/", authController.authUser);

router.use((req, res) => {
  res.sendFile(path.joing(__dirname, "../client/build/index.html"));
});

module.exports = router;
