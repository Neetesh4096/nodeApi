const express = require("express");
const authController = require("./../controller/authcontroller");
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);
router.patch("/updatePassword", authController.updatePassword);

module.exports = router;
