const Contacto = require("../models/contactos.model");

const getAllContactos = async (req, res, next) => {
  try {
    const contactos = await Contacto.find();
    res.json(contactos);
  } catch (error) {
    next(error);
  }
};

const createContacto = async (req, res, next) => {
  try {
    const contacto = await Contacto.create(req.body);
    res.json(contacto);
  } catch (error) {
    next(error);
  }
};

const updateContacto = async (req, res, next) => {
  const { contactoId } = req.params;
  try {
    const contacto = await Contacto.findByIdAndUpdate(contactoId, req.body, {
      new: true,
    });
    res.json(contacto);
  } catch (error) {
    next(error);
  }
};

const destroyContacto = async (req, res, next) => {
  const { contactoId } = req.params;
  try {
    const contacto = await Contacto.findByIdAndDelete(contactoId);
    res.json("Contact deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllContactos,
  createContacto,
  updateContacto,
  destroyContacto,
};
