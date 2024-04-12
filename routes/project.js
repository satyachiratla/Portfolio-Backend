const express = require("express");
const projectController = require("../controllers/project");

const router = express.Router();

router.get("/projects", projectController.getProjects);
router.post("/project", projectController.createProject);
router.delete("/deleteproject/:_id", projectController.deleteProject);
router.put("/editproject/:_id", projectController.editPorject);

module.exports = router;
