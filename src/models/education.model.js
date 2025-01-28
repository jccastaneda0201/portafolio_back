const { Schema, model } = require("mongoose");

const educationSchema = new Schema(
  {
    institucion: String,
    tituloObtenido: String,
    fechaInicio: Date,
    fechaFin: Date,
    actual: Boolean,
    logros: [{ type: String }],
    tecnologias: [{ type: String }],
  },
  { timestamps: true, versionKey: false }
);

const Education = model("education", educationSchema);
module.exports = Education;
