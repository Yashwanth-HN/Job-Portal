const express = require("express");
const { registerUser,loginUser, getUserProfile,forgotPassword,resetPassword,  updateProfile,} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Register user
router.post("/register", registerUser);

router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);
router.put(
  "/profile",
  protect,
  updateProfile
);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;