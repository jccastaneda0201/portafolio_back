const Laboral = require("../models/laboral.model");

const getAllLaboral = async (req, res, next) => {
  try {
    const laboral = await Laboral.find();
    res.json(laboral);
  } catch (error) {
    next(error);
  }
};

const getLaboralById = async (req, res, next) => {
  const { laboralId } = req.params;
  try {
    const laboral = await Laboral.findById(laboralId);
    res.json(laboral);
  } catch (error) {
    next(error);
  }
};

const createLaboral = async (req, res, next) => {
  try {
    const laboral = await Laboral.create(req.body);
    res.json(laboral);
  } catch (error) {
    next(error);
  }
};

const updateLaboral = async (req, res, next) => {
  const { laboralId } = req.params;
  try {
    const laboral = await Laboral.findByIdAndUpdate(laboralId, req.body, {
      new: true,
    });
    res.json(laboral);
  } catch (error) {
    next(error);
  }
};

const destroyLaboral = async (req, res, next) => {
  const { laboralId } = req.params;
  try {
    const laboral = await Laboral.findByIdAndDelete(laboralId);
    res.json("Work deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllLaboral,
  getLaboralById,
  createLaboral,
  updateLaboral,
  destroyLaboral,
};
