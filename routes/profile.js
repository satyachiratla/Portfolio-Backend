const express = require("express");
const profileController = require("../controllers/profile");

const router = express.Router();

router.get("/profile", profileController.getProfile);
router.post("/createprofile", profileController.createProfile);
router.put("/editprofile/:_id", profileController.updateProfile);

module.exports = router;
