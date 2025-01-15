const { Schema, model } = require("mongoose");

const educationSchema = new Schema(
  {
    institucion: String,
    titulo: String,
    fechaInicio: String,
    fechaFin: Date,
    descripcion: { type: String, maxlength: 500 },
    skillTitle: String,
    skillDescription: { type: String, maxlength: 300 },
    tecnologias: [{ type: String }],
  },
  { timestamps: true, versionKey: false }
);

const Education = model("education", educationSchema);
module.exports = Education;
