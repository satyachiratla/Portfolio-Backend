const express = require("express");
const multer = require("multer");

const uploadController = require("../controllers/uploadFile");

const router = express.Router();
// const upload = multer({ dest: "uploads/" });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("files"), uploadController.uploadFile);

module.exports = router;
