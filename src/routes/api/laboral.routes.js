const {
  getAllLaboral,
  createLaboral,
  updateLaboral,
  destroyLaboral,
  getLaboralById,
} = require("../../controllers/laboral.controll");

const router = require("express").Router();

router.get("/", getAllLaboral);

router.get("/:laboralId", getLaboralById);

router.post("/", createLaboral);

router.put("/:laboralId", updateLaboral);

router.delete("/:laboralId", destroyLaboral);

module.exports = router;
