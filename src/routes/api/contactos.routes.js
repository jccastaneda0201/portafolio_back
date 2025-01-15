const {
  getAllContactos,
  createContacto,
  updateContacto,
  destroyContacto,
} = require("../../controllers/contactos.controll");
const {
  updateEducation,
  destroyEducation,
} = require("../../controllers/education.controller");

const router = require("express").Router();

router.get("/", getAllContactos);

router.post("/", createContacto);

router.put("/:contactoId", updateContacto);

router.delete("/:contactoId", destroyContacto);

module.exports = router;
