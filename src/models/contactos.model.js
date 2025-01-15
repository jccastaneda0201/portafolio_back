const { Schema, model } = require("mongoose");

const contactoSchema = new Schema(
  {
    nombre: String,
    email: { type: String, unique: true },
    asunto: String,
    mensaje: String,
  },
  { timestamps: true, versionKey: false }
);

const Contacto = model("Contacto", contactoSchema);
module.exports = Contacto;
