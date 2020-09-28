const express = require("express");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");
const router = express.Router();

//User Authentication Routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.put("/verify/:token", authController.verifyToken);
router.post("/forgot-password", authController.forgotPassword);
router.put("/changePassword/:token", authController.changePassword);
router.post("/tokenIsValid", authController.tokenIsValid);
router.get("/", auth, authController.authUser);

module.exports = router;
