const {
  getAllEducation,
  createEducation,
  updateEducation,
  destroyEducation,
} = require("../../controllers/education.controller");

const router = require("express").Router();

router.get("/", getAllEducation);

router.post("/", createEducation);

router.put("/:educationId", updateEducation);

router.delete("/:educationId", destroyEducation);

module.exports = router;
