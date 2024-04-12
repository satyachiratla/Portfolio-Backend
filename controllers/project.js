const Project = require("../models/projectShema");

exports.getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    return res.json(projects);
  } catch (err) {
    console.log(err.message);
  }
};

exports.createProject = async (req, res, next) => {
  const { title, description, techStack, image, liveLink, repoLink } = req.body;

  try {
    const project = new Project({
      title,
      description,
      techStack,
      image,
      liveLink,
      repoLink,
    });

    const result = await project.save();

    res.status(201).json({
      message: "Project created successfully!",
      project: result,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.editPorject = async (req, res, next) => {
  const projectId = req.params._id;
  const { title, description, techStack, image, liveLink, repoLink } = req.body;

  try {
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.title = title;
    project.description = description;
    project.techStack = techStack;
    project.image = image;
    project.liveLink = liveLink;
    project.repoLink = repoLink;

    const updatedProject = await project.save();

    res.json({
      message: "Project updated successfully",
      project: updatedProject,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteProject = async (req, res, next) => {
  let deletedProject = await Project.deleteOne(req.params);
  res.send(deletedProject);
};
