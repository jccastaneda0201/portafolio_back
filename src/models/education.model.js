const { Schema, model } = require("mongoose");

const educationSchema = new Schema(
  {
    institucion: String,
    tituloObtenido: String,
    fechaInicio: String,
    fechaFin: Date,
    actual: Boolean,
    descripcion: { type: String, maxlength: 500 },
    tecnologias: [{ type: String }],
  },
  { timestamps: true, versionKey: false }
);

const Education = model("education", educationSchema);
module.exports = Education;
