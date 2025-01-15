const Project = require("../models/projects.model");

const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

const getProjectById = async (req, res, next) => {
  const { projectId } = req.params;
  try {
    const project = await Project.findById(projectId);
    res.json(project);
  } catch (error) {
    next(error);
  }
};

const createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.json(project);
  } catch (error) {
    next(error);
  }
};

const updateProjects = async (req, res, next) => {
  const { projectId } = req.params;
  try {
    const project = await Project.findByIdAndUpdate(projectId, req.body, {
      new: true,
    });
    res.json(project);
  } catch (error) {
    next(error);
  }
};

const destroyProject = async (req, res, next) => {
  const { projectId } = req.params;
  try {
    const project = await Project.findByIdAndDelete(projectId);
    res.json("Project deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProjects,
  destroyProject,
};
