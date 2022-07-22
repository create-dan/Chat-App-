const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
// console.log(registerUser);

// router.route("/").get(allUsers);
// or
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

module.exports = router;
