const Education = require("../models/education.model");

const getAllEducation = async (req, res, next) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (error) {
    next(error);
  }
};

const createEducation = async (req, res, next) => {
  try {
    const education = await Education.create(req.body);
    res.json(education);
  } catch (error) {
    next(error);
  }
};

const updateEducation = async (req, res, next) => {
  const { educationId } = req.params;
  try {
    const education = await Education.findByIdAndUpdate(educationId, req.body, {
      new: true,
    });
    res.json(education);
  } catch (error) {
    next(error);
  }
};

const destroyEducation = async (req, res, next) => {
  const { educationId } = req.params;
  try {
    const education = await Education.findByIdAndDelete(educationId);
    res.json("Education deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllEducation,
  createEducation,
  updateEducation,
  destroyEducation,
};
