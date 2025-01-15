const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    id: Number,
    titulo: String,
    descripcion: String,
    tecnologias: [{ type: String }],
    categoria: String,
    urlGitHub: String,
    urlDemo: String,
    imagenDestacada: String,
  },
  { timestamps: true, versionKey: false }
);

const Project = model("project", projectSchema);
module.exports = Project;
